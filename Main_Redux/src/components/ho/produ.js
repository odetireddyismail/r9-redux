import React from 'react'
import { useSelector } from 'react-redux'

const Produ = () => {

    const get=useSelector((res)=>{ return res.ChangeNumber.Ismail})
   
   console.log(get)
  return (
    <div>
         {get.map((res,k)=>
         <div key={k}>
          {res.id}
         </div>)}
    </div>
  )
}

export default Produ