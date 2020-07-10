import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "./Layout";

const API_KEY = `${process.env.REACT_APP_NEWS_API_KEY}`;

const NewsFetched = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://newsapi.org/v2/everything?q=football&from=2020-07-09&sortBy=publishedAt&apiKey=${API_KEY}`
      );

      //console.log("res", result);
      setdata(result.data.articles);
    };
    fetchData();
  }, []);
  //console.log(data);
  let articleCard = data.map((articleObject, index) => (
    <div className="col-md-4" key={index}>
      <Layout {...articleObject} />
    </div>
  ));

  if (!data) {
    return <h1>Loading...</h1>;
  } else {
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
