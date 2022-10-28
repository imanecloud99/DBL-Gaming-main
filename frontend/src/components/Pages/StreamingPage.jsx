import React from "react";
import Navbar from '../Navbars/Navbar';
import Body from "../Sections/Streaming/Body";
import Sidebar from "../Sections/Streaming/Sidebar";

import './StreamingPage.css'


function StreamingPage() {
    return(
        <div className="streamingPage__main">
            <Navbar />
            <Sidebar />
            <Body />
        </div>
    );
}

export default StreamingPage;