import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Rolesdata from '../Rolesdata';
import Userdirectory from '../Userdirectory';

const Manageuser = () => {
  const navigate = useNavigate();

  function cancelPage() {
    navigate("/userlist");

  }
    
    
    return (
        <>
            
            <div classNameName="container-fluid px-4">
                <h1 classNameName="mt-4">Manage User</h1>
                <div classNameName="row">
                    <form >
                        <label htmlFor='RolesType'>Role Type</label>
                        <div class="form-group">
  <select class="form-control" id="exampleFormControlSelect1" multiple>

{    
Rolesdata.map((cval) => {    
        return (
            <option value={cval.roleType}>{cval.roleType}</option>

        )    
})
}
</select>
  </div>
 


<br />
<label htmlFor='Roles'>Username</label>
<input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
<datalist id="datalistOptions">
 {
        Userdirectory.map((cval) => {    
            return (
                <option value={cval.username} />
    
            )    
        })
    
 }
 
  
</datalist>
<br />
<br />

<br />
<br />

<button>Submit</button>
<button onClick={cancelPage}>Cancel</button>


                    </form>
                </div>
            </div>

        </>


    );

}
export default Manageuser;