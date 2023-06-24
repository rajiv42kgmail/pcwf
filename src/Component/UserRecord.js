import React from 'react'
import { useNavigate } from "react-router-dom";

const UserRecord = ({cval}) => {
    const navigate = useNavigate();
      
    const handleAction = (e) => {
        if(e.currentTarget.title  === 'Edit') {
            navigate("/manageuser/"+(e.currentTarget.getAttribute('data-userid')));
        }
        if(e.currentTarget.title  === 'Delete') {
            
        }

    }
  return (
    <tr>
    <td>{cval.username}</td>      
    <td>{cval.roleType}</td>      
    <td>
    <ul className="list-inline m-0">
             <li className="list-inline-item">
          <button className="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit" data-userid={cval.userid} onClick={handleAction}><i className="fa fa-edit"></i></button>
          </li>
          <li className="list-inline-item">
              <button className="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete" data-userid={cval.userid} onClick={handleAction} ><i className="fa fa-trash"></i></button>
              </li>
      </ul>        
    </td>
  </tr>


    )
}

export default UserRecord