import React, { useState } from "react";
import "./blogs.css";
import { Head } from "../../components/header/Head";

const blogPosts = [
  {
    id: "1",
    title: "Understanding Legal Frameworks",
    category: "Legal",
    image:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202505/operation-sindoor-pahalgam-attack-revenge-07413339-16x9_0.jpg?VersionId=naUfRgTvB3tfSO6gn6PtIl8GLWUSN4yR&size=690:388", // Replace with your image URL
    description:
      "A comprehensive guide to understanding the basics of legal frameworks.",
    author: "John Doe",
    date: "May 7, 2025",
  },
  {
    id: "2",
    title: "The Importance of Contracts",
    category: "Business",
    image:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202505/operation-sindoor-pahalgam-attack-revenge-07413339-16x9_0.jpg?VersionId=naUfRgTvB3tfSO6gn6PtIl8GLWUSN4yR&size=690:388", // Replace with your image URL
    description:
      "Learn why contracts are essential in both personal and professional life.",
    author: "Jane Smith",
    date: "May 5, 2025",
  },
  {
    id: "3",
    title: "How to Navigate Legal Disputes",
    category: "Legal",
    image:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202505/operation-sindoor-pahalgam-attack-revenge-07413339-16x9_0.jpg?VersionId=naUfRgTvB3tfSO6gn6PtIl8GLWUSN4yR&size=690:388", // Replace with your image URL
    description:
      "Tips and strategies for resolving legal disputes effectively.",
    author: "Emily Johnson",
    date: "May 1, 2025",
  },
];

export const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="blogs">
      <Head />
      <div className="blogs-search">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button className="search-button">Search</button>
      </div>
      <div className="blogs-list">
        {blogPosts.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <span className="blog-category">{blog.category}</span>
              <h2 className="blog-title">{blog.title}</h2>
              <p className="blog-description">{blog.description}</p>
              <div className="blog-footer">
                <span className="blog-author">By {blog.author}</span>
                <span className="blog-date">{blog.date}</span>
              </div>
              <button className="read-more-button">Read Full Article</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
