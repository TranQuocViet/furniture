import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link"
import { Row, Col, Drawer, Button } from 'antd'
import { UnorderedListOutlined } from '@ant-design/icons'

import logo from '_assets/logo.png'


const Header = props => {
  const [current, setCurrent] = useState('home')
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const handleClick = e => {
    console.log(e)
    setCurrent(e.key)
  }
  return (
    <>
      <div className="w-100 bg-gray-50">
        <Row className="w-100 p-3 mx-auto  max-w-screen-xl  sticky top-0  border-b border-solid" justify="space-between" align="middle">
          <Col className="block md:hidden">
            <Button type="primary" onClick={showDrawer} icon={<UnorderedListOutlined />}>

            </Button>
          </Col>
          <Col className="max-h-20 text-lg m-auto">
            <Image
              src={logo}
              width={50}
              height={50}
            />
          </Col>
          <Col flex='auto' className="h-10 hidden md:block justify-self-stretch">
            <Row justify="space-around" align="middle" className="h-100 my-auto text-gray-500 text-lg uppercase ">
              <Col className="min-w-max hover:cursor-pointer hover:text-green-700">
                <Link href='/'>Trang chủ</Link>
              </Col>
              <Col className="min-w-max hover:cursor-pointer hover:text-green-700">
                <Col className="min-w-max hover:cursor-pointer hover:text-green-700">
                  <Link href='/intro'>Giới thiệu</Link>
                </Col>
              </Col>
              <Col className="min-w-max hover:cursor-pointer hover:text-green-700">Sản phẩm</Col>
              <Col className="min-w-max hover:cursor-pointer hover:text-green-700">Dịch vụ</Col>
              <Col className="min-w-max hover:cursor-pointer hover:text-green-700">Mẫu thiết kế</Col>
              <Col className="min-w-max hover:cursor-pointer hover:text-green-700">Dự án tiêu biểu</Col>
              <Col className="min-w-max hover:cursor-pointer hover:text-green-700">Liên hệ</Col>
            </Row>
          </Col>
        </Row>
      </div>


      <Drawer placement="left" onClose={onClose} visible={visible} closeIcon={null} bodyStyle={{ backgroundColor: '#565353' }}>
        <div className="flex flex-col uppercase text-lg text-white">
          <div className="border-b border-white mt-4 p-2">Trang chủ</div>
          <div className="border-b border-white mt-4 p-2">Giới thiệu</div>
          <div className="border-b border-white mt-4 p-2">Sản phẩm</div>
          <div className="border-b border-white mt-4 p-2">Dịch vụ</div>
          <div className="border-b border-white mt-4 p-2">Mẫu thiết kế</div>
          <div className="border-b border-white mt-4 p-2">Dự án tiêu biểu</div>
          <div className="border-b border-white mt-4 p-2">Liên hệ</div>
        </div>
      </Drawer>
    </>
  )
}

export default Header