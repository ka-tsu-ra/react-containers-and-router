import React from "react";
import Main from "../components/Main";
import Home from "../components/Home";
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import UserProfile from "../components/user/UserProfile";
import UserList from "../components/user/UserList";
import WorkshopList from "../components/workshop/WorkshopList";

const Routes = (
    <Route path="/" component={Main}>
        <Route path="users" component={UserList}>
            <Route path=":username" component={UserProfile} />
        </Route>
        <IndexRoute component={Home} />
    </Route>
);

export default Routes;