import React from 'react'

const ResCard = ({name,id,rating,cuisines,place}) => {
  return (
    <div  className='m-5 rounded-lg p-5 h-56 w-56   bg-white'>
         <img  className=' object-cover w-full h-1/2  ' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/0335dd45be555d0a4187255e57d2ca88"/>
         <div key={id}>
         <h1 className='text-xl '>{name}</h1>
         <span className='text-sm'>⭐  {rating}</span>
         <p className='text-sm'>Cuisines {cuisines.join(', ')}</p>
         <p className='text-sm'>Place {place}</p>
         </div>
        
    </div>
  )
}

export default ResCard