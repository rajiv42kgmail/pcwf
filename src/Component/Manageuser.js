import React from 'react';
import { useState,useRef } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Rolesdata from '../Rolesdata';
import Userdirectory from '../Userdirectory';
import GetUserRecord from './Userapp/GetUserRecord';
var getRoleType = [];
var getUsername='';
var getDisabled=false;
//console.log(getRoleType);


const Manageuser = () => {

    const params = useParams();
    const [user, setUser] = useState({
        username: "",
        roleType: "",
        roleTypeValue:""
    })
 // console.log(params.id)
 if(params.id) {
    GetUserRecord.map((userRecordval) => {
     getUsername = userRecordval.username;
     user.username=getUsername;
     user.roleType=userRecordval.roleType;
      getRoleType = userRecordval.roleType.split(",");
      user.roleTypeValue={value: getRoleType};
      getDisabled = 'readonly';
})

                        
//console.log(params.id)

} else {
    if(document.getElementById('exampleDataList')) {
        document.getElementById('exampleDataList').removeAttribute("disabled");
    }

} 
   // console.log(params); 
    const navigate = useNavigate();
    function cancelPage() {
        navigate("/userlist");
    }

   
    const handleChange = (e) => {
        e.preventDefault();
        if(e.target.name === 'username') {
            user.username = e.target.value
        }
        if(e.target.name === 'roleType') {
            var options = e.target.options;
            let value = '';
            for (var i = 0, l = options.length; i < l; i++) {
              if (options[i].selected) {
                value += (options[i].value)+ ',';
              }
            }
            value = value.substring(0,value.length-1);
            user.roleType = value;
        }
        setUser(user);
    }
    
    const submitPage = (e) => {  
        e.preventDefault();
        setUser(user)
        console.log(user);
    }

    return (
        <>
            <div className="container-fluid px-4">
            {user.username}  {user.roleType}
                <h1 className="mt-4">Manage User</h1>
                <div className="row">
                    <form method='post'>
                        <label htmlFor='RolesType'>Role Type</label>
                        <div className="form-group">
                            <select name="roleType" className="form-select" onChange={handleChange} id="exampleFormControlSelect1" defaultValue={getRoleType}  multiple >
                           {     
                            Rolesdata.map((cval) => {
                               return(
                                <option  key={cval.roleType} value={cval.roleType}>{cval.roleType}</option>
                               )     
                                })
                            }    
                            </select>
                                

                        </div>



                        <br />
                        <label htmlFor='Roles'>Username</label>
                        <input name="username" className="form-control" list="datalistOptions" id="exampleDataList" disabled={getDisabled} onChange={handleChange} placeholder={getUsername}
                           />
                        <datalist id="datalistOptions">
                            {
                                Userdirectory.map((cval) => {
                                    return (
                                        <option  key={cval.userid} value={cval.username} />

                                    )
                                })

                            }


                        </datalist>
                        <br />
                        <br />

                        <br />
                        <br />

                        <button type='submit' onClick={submitPage}>Submit</button>
                        <button onClick={cancelPage}>Cancel</button>
                    </form>
                </div>
            </div>

        </>


    );

}
export default Manageuser;