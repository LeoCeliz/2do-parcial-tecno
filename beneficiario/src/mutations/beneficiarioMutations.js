import { gql } from '@apollo/client';



const ADD_BENEFICIARIO= gql`
  mutation addrhtbl_Beneficiarios( $iVinculacion_fl: Int!,$iEstado_fl: String!,$iConcurrencia: Int!){
    addrhtbl_Beneficiarios(iVinculacion_fl:$iVinculacion_fl,iEstado_fl:$iEstado_fl,iConcurrencia:$iConcurrencia){
      id
      iVinculacion_fl
      iEstado_fl
      iConcurrencia
    }
  }
`;


const deleterhtbl_Beneficiarios = gql`
  mutation deleterhtbl_Beneficiarios($id: ID!) {
    deleterhtbl_Beneficiarios(id: $id) {
        id
        iVinculacion_fl
        iEstado_fl
        iConcurrencia
    }
  }
`;
const UPDATE_BENEFICIARIO = gql`
  mutation updaterhtbl_Beneficiarios(
    $id: ID!
    $iVinculacion_fl: Int!,
    $iEstado_fl: String!,
    $iConcurrencia: Int!
  ) {
    updaterhtbl_Beneficiarios(
      id: $id
      iVinculacion_fl:$iVinculacion_fl,
      iEstado_fl:$iEstado_fl,
      iConcurrencia:$iConcurrencia
    ) {
      id
      iVinculacion_fl
      iEstado_fl
      iConcurrencia
     
      }
    }
`;

export {ADD_BENEFICIARIO,deleterhtbl_Beneficiarios ,UPDATE_BENEFICIARIO};
