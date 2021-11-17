import React, { Component } from 'react'
import { Row, Col } from 'antd'

import Layout from "_components/Layout";
import ContactInfo from '_components/ContactInfo'

export class index extends Component {
  render() {
    return (
      <Layout activeUrl='/contact'>
        <div className="text-center text-3xl my-3">Thông tin liên hệ</div>
        <Row></Row>
      </Layout>
    )
  }
}

export default index
