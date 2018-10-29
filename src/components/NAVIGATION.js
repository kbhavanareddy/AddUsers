import React,{Component} from 'react';

import {Link,NavLink} from 'react-router-dom';

import {authService} from '../service/authService';

class Navigation extends Component{

    render(){
        return <div>

            {/* // highligting the links when clicked */}
            <NavLink exact={true} activeClassName="activeLink" to="/">HOME </NavLink> |

                {
                    authService.checkUserStatus() ? <span> 
                    <NavLink activeClassName="activeLink" to="/users" >USERS </NavLink> |
                    <NavLink activeClassName="activeLink" to="/create" >CREATE </NavLink>

                    </span>: ''
                 }
            

        </div>
    }
}


export default Navigation;