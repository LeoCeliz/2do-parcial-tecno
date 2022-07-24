import { gql } from "@apollo/client";

const GET_rhtbl_Beneficiarios = gql`
  query rhtbl_Beneficiarios {
    rhtbl_Beneficiarios {
      id
      iVinculacion_fl
      iEstado_fl
      iConcurrencia
    }
  }
`;
const GET_rhtbl_Beneficiario = gql`
  query beneficiario( $id: ID!){
    beneficiario(id: $id){
      id
      iVinculacion_fl
      iEstado_fl
      iConcurrencia
    }
  }

`;

export { GET_rhtbl_Beneficiarios, GET_rhtbl_Beneficiario };
