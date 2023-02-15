import React, { useState } from "react";
import Post from "../Post/Post";
import { IPost } from "../../types/types";

interface PostList {
  posts: IPost[];
  remove: any;
}

const PostList = ({ posts, remove }: PostList) => {
  return (
    <div>
      <h2>Post List</h2>
      {posts.map((post) => {
        return <Post key={post.id} post={post} remove={remove} />;
      })}
    </div>
  );
};

export default PostList;
