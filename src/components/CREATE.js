import React,{ Component } from 'react';

//to get values of event
import serializeForm from 'form-serialize';
//alert message--prompt,withRouter---to access to the history and match without props
import {Prompt,withRouter} from 'react-router-dom';

//to make use of store in individual component
import { connect } from 'react-redux';

//for creating action
import {create_user} from '../actions/ausers';

class Create extends Component{
//state for tracking the input----------------------------
state={
    username:"",
    location:"",
    valid:true
}

    createUser=(event)=>{
        event.preventDefault();

        console.log(this.props);
        // return false;

        //to prevent the default action--reload of page
        
        //serialize form---to get the values of event
        var newuser = serializeForm(event.target,{hash:true});
        console.log(serializeForm(event.target,{hash:true}));

        //history object is available as props
        //to access---this.props.history
        // this.props.history.push('/users');----**

        this.props.dispatch(create_user(userobj));

        //rest the value after clicking 
        this.setState({
            username:'',
            location:'',
            valid:true
        },()=>{
            //----**
            this.props.history.push('/users');
        });
       
        //alert('username');
    }




 //----------------------------------------------------------------   
//to give alert before navigationg to other link while it is in half done in present page
//state should be changed
trackInput=(event)=>{
//if changes to previous state then ()=>--anonymous function
//otherwise there is no need to change the state then normal object{}
    
        var updatedState={};
        updatedState[event.target.name]=event.target.value;
        updatedState.valid=false;
        this.setState(updatedState);

}



//--------------------------------------------------------------------------
    render(){

        return <div>
            
            {/* alert message */}
            <Prompt when={this.state.valid==false} message="leaving this page will loose information" />

            <form onSubmit={this.createUser}>

                <input type="text" placeholder="username" name="username" onChange={this.trackInput} /><br/><br/>
                <input type="text" placeholder="location" name="location" onChange={this.trackInput} /><br/><br/>
                <button>Create</button>
            
            </form>
        </div>
    }
}


function mapStateToProps(data){

    console.log(data);
    return{

        data:data.users
    }
    //console.log('inside mapStateToProps method');
    

}



//history n match
export default connect(mapStateToProps)(Create);