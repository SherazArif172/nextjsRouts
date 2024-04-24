import React from "react";
import Postsbtn from "./Postsbtn";

const Posts = ({ title, body, id }) => {
  return (
    <div className="border border-white p-10">
      <h2 className="text-3xl font-bold p-3">{title}</h2>
      <p className="font-light px-3">{body}</p>
      <div className="border-2 border-white px-4 py-3 w-32">
        <Postsbtn />
      </div>
    </div>
  );
};

export default Posts;
