module.exports = {
        typeDefs: /* GraphQL */ `type AggregateGluon {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateQuark {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Gluon {
  id: ID!
  activeQuark: Quark!
  passiveQuark: Quark!
  relation: String!
  start: DateTime
  end: DateTime
  startAccuracy: String
  endAccuracy: String
  isMomentary: Boolean
  url: String
  isPrivate: Boolean
  isExclusive: Boolean
  author: User
  lastModifiedUser: User
  createdAt: DateTime!
  updatedAt: DateTime!
}

type GluonConnection {
  pageInfo: PageInfo!
  edges: [GluonEdge]!
  aggregate: AggregateGluon!
}

input GluonCreateInput {
  activeQuark: QuarkCreateOneWithoutActivesInput!
  passiveQuark: QuarkCreateOneWithoutPassivesInput!
  relation: String!
  start: DateTime
  end: DateTime
  startAccuracy: String
  endAccuracy: String
  isMomentary: Boolean
  url: String
  isPrivate: Boolean
  isExclusive: Boolean
  author: UserCreateOneInput
  lastModifiedUser: UserCreateOneInput
}

input GluonCreateManyWithoutActiveQuarkInput {
  create: [GluonCreateWithoutActiveQuarkInput!]
  connect: [GluonWhereUniqueInput!]
}

input GluonCreateManyWithoutPassiveQuarkInput {
  create: [GluonCreateWithoutPassiveQuarkInput!]
  connect: [GluonWhereUniqueInput!]
}

input GluonCreateWithoutActiveQuarkInput {
  passiveQuark: QuarkCreateOneWithoutPassivesInput!
  relation: String!
  start: DateTime
  end: DateTime
  startAccuracy: String
  endAccuracy: String
  isMomentary: Boolean
  url: String
  isPrivate: Boolean
  isExclusive: Boolean
  author: UserCreateOneInput
  lastModifiedUser: UserCreateOneInput
}

input GluonCreateWithoutPassiveQuarkInput {
  activeQuark: QuarkCreateOneWithoutActivesInput!
  relation: String!
  start: DateTime
  end: DateTime
  startAccuracy: String
  endAccuracy: String
  isMomentary: Boolean
  url: String
  isPrivate: Boolean
  isExclusive: Boolean
  author: UserCreateOneInput
  lastModifiedUser: UserCreateOneInput
}

type GluonEdge {
  node: Gluon!
  cursor: String!
}

enum GluonOrderByInput {
  id_ASC
  id_DESC
  relation_ASC
  relation_DESC
  start_ASC
  start_DESC
  end_ASC
  end_DESC
  startAccuracy_ASC
  startAccuracy_DESC
  endAccuracy_ASC
  endAccuracy_DESC
  isMomentary_ASC
  isMomentary_DESC
  url_ASC
  url_DESC
  isPrivate_ASC
  isPrivate_DESC
  isExclusive_ASC
  isExclusive_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GluonPreviousValues {
  id: ID!
  relation: String!
  start: DateTime
  end: DateTime
  startAccuracy: String
  endAccuracy: String
  isMomentary: Boolean
  url: String
  isPrivate: Boolean
  isExclusive: Boolean
  createdAt: DateTime!
  updatedAt: DateTime!
}

type GluonSubscriptionPayload {
  mutation: MutationType!
  node: Gluon
  updatedFields: [String!]
  previousValues: GluonPreviousValues
}

input GluonSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GluonWhereInput
  AND: [GluonSubscriptionWhereInput!]
  OR: [GluonSubscriptionWhereInput!]
  NOT: [GluonSubscriptionWhereInput!]
}

input GluonUpdateInput {
  activeQuark: QuarkUpdateOneRequiredWithoutActivesInput
  passiveQuark: QuarkUpdateOneRequiredWithoutPassivesInput
  relation: String
  start: DateTime
  end: DateTime
  startAccuracy: String
  endAccuracy: String
  isMomentary: Boolean
  url: String
  isPrivate: Boolean
  isExclusive: Boolean
  author: UserUpdateOneInput
  lastModifiedUser: UserUpdateOneInput
}

input GluonUpdateManyMutationInput {
  relation: String
  start: DateTime
  end: DateTime
  startAccuracy: String
  endAccuracy: String
  isMomentary: Boolean
  url: String
  isPrivate: Boolean
  isExclusive: Boolean
}

input GluonUpdateManyWithoutActiveQuarkInput {
  create: [GluonCreateWithoutActiveQuarkInput!]
  delete: [GluonWhereUniqueInput!]
  connect: [GluonWhereUniqueInput!]
  disconnect: [GluonWhereUniqueInput!]
  update: [GluonUpdateWithWhereUniqueWithoutActiveQuarkInput!]
  upsert: [GluonUpsertWithWhereUniqueWithoutActiveQuarkInput!]
}

input GluonUpdateManyWithoutPassiveQuarkInput {
  create: [GluonCreateWithoutPassiveQuarkInput!]
  delete: [GluonWhereUniqueInput!]
  connect: [GluonWhereUniqueInput!]
  disconnect: [GluonWhereUniqueInput!]
  update: [GluonUpdateWithWhereUniqueWithoutPassiveQuarkInput!]
  upsert: [GluonUpsertWithWhereUniqueWithoutPassiveQuarkInput!]
}

input GluonUpdateWithoutActiveQuarkDataInput {
  passiveQuark: QuarkUpdateOneRequiredWithoutPassivesInput
  relation: String
  start: DateTime
  end: DateTime
  startAccuracy: String
  endAccuracy: String
  isMomentary: Boolean
  url: String
  isPrivate: Boolean
  isExclusive: Boolean
  author: UserUpdateOneInput
  lastModifiedUser: UserUpdateOneInput
}

input GluonUpdateWithoutPassiveQuarkDataInput {
  activeQuark: QuarkUpdateOneRequiredWithoutActivesInput
  relation: String
  start: DateTime
  end: DateTime
  startAccuracy: String
  endAccuracy: String
  isMomentary: Boolean
  url: String
  isPrivate: Boolean
  isExclusive: Boolean
  author: UserUpdateOneInput
  lastModifiedUser: UserUpdateOneInput
}

input GluonUpdateWithWhereUniqueWithoutActiveQuarkInput {
  where: GluonWhereUniqueInput!
  data: GluonUpdateWithoutActiveQuarkDataInput!
}

input GluonUpdateWithWhereUniqueWithoutPassiveQuarkInput {
  where: GluonWhereUniqueInput!
  data: GluonUpdateWithoutPassiveQuarkDataInput!
}

input GluonUpsertWithWhereUniqueWithoutActiveQuarkInput {
  where: GluonWhereUniqueInput!
  update: GluonUpdateWithoutActiveQuarkDataInput!
  create: GluonCreateWithoutActiveQuarkInput!
}

input GluonUpsertWithWhereUniqueWithoutPassiveQuarkInput {
  where: GluonWhereUniqueInput!
  update: GluonUpdateWithoutPassiveQuarkDataInput!
  create: GluonCreateWithoutPassiveQuarkInput!
}

input GluonWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  activeQuark: QuarkWhereInput
  passiveQuark: QuarkWhereInput
  relation: String
  relation_not: String
  relation_in: [String!]
  relation_not_in: [String!]
  relation_lt: String
  relation_lte: String
  relation_gt: String
  relation_gte: String
  relation_contains: String
  relation_not_contains: String
  relation_starts_with: String
  relation_not_starts_with: String
  relation_ends_with: String
  relation_not_ends_with: String
  start: DateTime
  start_not: DateTime
  start_in: [DateTime!]
  start_not_in: [DateTime!]
  start_lt: DateTime
  start_lte: DateTime
  start_gt: DateTime
  start_gte: DateTime
  end: DateTime
  end_not: DateTime
  end_in: [DateTime!]
  end_not_in: [DateTime!]
  end_lt: DateTime
  end_lte: DateTime
  end_gt: DateTime
  end_gte: DateTime
  startAccuracy: String
  startAccuracy_not: String
  startAccuracy_in: [String!]
  startAccuracy_not_in: [String!]
  startAccuracy_lt: String
  startAccuracy_lte: String
  startAccuracy_gt: String
  startAccuracy_gte: String
  startAccuracy_contains: String
  startAccuracy_not_contains: String
  startAccuracy_starts_with: String
  startAccuracy_not_starts_with: String
  startAccuracy_ends_with: String
  startAccuracy_not_ends_with: String
  endAccuracy: String
  endAccuracy_not: String
  endAccuracy_in: [String!]
  endAccuracy_not_in: [String!]
  endAccuracy_lt: String
  endAccuracy_lte: String
  endAccuracy_gt: String
  endAccuracy_gte: String
  endAccuracy_contains: String
  endAccuracy_not_contains: String
  endAccuracy_starts_with: String
  endAccuracy_not_starts_with: String
  endAccuracy_ends_with: String
  endAccuracy_not_ends_with: String
  isMomentary: Boolean
  isMomentary_not: Boolean
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  isPrivate: Boolean
  isPrivate_not: Boolean
  isExclusive: Boolean
  isExclusive_not: Boolean
  author: UserWhereInput
  lastModifiedUser: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [GluonWhereInput!]
  OR: [GluonWhereInput!]
  NOT: [GluonWhereInput!]
}

input GluonWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createGluon(data: GluonCreateInput!): Gluon!
  updateGluon(data: GluonUpdateInput!, where: GluonWhereUniqueInput!): Gluon
  updateManyGluons(data: GluonUpdateManyMutationInput!, where: GluonWhereInput): BatchPayload!
  upsertGluon(where: GluonWhereUniqueInput!, create: GluonCreateInput!, update: GluonUpdateInput!): Gluon!
  deleteGluon(where: GluonWhereUniqueInput!): Gluon
  deleteManyGluons(where: GluonWhereInput): BatchPayload!
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  deletePost(where: PostWhereUniqueInput!): Post
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  createQuark(data: QuarkCreateInput!): Quark!
  updateQuark(data: QuarkUpdateInput!, where: QuarkWhereUniqueInput!): Quark
  updateManyQuarks(data: QuarkUpdateManyMutationInput!, where: QuarkWhereInput): BatchPayload!
  upsertQuark(where: QuarkWhereUniqueInput!, create: QuarkCreateInput!, update: QuarkUpdateInput!): Quark!
  deleteQuark(where: QuarkWhereUniqueInput!): Quark
  deleteManyQuarks(where: QuarkWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Post {
  id: ID!
  title: String!
  published: Boolean!
  author: User
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  title: String!
  published: Boolean
  author: UserCreateOneWithoutPostsInput
}

input PostCreateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateWithoutAuthorInput {
  title: String!
  published: Boolean
}

type PostEdge {
  node: Post!
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  published_ASC
  published_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PostPreviousValues {
  id: ID!
  title: String!
  published: Boolean!
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostWhereInput
  AND: [PostSubscriptionWhereInput!]
  OR: [PostSubscriptionWhereInput!]
  NOT: [PostSubscriptionWhereInput!]
}

input PostUpdateInput {
  title: String
  published: Boolean
  author: UserUpdateOneWithoutPostsInput
}

input PostUpdateManyMutationInput {
  title: String
  published: Boolean
}

input PostUpdateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
}

input PostUpdateWithoutAuthorDataInput {
  title: String
  published: Boolean
}

input PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutAuthorDataInput!
}

input PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutAuthorDataInput!
  create: PostCreateWithoutAuthorInput!
}

input PostWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  published: Boolean
  published_not: Boolean
  author: UserWhereInput
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  NOT: [PostWhereInput!]
}

input PostWhereUniqueInput {
  id: ID
}

type Quark {
  id: ID!
  name: String!
  description: String
  start: DateTime
  end: DateTime
  startAccuracy: String
  endAccuracy: String
  isMomentary: Boolean
  url: String
  isPrivate: Boolean
  isExclusive: Boolean
  author: User
  lastModifiedUser: User
  createdAt: DateTime!
  updatedAt: DateTime!
  actives(where: GluonWhereInput, orderBy: GluonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Gluon!]
  passives(where: GluonWhereInput, orderBy: GluonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Gluon!]
}

type QuarkConnection {
  pageInfo: PageInfo!
  edges: [QuarkEdge]!
  aggregate: AggregateQuark!
}

input QuarkCreateInput {
  name: String!
  description: String
  start: DateTime
  end: DateTime
  startAccuracy: String
  endAccuracy: String
  isMomentary: Boolean
  url: String
  isPrivate: Boolean
  isExclusive: Boolean
  author: UserCreateOneInput
  lastModifiedUser: UserCreateOneInput
  actives: GluonCreateManyWithoutActiveQuarkInput
  passives: GluonCreateManyWithoutPassiveQuarkInput
}

input QuarkCreateOneWithoutActivesInput {
  create: QuarkCreateWithoutActivesInput
  connect: QuarkWhereUniqueInput
}

input QuarkCreateOneWithoutPassivesInput {
  create: QuarkCreateWithoutPassivesInput
  connect: QuarkWhereUniqueInput
}

input QuarkCreateWithoutActivesInput {
  name: String!
  description: String
  start: DateTime
  end: DateTime
  startAccuracy: String
  endAccuracy: String
  isMomentary: Boolean
  url: String
  isPrivate: Boolean
  isExclusive: Boolean
  author: UserCreateOneInput
  lastModifiedUser: UserCreateOneInput
  passives: GluonCreateManyWithoutPassiveQuarkInput
}

input QuarkCreateWithoutPassivesInput {
  name: String!
  description: String
  start: DateTime
  end: DateTime
  startAccuracy: String
  endAccuracy: String
  isMomentary: Boolean
  url: String
  isPrivate: Boolean
  isExclusive: Boolean
  author: UserCreateOneInput
  lastModifiedUser: UserCreateOneInput
  actives: GluonCreateManyWithoutActiveQuarkInput
}

type QuarkEdge {
  node: Quark!
  cursor: String!
}

enum QuarkOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  start_ASC
  start_DESC
  end_ASC
  end_DESC
  startAccuracy_ASC
  startAccuracy_DESC
  endAccuracy_ASC
  endAccuracy_DESC
  isMomentary_ASC
  isMomentary_DESC
  url_ASC
  url_DESC
  isPrivate_ASC
  isPrivate_DESC
  isExclusive_ASC
  isExclusive_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type QuarkPreviousValues {
  id: ID!
  name: String!
  description: String
  start: DateTime
  end: DateTime
  startAccuracy: String
  endAccuracy: String
  isMomentary: Boolean
  url: String
  isPrivate: Boolean
  isExclusive: Boolean
  createdAt: DateTime!
  updatedAt: DateTime!
}

type QuarkSubscriptionPayload {
  mutation: MutationType!
  node: Quark
  updatedFields: [String!]
  previousValues: QuarkPreviousValues
}

input QuarkSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: QuarkWhereInput
  AND: [QuarkSubscriptionWhereInput!]
  OR: [QuarkSubscriptionWhereInput!]
  NOT: [QuarkSubscriptionWhereInput!]
}

input QuarkUpdateInput {
  name: String
  description: String
  start: DateTime
  end: DateTime
  startAccuracy: String
  endAccuracy: String
  isMomentary: Boolean
  url: String
  isPrivate: Boolean
  isExclusive: Boolean
  author: UserUpdateOneInput
  lastModifiedUser: UserUpdateOneInput
  actives: GluonUpdateManyWithoutActiveQuarkInput
  passives: GluonUpdateManyWithoutPassiveQuarkInput
}

input QuarkUpdateManyMutationInput {
  name: String
  description: String
  start: DateTime
  end: DateTime
  startAccuracy: String
  endAccuracy: String
  isMomentary: Boolean
  url: String
  isPrivate: Boolean
  isExclusive: Boolean
}

input QuarkUpdateOneRequiredWithoutActivesInput {
  create: QuarkCreateWithoutActivesInput
  update: QuarkUpdateWithoutActivesDataInput
  upsert: QuarkUpsertWithoutActivesInput
  connect: QuarkWhereUniqueInput
}

input QuarkUpdateOneRequiredWithoutPassivesInput {
  create: QuarkCreateWithoutPassivesInput
  update: QuarkUpdateWithoutPassivesDataInput
  upsert: QuarkUpsertWithoutPassivesInput
  connect: QuarkWhereUniqueInput
}

input QuarkUpdateWithoutActivesDataInput {
  name: String
  description: String
  start: DateTime
  end: DateTime
  startAccuracy: String
  endAccuracy: String
  isMomentary: Boolean
  url: String
  isPrivate: Boolean
  isExclusive: Boolean
  author: UserUpdateOneInput
  lastModifiedUser: UserUpdateOneInput
  passives: GluonUpdateManyWithoutPassiveQuarkInput
}

input QuarkUpdateWithoutPassivesDataInput {
  name: String
  description: String
  start: DateTime
  end: DateTime
  startAccuracy: String
  endAccuracy: String
  isMomentary: Boolean
  url: String
  isPrivate: Boolean
  isExclusive: Boolean
  author: UserUpdateOneInput
  lastModifiedUser: UserUpdateOneInput
  actives: GluonUpdateManyWithoutActiveQuarkInput
}

input QuarkUpsertWithoutActivesInput {
  update: QuarkUpdateWithoutActivesDataInput!
  create: QuarkCreateWithoutActivesInput!
}

input QuarkUpsertWithoutPassivesInput {
  update: QuarkUpdateWithoutPassivesDataInput!
  create: QuarkCreateWithoutPassivesInput!
}

input QuarkWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  start: DateTime
  start_not: DateTime
  start_in: [DateTime!]
  start_not_in: [DateTime!]
  start_lt: DateTime
  start_lte: DateTime
  start_gt: DateTime
  start_gte: DateTime
  end: DateTime
  end_not: DateTime
  end_in: [DateTime!]
  end_not_in: [DateTime!]
  end_lt: DateTime
  end_lte: DateTime
  end_gt: DateTime
  end_gte: DateTime
  startAccuracy: String
  startAccuracy_not: String
  startAccuracy_in: [String!]
  startAccuracy_not_in: [String!]
  startAccuracy_lt: String
  startAccuracy_lte: String
  startAccuracy_gt: String
  startAccuracy_gte: String
  startAccuracy_contains: String
  startAccuracy_not_contains: String
  startAccuracy_starts_with: String
  startAccuracy_not_starts_with: String
  startAccuracy_ends_with: String
  startAccuracy_not_ends_with: String
  endAccuracy: String
  endAccuracy_not: String
  endAccuracy_in: [String!]
  endAccuracy_not_in: [String!]
  endAccuracy_lt: String
  endAccuracy_lte: String
  endAccuracy_gt: String
  endAccuracy_gte: String
  endAccuracy_contains: String
  endAccuracy_not_contains: String
  endAccuracy_starts_with: String
  endAccuracy_not_starts_with: String
  endAccuracy_ends_with: String
  endAccuracy_not_ends_with: String
  isMomentary: Boolean
  isMomentary_not: Boolean
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  isPrivate: Boolean
  isPrivate_not: Boolean
  isExclusive: Boolean
  isExclusive_not: Boolean
  author: UserWhereInput
  lastModifiedUser: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  actives_every: GluonWhereInput
  actives_some: GluonWhereInput
  actives_none: GluonWhereInput
  passives_every: GluonWhereInput
  passives_some: GluonWhereInput
  passives_none: GluonWhereInput
  AND: [QuarkWhereInput!]
  OR: [QuarkWhereInput!]
  NOT: [QuarkWhereInput!]
}

input QuarkWhereUniqueInput {
  id: ID
  name: String
}

type Query {
  gluon(where: GluonWhereUniqueInput!): Gluon
  gluons(where: GluonWhereInput, orderBy: GluonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Gluon]!
  gluonsConnection(where: GluonWhereInput, orderBy: GluonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GluonConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  quark(where: QuarkWhereUniqueInput!): Quark
  quarks(where: QuarkWhereInput, orderBy: QuarkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Quark]!
  quarksConnection(where: QuarkWhereInput, orderBy: QuarkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): QuarkConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  gluon(where: GluonSubscriptionWhereInput): GluonSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  quark(where: QuarkSubscriptionWhereInput): QuarkSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String
  name: String!
  password: String!
  role: String
  createdAt: DateTime!
  updatedAt: DateTime!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String
  name: String!
  password: String!
  role: String
  posts: PostCreateManyWithoutAuthorInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutPostsInput {
  email: String
  name: String!
  password: String!
  role: String
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  name_ASC
  name_DESC
  password_ASC
  password_DESC
  role_ASC
  role_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String
  name: String!
  password: String!
  role: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  email: String
  name: String
  password: String
  role: String
  posts: PostUpdateManyWithoutAuthorInput
}

input UserUpdateInput {
  email: String
  name: String
  password: String
  role: String
  posts: PostUpdateManyWithoutAuthorInput
}

input UserUpdateManyMutationInput {
  email: String
  name: String
  password: String
  role: String
}

input UserUpdateOneInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutPostsDataInput {
  email: String
  name: String
  password: String
  role: String
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  role: String
  role_not: String
  role_in: [String!]
  role_not_in: [String!]
  role_lt: String
  role_lte: String
  role_gt: String
  role_gte: String
  role_contains: String
  role_not_contains: String
  role_starts_with: String
  role_not_starts_with: String
  role_ends_with: String
  role_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
  name: String
}
`
      }
    