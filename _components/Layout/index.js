import React from "react";

import Header from "_components/Header";
import Footer from "_components/Footer";
import ContactInfo from '_components/ContactInfo'

const Layout = props => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header {...props} />
            <div className="text-center flex-grow relative">
                {props.children}
                <ContactInfo />
            </div>
            <Footer />
        </div>
    )
}

export default Layout