import React from "react";
import Main from "../components/Main";
import Home from "../components/Home";
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import UserProfileContainer from "../containers/UserProfileContainer";
import UserListContainer from "../containers/UserListContainer";
import WorkshopListContainer from "../containers/WorkshopListContainer";

const Routes = (
    <Route path="/" component={Main}>
        <Route path="users" component={UserListContainer}>
            <Route path=":username" component={UserProfileContainer} />
        </Route>
        <Route path="workshops" component={WorkshopListContainer}>
        </Route>
        <IndexRoute component={Home} />
    </Route>
);

export default Routes;