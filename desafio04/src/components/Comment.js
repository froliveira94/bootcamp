import React from "react";

export default function Comment({ data }) {
  return (
    <div id="comment">
      <img src={data.author.avatar} alt="" />
      <div className="content">
        <p>
          <span>{data.author.name}</span>
          {data.content}
        </p>
      </div>
    </div>
  );
}
