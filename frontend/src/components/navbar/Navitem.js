import React from "react";
import { Link } from "react-router-dom";

export const Navitem = (props) => {
  const { url, name } = props;

  return <Link to={url}>{name}</Link>;
};

export default Navitem;
