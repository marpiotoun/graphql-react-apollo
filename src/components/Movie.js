import React from "react";
import { Link } from "react-router-dom";

export default ({ id, title, medium_cover_image }) => {
  return (
    <div>
      <Link to={`/${id}`}>
        <b>{title}</b>
        <img src={medium_cover_image}></img>
      </Link>
    </div>
  );
};
