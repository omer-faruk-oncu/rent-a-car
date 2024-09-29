import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { carData } from "../helpers/data";

const Cars = () => {
  console.log(carData);
  return (
    <Container>
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Cars
      </h3>
      <Row className="">
        {carData.map(({id, name, type, img}) => (
          <Col xs={6} sm={4} lg={3} key={id}>
            <Image src={img} className="img-thumbnail car-img" />
            <p>{name}</p>
          </Col>
        ))}
      </Row>
      
    </Container>
  );
};

export default Cars;
