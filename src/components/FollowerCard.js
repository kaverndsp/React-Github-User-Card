import React from "react";

const FollowerCard = (props) => {
console.log(props);
return(
    <div className="followers">
    <div className="card-container">
        <h2>{props.follower.login}</h2>
        <img src={props.follower.avatar_url}/>
        <a href={props.follower.url}>Github Profile</a>
    </div>
    </div>
)

}

export default FollowerCard;