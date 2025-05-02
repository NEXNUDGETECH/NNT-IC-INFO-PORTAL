import React from "react";
import "./card.css";
export const Card = () => {
  return (
    <div className="card">
      <div className="card-img">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRTWvrP8mIHnENF8kwwUytm0g53z-r5Jko4A&s"
          alt=""
        />
      </div>
      <div className="card-title">
        <span>how case on court?</span>
      </div>
      <div className="card-desc">
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos amet id
          enim rem doloribus autem eligendi quasi sunt tempore, consectetur
          magni unde provident asperiores laudantium distinctio quas nisi
          incidunt quod assumenda esse placeat dicta! Iure?
        </span>
      </div>
    </div>
  );
};
