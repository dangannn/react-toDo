import React from "react";
import MyInput from "../../UI/MyInput/MyInput";

const PostSearch = ({ searchQuery, setSearchQuery }: any) => {
  return (
    <div>
      <MyInput
        placeholder="Search..."
        value={searchQuery}
        onChange={(event: { target: { value: any } }) =>
          setSearchQuery(event.target.value)
        }
      />
    </div>
  );
};

export default PostSearch;
