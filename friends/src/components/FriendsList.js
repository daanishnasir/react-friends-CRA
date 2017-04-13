import React, { Component } from 'react';


import friends from "../friends";

import Friend from "./Friend";


export default class FriendsList extends Component {


constructor(){

  super();

  this.state = {
    searchText : "",    //used to search for friends
    orderBy : "name",  //to determine how we sort friends
    order : "ascending"  //to set the sorting order
  };


  this.handleSearchChange = this.handleChange.bind( this, "searchText" );
  this.handleOrderByChange = this.handleChange.bind(this, "orderBy" );
  this.handleOrderChange = this.handleChange.bind( this, "order");
}


handleChange( field, event) {
  this.setState( { [ field ] : event.target.value } );
}



  render(){

    const {
      searchText,
      orderBy,
      order
    } = this.state;

//const searchText = this.state.searchText;
//const orderBy = this.state.orderBy;
//const order = this.state.order;

const friendElements = friends.map ( friend => (
   <Friend
        key= { friend.name }
        name = { friend.name }
        picSquare = { friend.pic_square }
        status = { friend.status ? friend.status.message : ""}
        currentLocation = { friend.current_location }
        friendCount = { friend.friend_count }
    />
));

return (
    <div>
    	<form className="form-inline searchForm" role="form">

    		<div className="form-group">

    			<input
              className="form-control"
              onChange = { this.handleSearchChange }
              placeholder="Search For Friends"
              value = { searchText }
          />


                <select
                    className="input-medium"
                    onChange = { this.handleOrderByChange }
                    value = { orderBy }
                 >

                    <option value="name">Name</option>
                    <option value="friend_count">#Friends</option>
                </select>

                <select
                    className="input-medium"
                    onChange = { this.handleOrderChange}
                    value = { order }
                >

                    <option value="descending">Descending</option>
                    <option value="ascending">Ascending</option>
                </select>

    		</div>
    	</form>

    	<ul>
        { friendElements }
    	</ul>
    </div>
  )

  }



}
