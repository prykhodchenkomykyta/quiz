import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Loader.css";

const Loader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          navigate("/email");
          return 100;
        }
        return prevProgress + 2;
      });
    }, 100);
  }, [navigate]);

  return (
    <div className="loader-container">
      <svg className="loader" viewBox="0 0 100 100">
        <circle
          className="loader-background"
          cx="50"
          cy="50"
          r="45"
          strokeWidth="10"
        />
        <circle
          className="loader-bar"
          cx="50"
          cy="50"
          r="45"
          strokeWidth="10"
          transform="rotate(-90 50 50)"
          strokeDasharray="283"
          strokeDashoffset={283 - (progress / 100) * 283}
        />
        <text className="loader-text" x="50" y="50" textAnchor="middle">
          {progress}%
        </text>
      </svg>
      <div className="loader-caption">Finding collection for you</div>
    </div>
  );
};

export default Loader;
