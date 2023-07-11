import React from 'react';
import { useNavigate } from 'react-router-dom';
import Formdata from '../records/Formdata';
import FormRecord from './FormRecord';

const Form_list = () => {
    const navigate = useNavigate();

  function manageForm() {
    navigate("/manageform");
  }
  var getRow = [];
  Formdata.forEach((cval) => {
    getRow.push(<FormRecord cval={cval} key={cval.id} />)
  })
    return (
        <>
     <div className="container-fluid px-4">
        <h1 className="mt-4">Form List</h1>
        <div>&nbsp;</div>
        <button onClick={manageForm}>Create</button>
        <div>&nbsp;</div>


        <div className="row">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Request Type</th>
                <th scope="col">Instruction</th>
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
export default Form_list;