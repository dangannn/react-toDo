import React, { useState } from "react";
import MyInput from "../../UI/MyInput/MyInput";
import MyButton from "../../UI/MyButton/MyButton";

const PostForm = ({ addNewPost }: any) => {
  const [post, setPost] = useState({ id: "", title: "", value: "" });

  const createNewPost = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    addNewPost(newPost);
    setPost({ id: "", title: "", value: "" });
  };

  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPost({ ...post, title: e.target.value })
        }
        type="text"
        placeholder="Enter a title"
      />
      <MyInput
        value={post.value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPost({ ...post, value: e.target.value })
        }
        type="text"
        placeholder="Enter a value"
      />
      <MyButton onClick={createNewPost}>Post</MyButton>
    </form>
  );
};

export default PostForm;
