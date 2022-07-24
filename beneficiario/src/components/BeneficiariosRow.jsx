import {FaTrash,FaRegEye} from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { deleterhtbl_Beneficiarios } from '../mutations/beneficiarioMutations';
import { GET_rhtbl_Beneficiarios } from '../querys/beneficiarioQuerys';


export default function BeneficiariosRow({  rhtbl_Beneficiarios}) {
    const [deleterhtbl_Beneficiario]= useMutation(deleterhtbl_Beneficiarios,{
        variables: { id: rhtbl_Beneficiarios.id },
        refetchQueries: [{ query: GET_rhtbl_Beneficiarios }],
      
  });
  
  return (
    <tr>
        
            <td>{rhtbl_Beneficiarios.iVinculacion_fl}</td>
            <td>{rhtbl_Beneficiarios.iEstado_fl}</td>
            <td>{rhtbl_Beneficiarios.iConcurrencia}</td>

            <td>
               
                <button className="btn btn-danger btn-sm" onClick={deleterhtbl_Beneficiario}>
                  <FaTrash />
                </button>
            </td>

            <td>
              <a className="btn btn-info btn-sm" href={`/rhtbl_Beneficiarios/${rhtbl_Beneficiarios.id}`} >
              <FaRegEye />
              </a>

            </td>
        
    </tr>
  );
}
