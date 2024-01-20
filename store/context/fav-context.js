const { createContext, useState, useLayoutEffect } = require("react");


export const FavoriteContext = createContext();

function FavoriteContextProvider({children}) {
 
    const [favMeals,setFavMeals] = useState([])

    const addFav = (newMeal) => {
        setFavMeals((prev) => [...prev, newMeal])
    }

    const removeFav = (id) => {
        setFavMeals((prev) => prev.filter((meal) => meal.foodId !== id));
      };
      
      
  

    return <FavoriteContext.Provider value={{addFav,removeFav,favMeals,setFavMeals}}>
        {children}
    </FavoriteContext.Provider>
}

export default FavoriteContextProvider;