import { useQuery } from '@apollo/client';
import BeneficiariosRow from './BeneficiariosRow';
import Spinner from './Spinner';
import { GET_rhtbl_Beneficiarios } from '../querys/beneficiarioQuerys';




export default function Beneficiarios(){
    const {loading,error,data}=useQuery (GET_rhtbl_Beneficiarios)
    if(loading){return <Spinner/>}
    if(error){return <p>Error..</p>}
    return(
        <>
        {!loading && !error && (
            <table className="table table-hover mt-3">
                <thead>
                    <tr>
                        <th>iVinculacion_fl</th>
                        <th>iEstado_fl</th>
                        <th>iConcurrencia</th>
                        <th>Eliminar</th>
                        <th>Ver</th>
                        

                        

                    </tr>
                </thead>
                <tbody>
                    {data.rhtbl_Beneficiarios.map(  rhtbl_Beneficiarios=>
                        <BeneficiariosRow key={  rhtbl_Beneficiarios.id}   rhtbl_Beneficiarios={  rhtbl_Beneficiarios}/>
                        )}
                </tbody>
            </table>
        )}
        </>
    )
}