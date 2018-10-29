
import {DELETE_USER} from '../actions/ausers';




//moved from app to reducer----bcz  
const initialAppState=[
    {username:'user1',location:'Location 1'},
    {username:'user2',location:'Location 2'},
    {username:'user3',location:'Location 3'},
    {username:'user4',location:'Location 4'},
    {username:'user5',location:'Location 5'},
    {username:'user6',location:'Location 6'}
  ];


  //creating method for reducer
  //default value for state
  function userReducer(state=initialAppState,action){

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



  export default userReducer;