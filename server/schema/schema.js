//const{rhtbl_Beneficiarios}=require('../sampleData.js');

//mongoose modelos
const Rhtbl_Beneficiario = require("../models/Rhtbl_Beneficiario");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLEnumType,
  GraphQLBoolean,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} = require("graphql");

const rhtbl_BeneficiariosType = new GraphQLObjectType({
  name: "rhtbl_Beneficiario",
  fields: () => ({
    id: { type: GraphQLID },
    iVinculacion_fl: { type: GraphQLInt },
    iEstado_fl: { type: GraphQLString },
    iConcurrencia: { type: GraphQLInt },
    
  }),
});
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    rhtbl_Beneficiarios: {
      type: new GraphQLList(rhtbl_BeneficiariosType),
      resolve(parent, args) {
        return Rhtbl_Beneficiario.find();
      },
    },
    beneficiario: {
      type: rhtbl_BeneficiariosType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Rhtbl_Beneficiario.findById(args.id);
      },
    },
  },
});

//Mutations
//add
const mutation = new GraphQLObjectType({
  name: "addBeneficiario",
  fields: {
    addrhtbl_Beneficiarios: {
      type: rhtbl_BeneficiariosType,
      args: {
        iVinculacion_fl: { type: GraphQLNonNull(GraphQLInt)},
        iEstado_fl: { type: GraphQLNonNull(GraphQLString) },
        iConcurrencia: { type: GraphQLNonNull(GraphQLInt) },
      },
      resolve(parent, args) {
        console.log("mutation", args);
        const rhtbl_Beneficiario = new Rhtbl_Beneficiario({
          iVinculacion_fl: args.iVinculacion_fl,
          iEstado_fl: args.iEstado_fl,
          iConcurrencia: args.iConcurrencia,
        });
        return rhtbl_Beneficiario.save();
      },
    },
    //delete
    deleterhtbl_Beneficiarios: {
      type: rhtbl_BeneficiariosType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Rhtbl_Beneficiario.findByIdAndRemove(args.id);
      },
    },
    //update
    updaterhtbl_Beneficiarios: {
      type: rhtbl_BeneficiariosType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        iVinculacion_fl: { type: GraphQLInt },
        iEstado_fl: { type: GraphQLString },
        iConcurrencia: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return Rhtbl_Beneficiario.findByIdAndUpdate(
          args.id,
          {
            $set: {
              iVinculacion_fl: args.iVinculacion_fl,
              iEstado_fl: args.iEstado_fl,
              iConcurrencia: args.iConcurrencia,
            },
          },
          { new: true }
        );
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
