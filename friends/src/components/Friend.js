import React, { Component } from 'react';




export default function Friend( {name, picSquare, status, currentLocation, friendCount})
return (

  <li className='friend'>
	<img className="profile-pic" src= { picSquare } />

		<h3> { name }</h3>

		<div className="location">
			Location: { currentLocation.city },
      { currentLocation.state },
      { currentLocation.country }
		</div>

		<div className="status">
			Status:{ status } <span className="hashtag">#ihateprovo</span>
		</div>

		<div className="num-friends">
			Friends: { friendCount }
		</div>
</li>

);
}



Friend.propTypes = {

  name: PropTypes.string.isRequired
, picSquare: PropTypes.string.isRequired
, status: PropTypes.string
, currentLocation: PropTypes.object.isRequired
, friendCount: PropTypes.number

}
