import React, {useState} from 'react'

const ColorPicker = () => {

    const [color,setColor] = useState('white')

  return (
    <>
    <h1 className='text-center'>ColorPicker</h1>
    <div className='container d-flex justify-content-center' style={{
            width:"400px",
            height:"300px",
            border:"1px solid black",
            backgroundColor:color
        }}>
    </div>
    <div className='container d-flex justify-content-center'>
        <button className='btn btn-primary me-2 mt-2 mb-5' onClick={()=> setColor('blue')}> Blue </button>
        <button className='btn btn-success me-2  mt-2 mb-5' onClick={()=> setColor('Green')}> Green </button>
        <button className='btn btn-danger me-2  mt-2 mb-5' onClick={()=> setColor('red')}> Red </button>
        <button className='btn btn-warning me-2  mt-2 mb-5' onClick={()=> setColor('yellow')}> Yellow </button>
</div>

    
    </>
  )
}

export default ColorPicker
