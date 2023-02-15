import React, { useMemo, useState } from "react";
import "./Reset.scss";
import "./App.scss";
import StarRating from "./components/StarRating/StarRating";
import Counter from "./components/Counter/Counter";
import PostList from "./components/PostList/PostList";
import { IPost } from "./types/types";
import PostForm from "./components/PostForm/PostForm";
import PostFilter from "./components/PostFilter/PostFilter";
import PostSearch from "./components/PostSearch/PostSearch";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Post 1", value: "info 4" },
    { id: 2, title: "Post 2", value: "info 3" },
    { id: 3, title: "Post 3", value: "info 2" },
    { id: 4, title: "Post 4", value: "info 1" },
  ]);

  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.value.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, sortedPosts]);

  const addNewPost = (newPost: IPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post: IPost) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort: string) => {
    setSelectedSort(sort);
  };

  return (
    <div className="App">
      <Counter />
      <StarRating />
      <PostForm addNewPost={addNewPost} />
      <PostSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <PostFilter selectedSort={selectedSort} sortPosts={sortPosts} />
      {sortedAndSearchedPosts.length !== 0 ? (
        <PostList posts={sortedAndSearchedPosts} remove={removePost} />
      ) : (
        <div className="warning-text">no posts here</div>
      )}
    </div>
  );
}

export default App;
