import React from "react";
import es6promise from 'es6-promise';
import WorkshopList from "./WorkshopList";
import 'isomorphic-fetch';
es6promise.polyfill();

class WorkshopListContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { workshops : [] };
    }

    componentDidMount() {
        fetch(`/data/workshops.js`, {
            method: 'get'
        }).then((response) => {
            return response.json()
        }).then((data) => {
            this.setState({workshops : data});
        }).catch((err)=> {
            console.log(err);
        });
    }

    render() {
        return <WorkshopList workshops={this.state.workshops}/>
    }
}

export default WorkshopListContainer