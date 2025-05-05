import "./card.css";
const LawBlogCard = ({ imageSrc, title, author, date, tags }) => {
  return (
    <div className="hero-blog-card">
      <div className="hero-image-container">
        <img src={imageSrc} alt={title} className="hero-image" />
        <div className="hero-overlay">
          <h2 className="hero-title">{title}</h2>
          <div className="hero-meta">
            <span>{author}</span>
            <span className="dot">•</span>
            <span>{date}</span>
            <span className="dot">•</span>
            {tags.map((tag, i) => (
              <span key={i} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawBlogCard;
