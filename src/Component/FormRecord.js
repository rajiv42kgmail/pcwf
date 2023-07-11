import React from 'react'
import { useNavigate } from "react-router-dom";

const FormRecord = ({cval}) => {
    const navigate = useNavigate();
      
    const handleAction = (e) => {
        if(e.currentTarget.title  === 'Edit') {
            navigate("/manageform/"+(e.currentTarget.getAttribute('data-formid')));
        }
        if(e.currentTarget.title  === 'Delete') {
            
        }

    }
  return (
    <tr>
    <td>{cval.request_type}</td>      
    <td>{cval.instruction}</td>      
    <td>
    <ul className="list-inline m-0">
             <li className="list-inline-item">
          <button className="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit" data-formid={cval.id} onClick={handleAction}><i className="fa fa-edit"></i></button>
          </li>
          <li className="list-inline-item">
              <button className="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete" data-formid={cval.id} onClick={handleAction} ><i className="fa fa-trash"></i></button>
              </li>
      </ul>        
    </td>
  </tr>


    )
}

export default FormRecord