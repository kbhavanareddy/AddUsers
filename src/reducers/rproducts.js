
import {DELETE_USER} from '../actions/ausers';




//moved from app to reducer----bcz  
const initialAppState=[
    {username:'product1',location:'Location 1'},
    {username:'product2',location:'Location 2'},
    {username:'product3',location:'Location 3'},
    {username:'product4',location:'Location 4'},
    {username:'product5',location:'Location 5'},
    {username:'product6',location:'Location 6'}
  ];


  //creating method for reducer
  //default value for state
  function productReducer(state=initialAppState,action){

    switch (action.type){

      case DELETE_USER:

        var new_state = state.filter((item,index)=>{

          return item.username!=action.username
        });

        console.log(new_state);
        return new_state;
      break;
    }

    //console.log(action);
    return state;

  }



  export default productReducer;