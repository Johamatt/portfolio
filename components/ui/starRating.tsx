// StarRating.js
import React from "react";

const StarRating = ({ rating }: any) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      // Full star
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="gold"
          className="w-4 h-4"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.8 5.82 22 7 14.14l-5-4.87 6.91-1L12 2z" />
        </svg>
      );
    } else if (rating >= i - 0.5) {
      // Half star
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-4 h-4"
        >
          <defs>
            <linearGradient id={`halfGradient-${i}`}>
              <stop offset="50%" stopColor="gold" />
              <stop offset="50%" stopColor="gray" />
            </linearGradient>
          </defs>
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.8 5.82 22 7 14.14l-5-4.87 6.91-1L12 2z"
            fill={`url(#halfGradient-${i})`}
          />
        </svg>
      );
    } else {
      // Empty star
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="gray"
          className="w-4 h-4"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.8 5.82 22 7 14.14l-5-4.87 6.91-1L12 2z" />
        </svg>
      );
    }
  }

  return <div className="flex">{stars}</div>;
};

export default StarRating;
