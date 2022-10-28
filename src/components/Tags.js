import React from "react";

const Tags = (props) => {
  
  const liTags = () => {
    if (props.tags !== undefined) {
      return props.tags.map((element, index) => (
        <li className="tags-hosting" key={index}>{element}</li>
      ));
    }
  };

  return <div className="tag-wrapper">{liTags()}</div>;
};

export default Tags;
