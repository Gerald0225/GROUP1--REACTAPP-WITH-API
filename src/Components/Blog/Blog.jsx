import React from "react";
import "./Blog.css"; 
import logo1 from "../../Assets/blog1.png"; 
import logo2 from "../../Assets/blog2.png"; 
import logo3 from  "../../Assets/blog3.png"; 
import logo4 from "../../Assets/blog4.png"; 
import logo5 from "../../Assets/blog5.png";  
import logo6 from "../../Assets/blog6.png"; 


const Vlogs = () => {
  const blogPosts = [
    {
      title: "How to write the perfect thank-you note to your hotel",
      category: "Travel",
      date: "May 2025",
      author: "Jane Doe",
      image: logo1,
    },
    {
      title: "2025 Hotel Marketing Playbook Trends You Need To Know",
      category: "Marketing",
      date: "May 2025",
      author: "John Smith",
      image: logo2,
    },
    {
      title: "What is hotel customer satisfaction and how to improve it",
      category: "Tips",
      date: "May 2025",
      author: "Emily Rose",
      image: logo3,
    },
    {
      title: "All you need to know about hotel guest experience",
      category: "Hospitality",
      date: "May 2025",
      author: "Daniel Wu",
      image: logo4,
    },
    {
      title: "How to greet guests in the hospitality industry",
      category: "Service",
      date: "May 2025",
      author: "Anna Cruz",
      image: logo5,
    },
    {
      title: "How to showcase your hotel on social media",
      category: "Marketing",
      date: "May 2025",
      author: "Leo Park",
      image: logo6,
    },
  ];

  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section className="vlogs-section">
      <div className="hero-banner">
        <h1>Wanderest Blogs</h1>
      </div>

      <h2 className="vlogs-title">Our Latest News & Blogs</h2>

      <div className="vlogs-container">
        <div className="vlogs-grid">
          {blogPosts.map((post, i) => (
            <div className="blog-card" key={i}>
              <img src={post.image} alt="Blog" />
              <div className="card-content">
                <div className="meta">{post.category} | {post.date}</div>
                <h3>{post.title}</h3>
                <div className="author">By {post.author}</div>
                <button>Read More →</button>
              </div>
            </div>
          ))}
        </div>

        <aside className="sidebar">
          <input type="text" placeholder="Search posts..." className="search-box" />
          <div className="recent-posts">
            <h4>Recent Posts</h4>
            <ul>
              {recentPosts.map((post, i) => (
                <li key={i}>{post.title}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Vlogs;