import React from 'react';
import { useNavigate } from "react-router-dom";
import Userdata from '../Userdata';
import UserRecord from './UserRecord';
const Userlist = () => {
  const navigate = useNavigate();

  function manageUser() {
    navigate("/manageuser");
  }
  
  var getRow = [];
  Userdata.forEach((cval) => {
    getRow.push(<UserRecord cval={cval} key={cval.userid} />)
  })

  


  return (
    <>
      <div className="container-fluid px-4">
        <h1 className="mt-4">Users</h1>
        <div>&nbsp;</div>
        <button onClick={manageUser}>Manage User</button>
        <div>&nbsp;</div>


        <div className="row">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Username</th>
                <th scope="col">Roles</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {getRow}
            </tbody>
          </table>
        </div>
      </div>


    </>
  );

}
export default Userlist;