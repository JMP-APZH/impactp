export const schema = gql`
  type Dairy {
    id: Int!
    nom: String!
    prix: String!
    url: String!
    prixspecial: String!
    img: String!
    quantite: String!
    quantite2: String!
    prixunite: String!
    nutriscore: String!
    nutrifull: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    dairies: [Dairy!]! @requireAuth
    dairy(id: Int!): Dairy @requireAuth
  }

  input CreateDairyInput {
    nom: String!
    prix: String!
    url: String!
    prixspecial: String!
    img: String!
    quantite: String!
    quantite2: String!
    prixunite: String!
    nutriscore: String!
    nutrifull: String!
  }

  input UpdateDairyInput {
    nom: String
    prix: String
    url: String
    prixspecial: String
    img: String
    quantite: String
    quantite2: String
    prixunite: String
    nutriscore: String
    nutrifull: String
  }

  type Mutation {
    createDairy(input: CreateDairyInput!): Dairy! @requireAuth
    updateDairy(id: Int!, input: UpdateDairyInput!): Dairy! @requireAuth
    deleteDairy(id: Int!): Dairy! @requireAuth
  }
`
