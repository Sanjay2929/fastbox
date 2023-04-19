import React, { useState } from 'react'

const Counterapp = () => {
    const [first, setfirst] = useState(0)
    function increase(){
      setfirst(first + 1)
    }
    function decrease(){
      if(first==0){
        setfirst(first)
      }else{
        setfirst(first - 1)
      }
    }
    
    function zero(){
      setfirst(first - first )
    }

  return (
    <div className='bg_dark_white vh-100 d-flex  flex-column justify-content-center align-items-center'>
        <p className='text'>Counter app</p>
        <div className='counterbox d-flex  flex-column justify-content-center align-items-center'>
           <h2 className='first'>{first}</h2> 
           <div className='d-flex gap-3 mt-3'>
              <button className='addbtn' onClick={increase}>Increase One</button>
              <button className='addbtn' onClick={decrease}>Decrease One</button>
           </div>
        </div>
        <button className='addbtn mt-4' onClick={zero}>Reset</button>
    </div>
  )
}

export default Counterapp