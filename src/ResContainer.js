import React, { useEffect, useState } from 'react'
import ResCard from './ResCard'
import { ShimmerRestCard } from './Shimmer'
/*
*here shimmerrestcard is still a component even though a named import
*/
const ResContainer = () => {
  
  const [restaurant,setRestaurant]=useState({})
  const [isLoading,setIsLoading]=useState(true)

  useEffect(()=>{
    try{
      fetching_data=async()=>{
      const data=await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=342643')
      const json=await data.json()
      console.log(json)
      setRestaurant(json)
      setIsLoading(false)
    }
  }catch(error)
  {
    console.error( " error is : ",error )
  }
    fetching_data()
    
  },[])

  return(
    <div className='flex flex-wrap justify-evenly'>
         { isLoading ? <ShimmerRestCard/>: (restaurant && (
          Array(10).fill(0).map((e)=>{
            return(
              <ResCard name={ restaurant.data.cards[0].card.card.info.name }
               id={restaurant.data.cards[0].card.card.info.id}
               rating={restaurant.data.cards[0].card.card.info.avgRating}
               cuisines={restaurant.data.cards[0].card.card.info.cuisines}
               place={restaurant.data.cards[0].card.card.info.locality}/>
            )
          })
         ) ) }
    </div>
  )

}
    
      


export default ResContainer