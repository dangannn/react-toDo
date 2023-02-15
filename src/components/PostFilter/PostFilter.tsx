import React from "react";
import MySelect from "../../UI/MySelect/MySelect";

interface IPostFilter {
  selectedSort: string;
  sortPosts: (arg0: string) => void;
}
const PostFilter = ({ selectedSort, sortPosts }: IPostFilter) => {
  return (
    <div>
      <MySelect
        defaultValue="sort by"
        options={[
          { value: "title", name: "sort by title" },
          { value: "value", name: "sort by value" },
        ]}
        value={selectedSort}
        onChange={sortPosts}
      ></MySelect>
    </div>
  );
};

export default PostFilter;
