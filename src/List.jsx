import { useState } from "react";
function List(){
    const [marks,setMarks]=useState([10,20,30,40,50,60])
    return (
        <div>
          {
                marks.map((item)=>{
                    return <p key={item}>{item}</p>
                })
        }
            
        </div>
    )
}
export default List;