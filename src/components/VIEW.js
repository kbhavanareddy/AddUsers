import React, {Component} from 'react';


class View extends Component{
    render(){

        return <div>
            {
                //match---url data-------params data----same as routeparams
                JSON.stringify(this.props)
            }
        </div>
    }
}



export default View;