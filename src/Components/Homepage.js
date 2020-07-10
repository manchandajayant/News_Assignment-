import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import Layout from "./Layout";
const NewsFetched = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "http://newsapi.org/v2/everything?q=football&from=2020-07-09&sortBy=publishedAt&apiKey=96433d611b85480f98304d80e9f10078"
      );

      //console.log("res", result);
      setdata(result.data.articles);
    };
    fetchData();
  }, []);
  //console.log(data);
  let articleCard = data.map((articleObject) => (
    <Col sm={4}>
      <Layout {...articleObject} />
    </Col>
  ));

  if (!data) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <Row>{articleCard}</Row>
      </div>
    );
  }
};

export default NewsFetched;
