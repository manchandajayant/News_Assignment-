import React, { useState, useEffect } from "react";
import axios from "axios";

const NewsFetched = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "http://newsapi.org/v2/everything?q=football&from=2020-07-09&sortBy=publishedAt&apiKey=96433d611b85480f98304d80e9f10078"
      );

      console.log("res", result);
      setdata(result.data.articles);
    };
    fetchData();
  }, []);
  console.log(data);
  if (!data) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        {data.map((article, index) => (
          <h1 key={index}>{article.title}</h1>
        ))}
      </div>
    );
  }
};

export default NewsFetched;
