import React from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';
import "./Stylings/Home.css"


export default function Home() {
  const[doctors,setDoctors]=useState([])

useEffect(()=>{
axios.get('https://doc-back.onrender.com/doctors')
.then((res)=>{
  console.log(res.data)
  setDoctors(res.data)
})
},[]) //here at theend we use square braces why baecusse in futture we will face problems like it will move on to loops

  return (
    <div className='doctor-container'>
      {
      doctors.map((e)=>{

        return <div className='doctor'key={e.id}>
                <p>{e.name}</p>
                <p>{e.age}</p>
                <p>{e.specialization}</p>
                <p>{e.gender}</p>
                <p>{e.salary}</p>
              </div>
      })
      }
    </div>
  )
}
