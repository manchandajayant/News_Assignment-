import React from "react";
import { Card, Button } from "react-bootstrap";

const Layout = (props) => {
  const { title, description, urlToImage, url } = props;
  //console.log(props);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Img variant="top" src={urlToImage} />
        <Card.Body>
          <Button variant="primary">Go to the Article</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Layout;
