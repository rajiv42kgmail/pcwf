import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Formdata from '../records/Formdata';
//console.log(getRoleType);


const ManageForm = () => {
    
    const params = useParams();
    const[selectedRequestType,setselectedRequestType] = useState('business_process');
    const [formlist, setFormList] = useState({
        request_type: "",
        instruction: ""
    })
    // console.log(params.id)
    var formArr={};
    var getSelectedRequestType='';
    if (params.id) {
        
        Formdata.filter(cval => parseInt(cval.id) === parseInt(params.id)).map((cval) => {    
           
                    if(cval.request_type === 'Automated Job Request') {
                        getSelectedRequestType='automated_job';

                    } else {
                        getSelectedRequestType='business_process';


                    }
                    formArr={request_type:cval.request_type,instruction:cval.instruction} ; 
                       

        })
        

        //console.log(params.id)
    } else {

    }
    useEffect(() => {
                //console.log(formArr)
        setFormList(formArr);
        setselectedRequestType(getSelectedRequestType);
      },[parseInt(params.id)])


      
    // console.log(params); 
    const navigate = useNavigate();
    function cancelPage() {
        navigate("/form_list");
    }

    const handleChangeRequestType = (event) => {
        Array.from( document.querySelectorAll('input[name="request_type"]:checked'), input => input.checked = false );
        setselectedRequestType(event.target.value);

   
     }

    const submitPage = (e) => {
        e.preventDefault();

    }
    

    //setFormList(formArr);

    return (
        <>
            <div className="container-fluid px-4">
                <h1 className="mt-4">Manage Form</h1>
                <div className="row">
                    <form method='post'>
                        <label htmlFor='RequestType'>Request Type</label> {selectedRequestType}
                        <div className="form-group">
                            <div className="form-check"> 
                                <input className="form-check-input" type="radio" name="request_type" id="automated_job" value="automated_job" onChange={handleChangeRequestType}  />
                                    <label className="form-check-label" htmlFor="automated_job">
                                        Automated Job Request
                                    </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="request_type" id="business_process" value="business_process"  onChange={handleChangeRequestType} checked />
                                    <label className="form-check-label" htmlFor="business_process">
                                        Business Process Profile
                                    </label>
                            </div>
                        </div>
                        
                        <button type='submit' onClick={submitPage}>Submit</button>
                        <button onClick={cancelPage}>Cancel</button>
                    </form>
                </div>
            </div>

        </>


    );
    

}
export default ManageForm;