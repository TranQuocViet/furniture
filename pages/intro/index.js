import React from "react";
import { Row, Col } from "antd";
import Image from 'next/image'

import Layout from "_components/Layout";
import ContactInfo from "_components/ContactInfo";
import introImg from 'public/img/intro.jpg'

const Intro = props => {
  return (
    <Layout {...props} activeUrl='/intro'>
      <div className="flex flex-col justify-center mb-5">
        <div>
          <Row className="max-w-screen-xl mx-auto">
            <Col md={{ span: 12 }} className="text-justify text-right p-4 font-sans text-lg">

              <p>Lời đầu tiên, Công Ty TNHH ĐT SX & Thiết Kế Nội Thất TL xin gửi tới Quý Khách hàng lời chúc sức khỏe, thành công và lời chào trân trọng nhất!</p>
              <p>Công ty chúng tôi cũng xin gửi lời cảm ơn chân thành nhất tới những khách hàng đã, đang và sẽ cho phép chúng tôi được trở thành người bạn đồng hành cũng như đã dành sự tín nhiệm và ủng hộ tới sản phẩm, dịch vụ mà công ty chúng tôi cung cấp.</p>
              <p className="break-words">Công Ty TNHH ĐT SX & Thiết Kế Nội Thất TL là Công ty hoạt động trong lĩnh vực: Tư vấn, thiết kế, thi công xây dựng, cải tạo nội thất nhà ở, văn phòng, trường học chuyên nghiệp; được đầu tư Nhà máy trực tiếp sản xuất đồ gỗ nội thất gia đình, văn phòng, trường học, khách sạn.
                Công ty tuy là một doanh nghiệp mới thành lập, được nâng cấp từ Xưởng sản xuất đồ gỗ nội thất, nhưng với tầm nhìn dài hạn, được đầu tư bài bản, quản lý hoạt động chuyên nghiệp, xây dựng và khẳng định được uy tín với khách hàng
              </p>
              <p className="break-words">
                Những ngày đầu thành lập, Nội Thất TL quyết định hướng phát triển chuyên sâu cho sản phẩm nội thất với thương hiệu Nội Thất TL cao cấp. Với quyết tâm không ngừng tìm hiểu, tiếp cận, sử dụng các công nghệ tiên tiến đưa vào sản phẩm, trong một thời gian ngắn chúng tôi đã trở thành một doanh nghiệp hàng đầu trong lĩnh vực sản xuất kinh doanh và tư vấn thiết kế nội thất gia đình, khách sạn, nhà hàng, văn phòng, Karaoke…. Với đội ngũ Công nhân lành nghề có kinh nghiệm cùng với những yêu cầu kỹ thuật cao – Tiêu chuẩn Châu Âu. Đặc biệt các sản phẩm TL được sản xuất trên dây chuyền máy móc công nghệ hiện đại của nhất của các nước tiên tiến, đồng thời dựa trên những nguyên phụ liệu tốt nhất được nhập khẩu từ Châu Âu . Do đó những sản phẩm của TL không những đáp ứng những yêu cầu về thẩm mỹ, độ bền mà còn làm hài lòng những khách hàng khó tính nhất.
              </p>
            </Col>
            <Col md={{ span: 12 }} className="max-w-lg text-left"  >
              <Image src={introImg} />
            </Col>
          </Row>
        </div>
      </div>
      <div className="flex flex-col justify-center mb-5">
        <div>
          <Row className="max-w-screen-xl mx-auto">
            <Col md={{ span: 12 }} className="max-w-lg text-left"  >
              <Image src={introImg} />
            </Col>
            <Col md={{ span: 12 }} className="text-justify text-right p-4 font-sans text-lg">

              <p>Qua nghiên cứu, đánh giá xu thế phát triển, định hướng thị trường, cũng như từ những trăn trở các đối đối tác về vấn đề đồng bộ trong thi công nội thất. Công ty chúng tôi đưa ra quyết định mang tính đột phá mới – cho sản phẩm mới đó là, thi công các sản phẩm nội thất trọn gói bằng các vật liệu như: Gỗ tự nhiên, Gỗ Công nghiệp, Veneer, Melamine, Highgloss UV, Highgloss Acrylic, Gỗ tự nhiên ghép thanh phủ Veneer….</p>
              <p>Trong thời gian qua, Chúng tôi đã không ngừng phấn đấu vươn lên để trở thành một trong những doanh nghiệp hàng đầu trong lĩnh vực nội thất. Qua từng năm hoạt động, Công ty không ngừng phát triển về mọi mặt, uy tín của Công ty  ngày càng được nâng cao, thị trường của Công ty không ngừng mở rộng khắp cả nước.</p>
              <p>
                Công Ty TNHH ĐT SX & Thiết Kế Nội Thất TL là Công ty hoạt động trong lĩnh vực: Tư vấn, thiết kế, thi công xây dựng, cải tạo nội thất nhà ở, văn phòng, trường học chuyên nghiệp; được đầu tư Nhà máy trực tiếp sản xuất đồ gỗ nội thất gia đình, văn phòng, trường học, khách sạn.
                Cô
              </p>
              <p>
                Thay mặt công ty Nội Thất TL, tôi xin chân thành cảm ơn Quý Khách hàng đã tín nhiệm và hợp tác với chúng tôi . Hy vọng, TL sẽ đóng góp một phần nhỏ vào sự thành công của Quý Khách hàng.
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  )
}

export default Intro