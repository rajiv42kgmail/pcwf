import React from 'react';
import { useState } from 'react';
const Roles = () => {
    const handleChange = (e) => {
        e.preventDefault(); 
        if(e.target.name == 'roleType')  {   
            let selected='';//will be selected option in select
            let selected_opt=(e.target.selectedOptions);
            //console.log(selected_opt)
            for (let i = 0; i < selected_opt.length; i++){
                selected += (selected_opt.item(i).value) + ",";
            }
            selected = selected.substring(0,selected.length-1);
            setUser(prev => ({...prev,[e.target.name]:selected }))
        }   
        //console.log(user)
    }

   const[user,setUser] = useState({
        roleType:"",
        roles:"",
        rolesuser:""
    }) 
    const[final,setFinal] = useState({})
    const printData = (e) => {
        e.preventDefault();
        let checkedValue = '';
        var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        for (let i = 0; i < checkboxes.length; i++){
             checkedValue += checkboxes[i].value + ",";
        } 
       // console.log(checkedValue)
       checkedValue = checkedValue.substring(0,checkedValue.length-1);
        user.roles=checkedValue
        let checkedRadioValue = '';
        var radioButtons = document.querySelectorAll('input[type="radio"]:checked');
        for (let i = 0; i < radioButtons.length; i++){
          checkedRadioValue += radioButtons[i].value + ",";
        } 
       // console.log(checkedValue)
       checkedRadioValue = checkedRadioValue.substring(0,checkedRadioValue.length-1);
        user.rolesuser=checkedRadioValue
           
        setFinal(user);
//        console.log(final.roleType)
    }

    return (
        <>
                    <h1>{final.roleType}</h1>
                    <h1>{final.roles}</h1>
                    <h1>{final.rolesuser}</h1>


            <div className="container-fluid px-4">
                <h1 className="mt-4">Roles Management</h1>
                <div className="row">
                    <form onSubmit={printData}>
                        <label htmlFor='RolesType'>Role Type</label>
                        <select className="form-select" multiple aria-label="multiple select example"  name="roleType"  onChange={handleChange.bind(this)}>
  <option value="PCU">PCU</option>
  <option value="BA">BA</option>
  <option value="VcodeUser">Veracode User</option>
</select>
<br />
<label htmlFor='Roles'>Roles</label>
<div className="form-check">
  <input className="form-check-input" type="checkbox" name="roles" value="createPages" id="createPage" />
  <label className="form-check-label" for="createPage">
    Create Pages
  </label>
  </div>
  <div className="form-check">
  <input className="form-check-input" type="checkbox" name="roles" value="editPages" id="editPage" />
  <label className="form-check-label" for="editPage">
    Edit Pages
  </label>
  </div>
  <div className="form-check">

  <input className="form-check-input" type="checkbox" name="roles" value="deletePages" id="delPage"/>
  <label className="form-check-label" for="delPage">
    Delete Pages
  </label>
</div>
<br />
<br />
<label htmlFor='RolesUser'>Roles User</label>
<div className="form-check">
  <input className="form-check-input" type="radio" name="rolesuser" id="VeracodeUser" value="vcodeuser" />
  <label className="form-check-label" for="VeracodeUser">
    Veracode User
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="rolesuser" id="admin" value="admin" />
  <label className="form-check-label" for="admin">
    Admin
  </label>
</div>

<br />
<br />

<button>Submit</button>


                    </form>
                </div>
            </div>

        </>


    );

}
export default Roles;