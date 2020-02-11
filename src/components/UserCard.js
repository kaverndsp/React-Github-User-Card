import React from "react";

const UserCard = (props) => {

return(
    <div>
        <h1>{props.data.name}</h1>
        <img src={props.data.avatar_url} />
        {/* <p>{props.data.bio}</p> */}
    </div>
)



}



export default UserCard;