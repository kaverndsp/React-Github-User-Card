import React from "react";

const FollowerCard = (props) => {
console.log(props);
return(
    <div>
        <h2>{props.follower.login}</h2>
        <img src={props.follower.avatar_url}/>

    </div>
)

}

export default FollowerCard;