import React from "react";

import Header from "_components/Header";
import Footer from "_components/Footer";

const Layout = props => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header {...props} />
            <div className="text-center flex-grow">
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout