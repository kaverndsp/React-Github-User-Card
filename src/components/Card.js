import React from "react";
import UserCard from "./UserCard";
import FollowerCard from "./FollowerCard";
import "./styles.css";
const Card = (props) => {
console.log("This is data",props)

return(
  <div>
      
      <UserCard data={props.data}/>
      <h1 className="follow-text">Followers</h1>
      <div className="follower-container">
    
     {props.follower.map((item) => {
         return(<FollowerCard key={item.id} follower={item} />)
     })}
  </div>
  </div>
)



}



export default Card;