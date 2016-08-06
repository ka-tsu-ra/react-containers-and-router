import React from "react";
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {pinkA200, transparent} from 'material-ui/styles/colors';
import UserList from "../components/user/UserList";
import UserProfileContainer from "./UserProfileContainer";
import withWidth, { LARGE} from '../utils/WithWidth';
import es6promise from 'es6-promise';
import 'isomorphic-fetch';
es6promise.polyfill();

class UserListContainer extends React.Component {
    
    constructor() {
        super();
        this.state = { 
            users : []
        }    
    }

    showUserProfile(user) {
        this.context.router.push(`/users/${user.username}`);
    }

    componentDidMount() {
        fetch('/data/users.js', {
            method: 'get'
        }).then((response) => {
            return response.json()
        }).then((data) => {  
            this.setState({users:data})
        }).catch((err)=> {
            console.log(err);
        });
    }
    
    render() {
        console.log(this.props)
        return (
            //you need to change something here
            <UserList username={this.props.params.name} users={this.state.users} showUserProfile={this.showUserProfile}>
                <UserProfileContainer {...this.props}/>
            </UserList>
        )
    }
}

export default UserListContainer;