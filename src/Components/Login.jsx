import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [formData,setFormData]=useState({
        email:" ",
        password:" "
    })
    const navigate=useNavigate()
    function handleChange(e){
        const {name,value}=e.target
        // console.log(name,value)
        setFormData((prev)=>({
           ...prev,
            [name]:value
        }))
        }
    function handleSubmit(e){
        e.preventDefault()       
        console.log(formData)
        axios.post("https://jobportal.codegnan.com/api/v1/studentlogin",{username:formData.email,password:formData.password})
        .then((res)=>{
           console.log("status coe",res.data)
           if(res.status===200){
            console.log("login successful")
            localStorage.setItem("student_id",res.data.student_id)
            navigate("/")
            return;
           }
        
        })
        .catch((error)=>{
            console.log("status code",error.status)
            alert("Invalid credentials")
        })
    }
    // function handleMail(e){
    //     console.log(e.target.value)
    //     setMail(e.target.value)
    // }
  return (
    <div>
     <form onSubmit={handleSubmit}>
        <p>
        <input type="text" placeholder='Enter your name' id='name' name='email' onChange={handleChange}/>
       
        </p>
        <p>
        <input type="text" placeholder='Enter your password' id='password' name='password' onChange={handleChange}/>
        </p>
        <button>Submit</button>
        </form> 
    </div>
  )
}