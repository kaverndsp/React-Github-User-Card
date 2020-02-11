import React from "react";

const UserCard = (props) => {

return(
    <div className="div-container">
     <h1>ME</h1>
     <div className="card-container">
       
        <h1>{props.data.name}</h1>
        <img src={props.data.avatar_url} />
        <p className="login">{props.data.login}</p>
    </div>
    </div>
)



}



export default UserCard;