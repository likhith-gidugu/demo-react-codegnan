import React ,{useState} from 'react'
//importing ustate in 
export default function Input() {
//     const[email,setEmail]=useState("")
//     // function handleEmail(e){
//     //     e.preventDefault()
//     //     alert('hello'+email)
//     // }
//     const[password,setPassword]=useState("")
//     function handleSubmit(e){
//         e.preventDefault()
//         console.log(formData)
//         //alert("from handle submit")
        
//     }

//   function handleEmail(e){
//     console.log(e.target.value)
//     //event always carry the target object from which we get the description
//     setEmail(e.target.value)
//   }
//   //this function is used to save the enterd input field data

// const [formData,setFormData]=useState({
//     email:"",
//     password:""
// })
// function handleChange(e){
//     console.log(e);
//     const {name,value}=e.target;
//     setFormData((prev)=>({
//         //spreading the every object and getting the sepecific objects in key
//         ...prev,
//         //picking the specific key and storing the user enterd value
//         [name]:value
//     }))
    

// }
//   return (
//     <div>
//     <form onSubmit={handleSubmit}>
//         <p>
//         <input type="text" placeholder="enter username" name='email' 
//          //onChange={handleEmail} 
//         onChange={handleChange}
        
//         />
//         {/* name attribute must carry the variable as the value ,   //onchane helps to call the function*/}
    
//         </p>
//         <p>
//         <input type="text" placeholder="enter password" name='password'
//         // onChange={(e)=>{
//         //     setPassword(e.target.value);
//         //     alert("passwordis"+password)
//         //     console.log(e.target.value)
//         // }}
//         onChange={handleChange}
//         />

//         </p>
        
//         <button>submit</button>
                
//     </form>
//     </div>
//   )


const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [formDate,setFormData] = useState(
     {  
          email:"",
          password:""
     })

     function handleChange(e){
          const{name,value} = e.target
          console.log(name,value)
          //prev is used to access other object 
          //setFormData((prev)=>({}))
          setFormData((prev)=>({
               //spreading the every object and getting the specific object key
               ...prev,
               //picking the specific key and storing the user entered value
               [name]:value
          }))
     }
     function handleSubmit(e){
          e.preventDefault()
          alert("Your Email is:- "+formDate.email+"              Your Password is:- "+formDate.password)
          console.log(formDate)
     }
 //this function helps to save the ebtered  input field  data  
 function handleEmail(e){
     console.log(e.target.value)
     //event always carry the target object from which we get the information
     setEmail(e.target.value)
     }
return (
     <div>
           <form onSubmit={handleSubmit}>
                <p>
                     <input type="email" placeholder='Enter Email' name="email" 
                     onChange={handleChange}
                     // onChange={handleEmail} 
                     required/>
                </p>
                <p>
                     <input type="password" placeholder='Enter Password' name='password' 
                     onChange={handleChange}
                     //  onChange={(e)=>{
                     //      console.log("Password is: " +e.target.value)
                     //      setPassword(e.target.value)
                     // }} 
                     required/>
                </p>
                <p>
                     <button>Submit</button>
                </p>
           </form>
     </div>
   )
 


//practice
}
