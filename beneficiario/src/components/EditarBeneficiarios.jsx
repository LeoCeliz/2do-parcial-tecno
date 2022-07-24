import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { GET_rhtbl_Beneficiario } from '../querys/beneficiarioQuerys';
import { UPDATE_BENEFICIARIO } from '../mutations/beneficiarioMutations';

export default function EditarBeneficiarios({beneficiario}) {
    
    const [iVinculacion_fl, setIVinculacion_fl] =  useState(beneficiario.iVinculacion_fl);
    const [iEstado_fl, setIEstado_fl] =  useState(beneficiario.iEstado_fl);
    const [iConcurrencia, setIConcurrencia] =  useState(beneficiario.iConcurrencia);
  
    const [updaterhtbl_Beneficiarios]=useMutation(UPDATE_BENEFICIARIO,{
        variables: {id: beneficiario.id,iVinculacion_fl,iEstado_fl,iConcurrencia},
        refetchQueries:[{query:GET_rhtbl_Beneficiario,variables:{id:beneficiario.id}}]
    });

    const onSubmit=(e)=>{
        e.preventDefault();

        if(!iVinculacion_fl || !iEstado_fl || !iConcurrencia ){
            return alert('Por favor complete los campos');
        }
        updaterhtbl_Beneficiarios(iVinculacion_fl,iEstado_fl,iConcurrencia);
    };

  return (
    <div className='mt-5'>
        <h3>Modificar Rhtbl_beneficiarios</h3>
        <form onSubmit={onSubmit}>
        
                <div className="mb-3">
                  <label className="form-label">iVinculacion_fl</label>
                  <input
                    type="number"
                    className="form-control"
                    id="iVinculacion_fl"
                    value={iVinculacion_fl}
                    onChange={(e) => setIVinculacion_fl(Number(e.target.value))}
                  ></input>
                </div>
                <div className="mb-3">
                  <label className="form-label">iEstado_fl</label>
                  <select
                    className="form-control"
                    id="	iEstado_fl"
                    value={iEstado_fl}
                    onChange={(e) => setIEstado_fl(e.target.value)}
                  >
                   
                    <option value="on">Activo</option>
                    <option value="off">Inactivo</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">iConcurrencia</label>
                  <input
                    type="number"
                    className="form-control"
                    id="iConcurrencia"
                    value={iConcurrencia}
                    onChange={(e) => {
                      console.log(e.target.value)
                      setIConcurrencia(Number(e.target.value))
                    }}
                  ></input>
                </div>
                <button type='submit' className="btn btn-primary">
                    Modificar
                </button>
        </form>
    </div>
  )
}
