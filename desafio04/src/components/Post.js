import React from "react";

function Post({ data }) {
  return (
    <section id="post">
      <div className="profile">
        <img src={data.author.avatar} alt={data.author.avatar.name} />
      </div>
    </section>
  );
}

export default Post;
