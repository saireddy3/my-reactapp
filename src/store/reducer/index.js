import axios from 'axios';
import React from 'react';	
 
 function reducer(state = {vehicle: ''}, action){
switch (action.type) {
    case "Car":
        return {
            vehicle: "It is a Car"
        };
        // const result = await axios.get("https://jsonplaceholder.typicode.com/posts");
        // console.log(result.data);
    case "Bike":
    return {
      vehicle: "It is a Bike"
    };
    default:
      return "No";
  }
}
 
export default reducer;