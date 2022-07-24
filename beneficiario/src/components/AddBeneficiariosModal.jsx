import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { ADD_BENEFICIARIO } from "../mutations/beneficiarioMutations";
import { GET_rhtbl_Beneficiarios } from "../querys/beneficiarioQuerys";

export default function AddBeneficiariosModal() {
  const [iVinculacion_fl, setIVinculacion_fl] = new useState(null);
  const [iEstado_fl, setIEstado_fl] = new useState("off");
  const [iConcurrencia, setIConcurrencia] = new useState(null);

  const [addrhtbl_Beneficiarios] = useMutation(
    ADD_BENEFICIARIO,

    {
      variables: { iVinculacion_fl, iEstado_fl, iConcurrencia },
      update(cache, { data: { addrhtbl_Beneficiarios } }) {
        const { rhtbl_Beneficiarios } = cache.readQuery({
          GET_rhtbl_Beneficiarios,
        });

        cache.writeQuery({
          query: rhtbl_Beneficiarios,
          data: {
            rhtbl_Beneficiarios: [
              ...rhtbl_Beneficiarios,
              addrhtbl_Beneficiarios,
            ],
          },
        });
      },
    }
  );

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      iVinculacion_fl === null ||
      iEstado_fl === "" ||
      iConcurrencia === null
    ) {
      return alert("Por favor complete todo los campos");
    }

    addrhtbl_Beneficiarios(iVinculacion_fl, iEstado_fl, iConcurrencia);

    setIVinculacion_fl(null);
    setIEstado_fl("off");
    setIConcurrencia(null);
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-toggle="modal"
        data-bs-target="#AddBeneficiariosModal"
      >
        <div className="d-flex align-items-center">
          <FaUser className="icon" />
          <div>Añadir</div>
        </div>
      </button>

      <div
        className="modal fade"
        id="AddBeneficiariosModal"
        aria-labelledby="AddBeneficiariosModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="AddBeneficiariosModalLabel">
                Añadir beneficiario
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
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
                    {" "}
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
                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="btn btn-secondary"
                >
                  Guardar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
