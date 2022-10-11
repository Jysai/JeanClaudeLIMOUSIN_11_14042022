import React from "react";

const Tags = (arrayHost) => {
  const liTags = () => {
    if (arrayHost.tags !== undefined) {
      return arrayHost.tags.map((element, index) => (
        <li className="tags-hosting" key={index}>{element}</li>
      ));
    }
  };

  return <div className="tag-wrapper">{liTags()}</div>;
};

export default Tags;
