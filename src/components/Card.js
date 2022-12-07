import React from "react";

function card({ profile }) {
  return (
    <div className="card--container">
      <div className="proile--container">
        <div className="title--container">
          <ul className="title">
            <li className="name">
              <span>
                <strong>{profile.name}</strong>
              </span>
              <span className="tag-admin">
                <strong>Admin</strong>
              </span>
            </li>
            <li>{profile.title}</li>
          </ul>
        </div>
        <img className="avatar" src={profile.url} alt="title" />
      </div>

      <a className="email btn--card">
        <i class="fa fa-envelope fa--color"></i>
        <button className="btn1"> Email</button>
      </a>
      <a  className="call btn--card" href="#">
        <i class="fa fa-phone fa--color" aria-hidden="true "></i>
        <button className="btn1">Call</button>
      </a>
    </div>
  );
}

export default card;
