import React from "react";
import {List, ListItem} from 'material-ui/List';

class WorkshopList extends React.Component {
  render() {
    let listItems = this.props.workshops.map(workshop => (
          <ListItem key={workshop.title} style={{color: "black"}}
                primaryText={ `${workshop.title}`}
            />
    ));
    const listView = <List className="view"> {listItems} </List>
    return (
      <div className="view-container">
          {listView}
      </div>
    );
  }
}

export default WorkshopList