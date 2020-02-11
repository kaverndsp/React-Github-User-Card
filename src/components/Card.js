import React from "react";
import UserCard from "./UserCard";
import FollowerCard from "./FollowerCard";

const Card = (props) => {
console.log("This is data",props)

return(
  <div>
      <UserCard data={props.data}/>
     <div>
     <h1>Followers</h1>
     {props.follower.map((item) => {
         return(<FollowerCard key={item.id} follower={item} />)
     })}
  </div>
  </div>
)



}



export default Card;