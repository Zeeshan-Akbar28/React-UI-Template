import React from "react";
import Card from "./Card";
import data from "../data";


function cards() {
  const profiles = data.person.map(profile =>{
    return(
      <Card key={profile.id} profile={profile} />
    )
  })
  return (
    <div className="card--content--container">
        {profiles}
    </div>
  );
}

export default cards;
