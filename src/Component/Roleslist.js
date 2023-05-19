import React from 'react';
import { useNavigate } from "react-router-dom";
import Rolesdata from '../Rolesdata';
const Roleslist = () => {
    const navigate = useNavigate();

  function createRole() {
    navigate("/roles");
  }
    return (
        <>
              <div className="container-fluid px-4">
                            <h1 className="mt-4">Roles Management</h1>
                            <div>&nbsp;</div>
                            <button onClick={createRole}>Create Role</button>
                            <div>&nbsp;</div>


                            <div className="row">
                            <table class="table">
  <thead>
    <tr>
      <th scope="col">Roles Type</th>
      <th scope="col">Roles</th>
    </tr>
  </thead>
  <tbody>





        {
             Rolesdata.map((cval) => {    
              return (
                <>
                     <tr>
                      <td>{cval.roleType}</td>
                      <td>{cval.roles}</td>
                    </tr>
                </>      
              )
            })
        }
         </tbody>
</table>
                            </div>
                        </div>
 
        
        </>
    );

}
export default Roleslist;