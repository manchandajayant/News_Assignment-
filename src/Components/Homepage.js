import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
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
          <Card style={{ width: "18rem" }} key={index}>
            <Card.Text>{article.description}</Card.Text>
            <Card.Img variant="top" src={article.urlToImage} />
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>

              <Button variant="primary">Go to the Article</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
};

export default NewsFetched;
