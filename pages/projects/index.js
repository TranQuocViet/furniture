import React, { Component } from 'react'
import { Row, Col } from 'antd'

import Layout from "_components/Layout";
import ContactInfo from '_components/ContactInfo'

export class index extends Component {
  render() {
    return (
      <Layout>
        <div className="text-center text-3xl my-3">Các dự án chúng tôi đã thi công</div>
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
