import React from "react";
import Header from "./components/Header/header";
import Main from "./blocks/Main/main";
import About from "./blocks/About/about";
import Footer from "./components/Footer/footer";
import Services from "./blocks/Services/services";
import Team from "./blocks/Team/team";
import Advantage from "./blocks/Advantages/advantages";

function App() {
    return (
        <>
            <Header />
            <Main />
            <About />
            <Advantage />
            <Team />
            <Services />
            <Footer />
        </>
    );
}

export default App;
