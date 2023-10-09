import React from "react";
import "./BlogCard.css"; // Import the CSS file for styling

const BlogCard = ({ title, img ,content , auther}) => {
  return (
    <div className="blog-card">
       {/* <img src={img} alt="" className="blogimage" /> */}
      <div className="blog-title">{title}</div>
      <p className="blog-author">By {auther}</p>
      <p className="blog-content">{content}</p> 
    </div>
  );
};

export default BlogCard;
