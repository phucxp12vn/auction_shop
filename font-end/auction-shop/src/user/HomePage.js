import React, { Component } from "react";
import { Carousel, Card, Col, Row } from "antd";
import blender from "../images/blender.jpg";
import hammer from "../images/hammer.jpg";
import vacuumCleaner from "../images/vacuum-cleaner.jpg";
import styled from "styled-components";
const { Meta } = Card;
const CarouselWrapper = styled.div`
  .ant-carousel .slick-slide {
    text-align: center;
    height: 300px;
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
  }

  .carousel-item {
    text-align: -webkit-center;
    padding-top: 10px;
    img {
      width: 200px;
      height: 250px;
    }
  }
`;
class HomePage extends Component {
  state = {};
  render() {
    return [
      <CarouselWrapper>
        <Carousel autoplay>
          <div className="carousel-item">
            <img src={blender} alt="blender" />
          </div>
          <div className="carousel-item">
            <img src={hammer} alt="hammer" />
          </div>
          <div className="carousel-item">
            <img src={vacuumCleaner} alt="vacuum-cleaner" />
          </div>
        </Carousel>
      </CarouselWrapper>,
      <div style={{ background: "#ECECEC", padding: "30px" }}>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
      </div>
    ];
  }
}

export default HomePage;
