import Image from 'next/image'
import { Row, Col, Carousel } from "antd"

import Layout from "_components/Layout"
import ImgContaier from '_components/ImgContainer'
import slide1 from 'public/img/slide-1.jpg'
import slide2 from 'public/img/slide-wood.jpg'
import introImg from 'public/img/intro.jpg'
import img1 from 'public/img/1.jpg'
import img2 from 'public/img/2.jpg'
import img3 from 'public/img/3.jpg'
import img4 from 'public/img/4.jpg'
// import img from 'public/img/2.jpg'

export default function Home(props) {
  return (
    <Layout {...props} activeUrl='/'>
      <div className="w-100 overflow-hidden">
        <Carousel dots={true} autoplay={true} arrows={true} >
          <div className="my-auto w-100">
            <Image src={slide1} height="800" />
          </div>
          <div className="my-auto w-100">
            <Image src={slide2} height="800" />
          </div>
        </Carousel>
        <div className="flex flex-col justify-center mb-5">
          <div className="my-5">
            <h1 className="text-3xl">Về chúng tôi</h1>
          </div>
          <div>
            <Row className="max-w-screen-xl mx-auto">
              <Col md={{ span: 12 }} className="text-justify text-right p-4 font-sans text-base md:text-lg ">

                <p>Lời đầu tiên, Công Ty TNHH ĐT SX & Thiết Kế Nội Thất TL xin gửi tới Quý Khách hàng lời chúc sức khỏe, thành công và lời chào trân trọng nhất!</p>
                <p>Công ty chúng tôi cũng xin gửi lời cảm ơn chân thành nhất tới những khách hàng đã, đang và sẽ cho phép chúng tôi được trở thành người bạn đồng hành cũng như đã dành sự tín nhiệm và ủng hộ tới sản phẩm, dịch vụ mà công ty chúng tôi cung cấp.</p>
                <p className="break-words">Công Ty TNHH ĐT SX & Thiết Kế Nội Thất TL là Công ty hoạt động trong lĩnh vực: Tư vấn, thiết kế, thi công xây dựng, cải tạo nội thất nhà ở, văn phòng, trường học chuyên nghiệp; được đầu tư Nhà máy trực tiếp sản xuất đồ gỗ nội thất gia đình, văn phòng, trường học, khách sạn.
                  Công ty tuy là một doanh nghiệp mới thành lập, được nâng cấp từ Xưởng sản xuất đồ gỗ nội thất, nhưng với tầm nhìn dài hạn, được đầu tư bài bản, quản lý hoạt động chuyên nghiệp, xây dựng và khẳng định được uy tín với khách hàng
                </p>
                <p className="break-words">
                  Những ngày đầu thành lập, Nội Thất TL quyết định hướng phát triển chuyên sâu cho sản phẩm nội thất với thương hiệu Nội Thất TL cao cấp. Với quyết tâm không ngừng tìm hiểu, tiếp cận, sử dụng các công nghệ tiên tiến đưa vào sản phẩm, trong một thời gian ngắn chúng tôi đã trở thành một doanh nghiệp hàng đầu trong lĩnh vực sản xuất kinh doanh và tư vấn thiết kế nội thất gia đình, khách sạn, nhà hàng, văn phòng, Karaoke…. Với đội ngũ Công nhân lành nghề có kinh nghiệm cùng với những yêu cầu kỹ thuật cao – Tiêu chuẩn Châu Âu. Đặc biệt các sản phẩm TL được sản xuất trên dây chuyền máy móc công nghệ hiện đại của nhất của các nước tiên tiến, đồng thời dựa trên những nguyên phụ liệu tốt nhất được nhập khẩu từ Châu Âu . Do đó những sản phẩm của TL không những đáp ứng những yêu cầu về thẩm mỹ, độ bền mà còn làm hài lòng những khách hàng khó tính nhất.
                </p>
              </Col>
              <Col md={{ span: 12 }} className="max-w-lg text-left p-4"  >
                <Image src={introImg} />
              </Col>
            </Row>
          </div>
        </div>
        <div className="w-100 ">
          <div className="text-center font-sans text-xl text-white py-5" style={{ backgroundColor: '#7a9c59' }}>
            <div className="text-center font-bold uppercase text-3xl mb-2">
              Sản phẩm
            </div>
            <div>Nội thất TL xin giới thiệu một số mẫu sản phẩm mà chúng tôi đã sản xuất để quý khách hàng tham khảo.</div>
            <div>
              Ngoài ra chúng tôi còn sản xuất theo yêu câu riêng của từng quý khách.
            </div>
            <Row justify="space-around" className="max-w-screen-xl mx-auto my-5">
              {
                [img1, img2, img3, img4].map((i, k) =>
                  <Col className="m-2" key={k}>
                    <ImgContaier
                      src={i}
                      width={270}
                      height={270}
                      className="img-zoomin"
                    />
                  </Col>
                )
              }

            </Row>
          </div>
        </div>
      </div >
    </Layout >
  )
}
