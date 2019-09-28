import React from "react";
import Comment from "./Comment";

function Post({ data }) {
  return (
    <section id="post">
      <div className="profile">
        <img src={data.author.avatar} alt={data.author.avatar.name} />
        <div className="profile-name">
          <p>{data.author.name}</p>
          <span>{data.date}</span>
        </div>
      </div>
      <div className="post-content">
        <p>{data.content}</p>
      </div>
      {!!data.comments &&
        data.comments.map(comment => (
          <Comment key={comment.id} data={comment} />
        ))}
    </section>
  );
}

export default Post;
