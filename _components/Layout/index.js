import React from "react";

import Header from "_components/Header";
import Footer from "_components/Footer";
import ContactInfo from '_components/ContactInfo'

const Layout = props => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header {...props} />
      <div className="text-center flex-grow flow-col">
        <div className="flex-grow">
          {props.children}
        </div>
      </div>
      <ContactInfo />
      <div className="border fixed bottom-3 left-3 w-max rounded-3xl p-3 bg-red-500 font-bold">
        <a href="tel:0383405969" className="text-white hover:text-white tracking-widest">
          Hotline: 0383405969
        </a>
      </div>
      <Footer />
    </div>
  )
}

export default Layout