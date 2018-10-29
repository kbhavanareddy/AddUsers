import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import Users from './USERS';
import Create from './CREATE';
import Home from './HOME';
import Navigation from './NAVIGATION';
import {Route,Switch} from 'react-router-dom';
import View from './VIEW';
import Page from './PAGE';

import PrivateRoute from './PRIVATE';

//state------------------------------------------------
class App extends Component {


  // state={
  //   userdata:''
  // }
  



//to delete------------------------------------------------------------

// onDelete=(username)=>{

//   //update the current state
//   this.setState((state)=>{
    
//     return {
      
//       userdata : state.userdata.filter((item,index)=>{
        
//         return item.username!=username;

//       })

//     }

//   })

//alert('parentComponent='+username);

// }


//create user---------------------------------------------------------------------

onCreateUser=(newuser)=>{

  this.setState((state)=>{
 
    return {
      
      userdata:[...state.userdata,newuser]

    }
    
  });

}




//-----------------------------------------------------------------------------------
  render() {
   
    // const users=[
    //   {username:'user1',location:'Location 1'},
    //   {username:'user2',location:'Location 2'},
    //   {username:'user3',location:'Location 3'},
    //   {username:'user4',location:'Location 4'},
    //   {username:'user5',location:'Location 5'}

    // ]
//----------------------------------------------------------------
  //div--whatever u want to create the element--div,ul,li...
  // const elem=React.createElement('div',null,'sample content');

  // const elem2=React.createElement('div',null,'content from div2');

  // const cntr=React.createElement('div',{'id':'cntr'},elem,elem2);


  // const list=React.createElement('ul',null,

  //     React.createElement('li',null,'item1'),
  //     React.createElement('li',null,'item2'),
  //     React.createElement('li',null,'item3'),
  //     React.createElement('li',null,'item4')

  // );



//jsx-----------------------------------------------------------------

// const list2=<ul>
//   <li>Item1</li>
//   <li>Item2</li>
//   <li>Item3</li>
//   <li>Item4</li>
//   <li>Item5</li>
// </ul>



//array list---------------------------------------------------------

// const list3=<ul>

//   {
//     users.map((item,index)=>{

//       return <li key={index}>
//         {
//           item.username+','+item.location
//         }
//       </li>

//     })
//   }

// </ul>





  return <div>

    {/* <Users  stateusers={this.state.userdata} onDelete={this.onDelete}/>

    <Create OnCreateUser={this.onCreateUser}/> */}


    <Navigation />

{/* for only invalid routes we use switch */}
    <Switch>
    <Route path="/" component={Home} exact/>

    <PrivateRoute path="/users" render={()=>{
      // return <Users appstore={this.props.store}  />

      return <Users  />
     }}/>


    {/* history--to navigate to ither page--only for render() not for component */}
    {/* taking off {history} in render for achieving without props*/}
    <PrivateRoute path="/create" render={()=>{
      return  <Create OnCreateUser={this.onCreateUser} />
    }} />



    {/* <Route path="/view/:id" component={View}/> */}

    <Route path="/view/:id" render={(history,match)=>{

      return <View history={history} match={match}/>
    }}/> 


    <Route component={Page} />

    </Switch>

    </div>;

  }
}



export default App;
