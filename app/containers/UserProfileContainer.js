import React from "react";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import es6promise from 'es6-promise';
import UserProfile from "../components/user/UserProfile";
import 'isomorphic-fetch';
es6promise.polyfill();

class UserProfileContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { username : null };
    }

    componentDidMount() {
        this.fetchUser(this.props.params.username);
    }

    fetchUser(username) {
        fetch(`/data/users/${username}.json`, {
            method: 'get'
        }).then((response) => {
            return response.json()
        }).then((data) => {
            this.setState({user : data});
        }).catch((err)=> {
            console.log(err);
        });
    }

    render() {
        <UserProfile {...this.props} user={this.state.username}/>
    }
}

export default UserProfile