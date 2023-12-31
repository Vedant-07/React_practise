// ResContainer.js

import React, { useEffect, useState } from "react";
import ResCard from "./ResCard";
import { ShimmerRestCard } from "./Shimmer";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const ResContainer = ({ search }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    // Fetch restaurant data
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.3071588&lng=73.1812187&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const data = await response.json();
        setRestaurants(
          data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || []
        );
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filter restaurants based on search text
    if (search.trim() === "") {
      setFilteredRestaurants(restaurants);
    } else {
      const filtered = restaurants.filter((restaurant) =>
        restaurant?.info?.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredRestaurants(filtered);
    }
  }, [search, restaurants]);
  //after adding restaurnats to it,when i came to this page second time it loads the data
  // Update the filtered restaurants when search changes

  return (
    <div className="flex flex-wrap justify-evenly">
      {isLoading ? (
        <ShimmerRestCard />
      ) : (
        filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restmenu/${restaurant.info.id}`}
            className="text-decoration-none"
          >
            {/* {Array(10).fill(0).map((e) => (<h1>joggi</h1>))} */}
            {/* {condition && (<div><h1>heyyyy</h1><p>Some other content</p> </div>)} */}
            <ResCard
              id={restaurant.info.id}
              name={restaurant.info.name}
              rating={restaurant.info.avgRating}
              place={restaurant.info.areaName}
              cuisines={restaurant.info.cuisines}
              imgId={restaurant.info.cloudinaryImageId}
              discount_info={restaurant.info.aggregatedDiscountInfoV3}
            />
          </Link>
        ))
      )}
    </div>
  );
};

export default ResContainer;

/* import React, { useEffect, useState } from "react";
import ResCard from "./ResCard";
import { ShimmerRestCard } from "./Shimmer";
//import { Link } from "react-router-dom";

const ResContainer = ({ search }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    // Fetch restaurant data
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.3071588&lng=73.1812187&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const data = await response.json();
        setRestaurants(
          data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || []
        );
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filter restaurants based on search text
    if (search.trim() === "") {
      setFilteredRestaurants(restaurants);
    } else {
      const filtered = restaurants.filter((restaurant) =>
        restaurant?.info?.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredRestaurants(filtered);
    }
  }, [search]); //here removed restaurnats from useEffect

  return (
    <div className="flex flex-wrap justify-evenly">
      {isLoading ? (
        <ShimmerRestCard />
      ) : (
        filteredRestaurants.map((restaurant) => (
          <ResCard
            key={restaurant.info.id}
            id={restaurant.info.id}
            name={restaurant.info.name}
            rating={restaurant.info.avgRating}
            place={restaurant.info.areaName}
            cuisines={restaurant.info.cuisines}
            imgId={restaurant.info.cloudinaryImageId}
          />
        ))
      )}
    </div>
  );
};

export default ResContainer; */

/*

here did eveything before searching fetue implemtation 
import React, { useEffect, useState } from "react";
import ResCard from "./ResCard";
import { ShimmerRestCard } from "./Shimmer";
/*
 *here shimmerrestcard is still a component even though a named import
 
const ResContainer = ({ search }) => {
  const [restaurant, setRestaurant] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [filterRest,setFilterRest]=useState({});
  useEffect(() => {
    try {
      fetching_data = async () => {
        //search for restaurant_grid_listing

        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.3071588&lng=73.1812187&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
        setRestaurant(json);
        setIsLoading(false);
        setFilterRest(json);
      };
    } catch (error) {
      console.error(" error is : ", error);
    }
    fetching_data();
  }, []);

  return (
    <div className="flex flex-wrap justify-evenly">
      {isLoading ? (
        <ShimmerRestCard />
      ) : (
        restaurant?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
          (e) => {
            return (
              <ResCard
                id={e.info.id}
                name={e.info.name}
                rating={e.info.avgRating}
                place={e.info.areaName}
                cuisines={e.info.cuisines}
                imgId={e.info.cloudinaryImageId}
              />
            );
          }
        )
      )}
    </div>
  );
};

export default ResContainer; */
//check each and every json init
/**
 * here to fill recards
 * Array(10)
          .fill(0)
          .map((e) => {
            return (
              <ResCard
                name={
                  restaurant?.data?.cards[5]?.card?.card?.gridElements
                    ?.infoWithStyle?.restaurants[1]?.info?.name
                }
                id={
                  restaurant?.data?.cards[5]?.card?.card?.gridElements
                    ?.infoWithStyle?.restaurants[1]?.info?.id
                }
                rating={
                  restaurant?.data?.cards[5]?.card?.card?.gridElements
                    ?.infoWithStyle?.restaurants[1]?.info?.avgRating
                }
                cuisines={
                  restaurant?.data?.cards[5]?.card?.card?.gridElements
                    ?.infoWithStyle?.restaurants[1]?.info?.cuisines
                }
                image={
                  restaurant?.data?.cards[5]?.card?.card?.gridElements
                    ?.infoWithStyle?.restaurants[1]?.info?.cloudinaryImageId
                }
                place={
                  restaurant?.data?.cards[5]?.card?.card?.gridElements
                    ?.infoWithStyle?.restaurants[1]?.info?.areaName
                }
                 id={restaurant.data.cards[0].card.card.info.id}
                rating={restaurant.data.cards[0].card.card.info.avgRating}
                cuisines={restaurant.data.cards[0].card.card.info.cuisines}
                place={restaurant.data.cards[0].card.card.info.locality} 
                />
 */
//to check whther api working or not
/****
 * 
        console.log("Data:", json);

        if (json?.data) {
          console.log("Cards:", json.data.cards);

          const cardAtIndex5 = json.data.cards[5];
          console.log("Card at index 5:", cardAtIndex5);

          if (cardAtIndex5?.card) {
            const nestedCard = cardAtIndex5.card;
            console.log("Nested Card:", nestedCard);

            if (nestedCard?.card?.gridElements) {
              console.log("Grid Elements:", nestedCard.card.gridElements);

              const infoWithStyle = nestedCard.card.gridElements.infoWithStyle;
              console.log("Info With Style:", infoWithStyle);

              if (infoWithStyle?.restaurants) {
                console.log("Restaurants Array:", infoWithStyle.restaurants);

                const restaurantAtIndex1 = infoWithStyle.restaurants[1];
                console.log("Restaurant at Index 1:", restaurantAtIndex1);

                if (restaurantAtIndex1?.info) {
                  const restaurantInfo = restaurantAtIndex1.info;
                  console.log("Restaurant Info:", restaurantInfo);

                  console.log("Restaurant Name:", restaurantInfo.name);
                } else {
                  console.log(
                    "Info property in restaurantAtIndex1 is missing or undefined"
                  );
                }
              } else {
                console.log("Restaurants array is missing or undefined");
              }
            } else {
              console.log("Grid Elements are missing or undefined");
            }
          } else {
            console.log("Nested card is missing or undefined");
          }
        } else {
          console.log("Data property is missing or undefined");
        }
      };
 */
