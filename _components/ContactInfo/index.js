import React from "react";
import Link from 'next/link'
import { Row, Col } from "antd";

const ContactInfo = props => {
  return (
    <div className={`w-100 bg-red-200 ${props.className || ''}`} style={{ width: '100%' }}>
      <Row className="max-w-screen-xl py-4 text-left text-gray mx-auto">
        <Col md={{ span: 8 }} className="p-3" >
          <div className="font-bold text-2xl mb-2">
            Công Ty TNHH Đầu Tư Sản Xuất Và Thiết Kế Nội Thất TL
          </div>
          <div className="text-lg">Mã số thuế: 23424234234</div>
          <div className="text-lg">Địa chỉ: 40/18/09 Tô Vĩnh Diện, Khương Đình, Thanh Xuân, Hà Nội</div>
        </Col>
        <Col md={{ span: 8 }} className="p-3 text-lg text-justify" >
          <div>Văn phòng giao dịch: 89 Láng Hạ, Đống Đa Hà Nội</div>
          <div>Xưởng sản xuất: Thị trấn Nông Cống, Huyện Nông Cống, Tỉnh Thanh Hóa</div>
          <div>Hotline: 0383405969</div>
          <div>Email: conduongphang.fet@gmail.com</div>

        </Col>
        <Col md={{ span: 8 }} className="p-3 text-lg text-justify" >
          <div>
            Công Ty TNHH ĐT SX & Thiết Kế Nội Thất TL là Công ty hoạt động trong lĩnh vực: Tư vấn, thiết kế, thi công xây dựng,
            cải tạo nội thất nhà ở, văn phòng, trường học chuyên nghiệp; được đầu tư Nhà máy trực tiếp sản xuất đồ gỗ nội thất gia đình,
            văn phòng, trường học, khách sạn… <span className="italic hover:underline"><Link className="italic " href='/intro'>còn tiếp</Link></span>
          </div>
        </Col>

      </Row>
    </div>
  )
}

export default ContactInfo