import React from 'react'

export default function Fruits(props) {
    console.log(props)
    return (
       <div>
         {
            props.myfriuts.map((item) => {
                return (
                    <div>
                        <p>FruitName: {item.fruitName}</p>
                        <p>FruitPrice: {item.fruitPrice}</p>
                    </div>

                )

            })
        }
       </div>
    )
}
