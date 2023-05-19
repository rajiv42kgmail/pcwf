import React from 'react';
import { useNavigate } from "react-router-dom";
import Userdata from '../Userdata';
const Userlist = () => {
    const navigate = useNavigate();

  function manageUser() {
    navigate("/manageuser");
  }
    return (
        <>
              <div className="container-fluid px-4">
                            <h1 className="mt-4">Users</h1>
                            <div>&nbsp;</div>
                            <button onClick={manageUser}>Manage User</button>
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
             Userdata.map((cval) => {    
              return (
                <>
                     <tr>
                      <td>{cval.username}</td>
                      <td>{cval.roleType}</td>
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
export default Userlist;