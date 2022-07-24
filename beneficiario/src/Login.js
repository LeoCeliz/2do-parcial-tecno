import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton=() =>{
  const {loginWithRedirect}=  useAuth0();

  return <button className="btn btn-sn btn-secondary" onClick={()=> loginWithRedirect({ returnTo: window.location.origin })}>Registrarse</button>
}