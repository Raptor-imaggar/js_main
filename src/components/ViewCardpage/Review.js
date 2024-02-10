// Review.js
import React from 'react';
import { FaStar } from 'react-icons/fa'; // Import the star icon from react-icons

const Review = ({ user, rating, date, comment }) => (
  <div className="review">
    <div className="user-info">
      <img src={user.img} alt="Profile Picture" />
      <div className="user-details">
        <strong>{user.name}</strong>
        <br />
        Rating, {rating} stars
        <br />
        <div className="star-loading">
          {[...Array(rating)].map((_, index) => (
            <FaStar key={index} />
          ))}
        </div>
        <br />
        {date}
      </div>
    </div>
    <p className="comment">{comment}</p>
  </div>
);

export default Review;
