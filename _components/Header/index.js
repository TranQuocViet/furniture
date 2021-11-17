import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link"
import { Row, Col, Drawer, Button } from 'antd'
import { UnorderedListOutlined } from '@ant-design/icons'

import logo from '_assets/logo.png'


const Header = props => {
  const { activeUrl } = props
  const [showDrawer, setDrawer] = useState(false);
  const changeDrawer = () => {
    setDrawer(true);
  };
  const onClose = () => {
    setDrawer(false);
  };
  return (
    <>
      <div className="w-100 bg-gray-50">
        <Row className="w-100 p-3 mx-auto  max-w-screen-xl  sticky top-0  border-b border-solid" justify="space-between" align="middle">
          <Col className="block md:hidden">
            <Button type="primary" onClick={changeDrawer} icon={<UnorderedListOutlined />}>

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
            <Row justify="space-around" align="middle" className="h-100 my-auto text-lg uppercase">
              <Link href='/' passHref>
                <Col className={`min-w-max hover:cursor-pointer ${activeUrl === '/' ? 'text-green-700' : 'text-gray-500'} hover:text-green-700`}>Trang chủ</Col>
              </Link>
              <Link href='/intro' passHref>
                <Col className={`min-w-max hover:cursor-pointer ${activeUrl === '/intro' ? 'text-green-700' : 'text-gray-500'} hover:text-green-700`}>Giới thiệu</Col>
              </Link>
              <Link href="/products" passHref>
                <Col className={`min-w-max hover:cursor-pointer ${activeUrl === '/products' ? 'text-green-700' : 'text-gray-500'} hover:text-green-700`}>Sản phẩm</Col>
              </Link>
              <Link href="/services" passHref>
                <Col className={`min-w-max hover:cursor-pointer ${activeUrl === '/services' ? 'text-green-700' : 'text-gray-500'} hover:text-green-700`}>Dịch vụ</Col>
              </Link>
              <Link href="/demo" passHref>
                <Col className={`min-w-max hover:cursor-pointer ${activeUrl === '/demo' ? 'text-green-700' : 'text-gray-500'} hover:text-green-700`}>Mẫu thiết kế</Col>
              </Link>
              <Link href='/projects' passHref>
                <Col className={`min-w-max hover:cursor-pointer ${activeUrl === '/projects' ? 'text-green-700' : 'text-gray-500'} hover:text-green-700`}>Dự án tiêu biểu</Col>
              </Link>
              <Link href='/contact'>
                <Col className={`min-w-max hover:cursor-pointer ${activeUrl === '/contact' ? 'text-green-700' : 'text-gray-500'} hover:text-green-700`}>Liên hệ</Col>
              </Link>
            </Row>
          </Col>
        </Row>
      </div>


      <Drawer placement="left" onClose={onClose} visible={showDrawer} closeIcon={null} bodyStyle={{ backgroundColor: '#565353' }}>
        <div className="flex flex-col uppercase text-lg text-white">
          <Link href='/' passHref>
            <div className={`border-b border-white' mt-4 p-2`}>
              Trang chủ
            </div>
          </Link>
          <Link href='/intro' passHref>
            <div className="border-b border-white mt-4 p-2">
              Giới thiệu
            </div>
          </Link>


          <div className="border-b border-white mt-4 p-2">Sản phẩm</div>
          <div className="border-b border-white mt-4 p-2">Dịch vụ</div>
          <div className="border-b border-white mt-4 p-2">Mẫu thiết kế</div>
          <Link href='/projects' passHref>
            <div className="border-b border-white mt-4 p-2">
              Dự án tiêu biểu
            </div>
          </Link>
          <Link href='/contact' passHref>
            <div className="border-b border-white mt-4 p-2">
              Liên hệ
            </div>
          </Link>
        </div>
      </Drawer>
    </>
  )
}

export default Header