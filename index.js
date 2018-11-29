const { prisma } = require('./generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')

const resolvers = {
  Query: {
    quark(root, args, context) {
      return context.prisma.quark({ name: args.name })
    },
    quarks(root, args, context) {
      return context.prisma.quarks()
    },
    gluons(root, args, context) {
      return context.prisma.gluons()
    },
    quarkTypes(root, args, context) {
      return context.prisma.quarkTypes()
    },
    gluonTypes(root, args, context) {
      return context.prisma.gluonTypes()
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
    createQuarkType(root, args, context) {
      return context.prisma.createQuarkType(
        { name: args.name,
          imagePath: args.imagePath,
          nameProp: args.nameProp,
          startProp: args.startProp,
          endProp: args.endProp,
          hasGender: args.hasGender,
          sort1: args.sort1,
          sort2: args.sort2,
        },
      )
    },
    createGluonType(root, args, context) {
      return context.prisma.createGluonType(
        { name: args.name,
          caption: args.caption,
          captionJa: args.captionJa,
          sort1: args.sort1,
          sort2: args.sort2,
        },
      )
    },

    createQuark(root, args, context) {
      return context.prisma.createQuark(
        { name: args.name, description: args.description },
      )
    },
    updateQuark(root, args, context) {
      return context.prisma.updateQuark(
        {
          where: { id: args.quarkId },
          data: {
            name: args.name,
            lastModifiedUser: {
              connect: { id: args.userId }
            },
            quarkType: {
              connect: { id: args.quarkTypeId }
            }
          },
        },
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
    updateGluon(root, args, context) {
      return context.prisma.updateGluon(
        {
          where: { id: args.gluonId },
          data: {
            relation: args.relation,
            suffix: args.suffix,
            lastModifiedUser: {
              connect: { id: args.userId }
            },
            gluonType: {
              connect: { id: args.gluonTypeId }
            }
          },
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
    },
    author(root, args, context) {
      return context.prisma.quark({
        id: root.id
      }).author()
    },
    lastModifiedUser(root, args, context) {
      return context.prisma.quark({
        id: root.id
      }).lastModifiedUser()
    },
    quarkType(root, args, context) {
      return context.prisma.quark({
        id: root.id
      }).quarkType()
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
    },
    author(root, args, context) {
      return context.prisma.gluon({
        id: root.id
      }).author()
    },
    lastModifiedUser(root, args, context) {
      return context.prisma.gluon({
        id: root.id
      }).lastModifiedUser()
    },
    gluonType(root, args, context) {
      return context.prisma.gluon({
        id: root.id
      }).gluonType()
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
