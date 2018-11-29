const { prisma } = require('./generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')

const resolvers = {
  Query: {
    quarks(root, args, context) {
      return context.prisma.quarks()
    },
    gluons(root, args, context) {
      return context.prisma.gluons()
    },
    users(root, args, context) {
      return context.prisma.users()
    },
    publishedPosts(root, args, context) {
      return context.prisma.posts({ where: { published: true } })
    },
    post(root, args, context) {
      return context.prisma.post({ id: args.postId })
    },
    postsByUser(root, args, context) {
      return context.prisma.user({
        id: args.userId
      }).posts()
    }
  },
  Mutation: {
    createQuark(root, args, context) {
      return context.prisma.createQuark(
        { name: args.name, description: args.description },
      )
    },
    deleteQuark(root, args, context) {
      return context.prisma.deleteQuark(
        {
          id: args.quarkId
        }
      )
    },
    createGluon(root, args, context) {
      console.log(args.activeId)
      console.log(args.passiveId)
      return context.prisma.createGluon (
        {
          relation: args.relation,
          activeQuark: {
            connect: { id: args.activeId }
          },
          passiveQuark: {
            connect: { id: args.passiveId }
          }
        },
      )
    },
    deleteGluon(root, args, context) {
      return context.prisma.deleteGluon(
        {
          id: args.gluonId
        }
      )
    },

    createUser(root, args, context) {
      return context.prisma.createUser(
        { name: args.name, password: args.password },
      )
    },
    deleteUser(root, args, context) {
      return context.prisma.deleteUser(
        {
          id: args.userId
        }
      )
    },
    createDraft(root, args, context) {
      return context.prisma.createPost(
        {
          title: args.title,
          author: {
            connect: { id: args.userId }
          }
        },
      )
    },
    publish(root, args, context) {
      return context.prisma.updatePost(
        {
          where: { id: args.postId },
          data: { published: true },
        },
      )
    }
  },
  User: {
    posts(root, args, context) {
      return context.prisma.user({
        id: root.id
      }).posts()
    }
  },
  Post: {
    author(root, args, context) {
      return context.prisma.post({
        id: root.id
      }).author()
    }
  },
  Quark: {
    actives(root, args, context) {
      return context.prisma.quark({
        id: root.id
      }).actives()
    },
    passives(root, args, context) {
      return context.prisma.quark({
        id: root.id
      }).passives()
    }
  },
  Gluon: {
    activeQuark(root, args, context) {
      return context.prisma.gluon({
        id: root.id
      }).activeQuark()
    },
    passiveQuark(root, args, context) {
      return context.prisma.gluon({
        id: root.id
      }).passiveQuark()
    }
  }
}

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: {
    prisma
  },
})
server.start(() => console.log('Server is running on http://localhost:4000'))
