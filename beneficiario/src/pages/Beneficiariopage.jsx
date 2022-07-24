import { Link, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
//import ClientInfo from '../components/ClientInfo';
//import DeleteProjectButton from '../components/DeleteProjectButton';
//import EditProjectForm from '../components/EditProjectForm';
import { useQuery } from '@apollo/client';
import { GET_rhtbl_Beneficiario } from "../querys/beneficiarioQuerys";
import React from 'react'
import { FaToggleOn, FaStumbleupon, FaCheck } from 'react-icons/fa';
import EditarBeneficiarios from '../components/EditarBeneficiarios';


export default function Beneficiariopage() {
  const {id}=useParams();
  const {loading,error,data} = useQuery(GET_rhtbl_Beneficiario,{variables:{id}});
  if (loading) return <Spinner />;
  if (error) return <p>Error</p>;
  return (
    <>
      {!loading && !error && (
        <div className='mx-auto w-75 card p-4'>
          <Link to='/' className='btn btn-secondary btn-sm w-25 d-inline ms-auto'>
            Atras
          </Link>
          <h5 className='mt-5'>Información del Rhtbl_beneficiario</h5>
      <ul className='list-group'>
        <li className='list-group-item'>
        <p>iVinculacion_fl</p> <FaStumbleupon className='icon' /> {data.beneficiario.iVinculacion_fl}
        </li>
        <li className='list-group-item'>
        <p>iEstado_fl</p> <FaToggleOn className='icon' /> {data.beneficiario.iEstado_fl}
        </li>
        <li className='list-group-item'>
        <p>Concurrencia</p> <FaCheck className='icon' />  {data.beneficiario.iConcurrencia}
        </li>
      </ul>
      <EditarBeneficiarios beneficiario={data.beneficiario} />
        </div>
    )}
    </>
  );
}