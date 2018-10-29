import React,{ Component } from 'react';

//link---view
import {Link} from 'react-router-dom';

//for deleting ACTION
import { delete_user } from '../actions/ausers';

//to make use of store in individual component
import { connect } from 'react-redux';


class Users extends Component{

//for delete---componentDidMount
state={

    users:''
}




//state to change data-every component has its own state
// state={
//     userdata:'sample data from userdata'
// };


onDelete = (username)=>{
    // this.props.onDelete(username);
    //alert(username);

    this.props.appstore.dispatch(delete_user(username));

}



//componenetDidMount()--same as ngOnInIt()--------------------------------------------------------------------
componentDidMount(){

    // this.props.appstore.subscribe(()=>{

    //     this.setState({
    //         users:this.props.appstore.getState()
    //     });

    //     console.log(this.props.appstore.getState());
    // });

    // this.setState({

    //     users:this.props.appstore.getState()
    // });
    
    // console.log('from componentDidMount');

    console.log(this.props);
}



//-----------------------------------------------------------------
    render(){

        // const users=[
        //     {username:'user1',location:'Location 1'},
        //     {username:'user2',location:'Location 2'},
        //     {username:'user3',location:'Location 3'},
        //     {username:'user4',location:'Location 4'},
        //     {username:'user5',location:'Location 5'}
        // ];

    

    //using props----------------------------------------------------
    //accepting the props--the values sent from parent--through props

    //getState()---to get the initial state value
    const propusers=this.props.data;

    console.log(this.props.appstore);
    const list3=<div>
        
        <ul>
        
        {
            propusers && propusers.map((item,index)=>{

            return <li key={index}>
                {
                item.username+','+item.location
                }

                <Link to={'/view/'+index}>View</Link>
                <button onClick={()=>this.onDelete(item.username)}>Delete</button>
            </li>
            })
        }
        
        </ul>

    </div>


        return list3;

    }
}


function mapStateToProps(data){

    console.log(data);
    return{

        data:data.users
    }
    //console.log('inside mapStateToProps method');
    

}


export default connect(mapStateToProps)(Users);