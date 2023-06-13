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
    const [user, setUser] = useState({
        username: "",
        roleType: "",
    })
  
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
        console.log(user)
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
                            <select name="roleType" className="form-control" onChange={handleChange} id="exampleFormControlSelect1"  multiple >

                                {
                                    Rolesdata.map((cval) => {
                                        return (
                                            <option key={cval.roleType} value={cval.roleType}>{cval.roleType}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>



                        <br />
                        <label htmlFor='Roles'>Username</label>
                        <input name="username" className="form-control" list="datalistOptions" id="exampleDataList" onChange={handleChange} placeholder="Type to search..." />
                        <datalist id="datalistOptions">
                            {
                                Userdirectory.map((cval) => {
                                    return (
                                        <option key={cval.userid} value={cval.username} />

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