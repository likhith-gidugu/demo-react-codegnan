import React, { useState } from 'react';
import "./Stylings/Patients.css";
import axios from 'axios';

export default function Patient() {
    const [patientData,setPatientData]= useState({
        name:"",
        age:"",
        gender:"",
        salary:"",
        specialization:""
    })
    function handleChange(e){
        const {name,value} = e.target
        console.log(name,value)
        
        setPatientData((prev)=>({
             ...prev,
             [name]:value
        }))
    }
    function handleSubmit(e){
        e.preventDefault()
        console.log(patientData)
        axios.post('https://doc-back.onrender.com/doctors',{

            name:patientData.name,
            age:patientData.age,
            gender:patientData.gender,
            salary:patientData.salary,
            specialization:patientData.specialization
        })
        .then((res)=>{
            console.log(res)
        })

    }
    
  return (
    <div>
        <form className='patient' onSubmit={handleSubmit}>
        <p>
      <input type="text" placeholder='enter name' name='name'  onChange={handleChange}/>
      </p>
      <p>
      <input type="text" placeholder='enter age' name='age'   onChange={handleChange}/>
      </p>
      <p>
      <input type="text" placeholder=' enter gender' name='gender'  onChange={handleChange}/>
      </p>
      <p>
      <input type="text" placeholder='enter disease' name='salary'  onChange={handleChange} />
      </p>
      <p>
      <input type="text" placeholder='enter weight' name='specialization'  onChange={handleChange}/>
      </p>
      <button>submit</button>
      </form>
    </div>
  )
}
