import React, { Component } from 'react'
import { Row, Col } from 'antd'

import Layout from "_components/Layout";

export class index extends Component {
  render() {
    return (
      <Layout activeUrl='/products'>
        <div className="text-center text-3xl my-3">Sản phẩm</div>
        <Row>
          <Col>

          </Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Layout>
    )
  }
}

export default index
