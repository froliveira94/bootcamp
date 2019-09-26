import React, { Component } from "react";

import Post from "./Post";

import profile from "../assets/profile.jpeg";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: profile
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Felipe Rodrigues",
          avatar: profile
        },
        content: "Conteúdo do comentário"
      }
    ]
  };
  render() {
    const { posts } = this.state;
    return (
      <article id="postlist">
        {posts.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </article>
    );
  }
}

export default PostList;
