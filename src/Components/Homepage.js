import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "./Layout";
import { showAllArticles } from "../Store/articleAction";

const NewsFetched = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.articles);

  useEffect(() => {
    dispatch(showAllArticles());
  }, [dispatch]);
  //console.log(data);

  if (!data) {
    return <h1>Loading...</h1>;
  } else {
    let articleCard = data.map((articleObject, index) => (
      <div className="col-md-4" key={index}>
        <Layout {...articleObject} />
      </div>
    ));
    return (
      <div>
        <nav
          className="navbar navbar-light bg-light"
          style={{
            boxShadow: "5px 5px 20px 1px rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "Center",
          }}
        >
          <span className="navbar-brand mb-0 h1">FootBall News</span>
        </nav>
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">{articleCard}</div>
        </div>
      </div>
    );
  }
};

export default NewsFetched;
