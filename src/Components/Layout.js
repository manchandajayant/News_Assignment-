import React from "react";
import "../card-style.css";
const Layout = (props) => {
  const { title, description, urlToImage, url, author } = props;
  //console.log(props);
  return (
    <div className="card-group">
      <div className="card">
        <div className="overflow">
          <a href={url} target="_empty">
            <img
              src={urlToImage}
              className="card-img-top"
              alt="nothing to show"
            />
          </a>
        </div>
        <div className="card-body text dark">
          <h4 className="card-title">{title}</h4>

          <h6>{author}</h6>
        </div>

        <p className="card-text text-secondary font-weight-light">
          {description}
        </p>
        <a href={url} className="btn btn-outline" target="_empty">
          Go to the Article
        </a>
      </div>
    </div>
  );
};

export default Layout;
