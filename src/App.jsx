import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => {
    return(
        <>
            <Navbar></Navbar>
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
        </>
    );
};

export default App;