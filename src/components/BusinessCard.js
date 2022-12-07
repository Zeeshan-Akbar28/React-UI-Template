import React from "react";

function BusinessCard({profile}) {
  return (
    <div className="card--grid">
      <div className="profile--content">
        <img className="profile--img" src={profile.url} alt="name" />
        <ul className="profile--title">
          <li>
            <span>
              <strong>{profile.name}</strong>
            </span>
          </li>
          <li>
            {profile.title}
          </li>
        </ul>
        <li className="description">
            <span className="tag-admin">
              <strong>Admin</strong>
            </span>
            </li>
      </div>

      <a className="email btn--card">
      <i class="fa fa-envelope fa--color"></i>
        <button className="btn1"> Email</button>
      </a>
      <a className="call btn--card">
      <i class="fa fa-phone fa--color" aria-hidden="true"></i>
        <button className="btn1">Call</button>
      </a>
    </div>
  );
}

export default BusinessCard;
