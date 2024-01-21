const { createContext, useState, useLayoutEffect } = require("react");


export const FavoriteContext = createContext();

function FavoriteContextProvider({children}) {
 
    const [favMeals,setFavMeals] = useState([])
    
    const addFav = (newMeal) => {
        // Check if the newMeal's foodId is already in the favMeals array
        if (!favMeals.some((meal) => meal.foodId === newMeal.foodId)) {
          setFavMeals((prev) => [...prev, newMeal]);
        }
      };

    const removeFav = (id) => {
        setFavMeals((prev) => prev.filter((meal) => meal.foodId !== id));
      };
      
      
  

    return <FavoriteContext.Provider value={{addFav,removeFav,favMeals,setFavMeals}}>
        {children}
    </FavoriteContext.Provider>
}

export default FavoriteContextProvider;