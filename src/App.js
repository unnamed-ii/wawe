import React from "react";
import Header from "./components/Header/header";
import Main from "./blocks/Main/main";
import About from "./blocks/About/about";
import Footer from "./components/Footer/footer";
import Services from "./blocks/Services/services";
import Team from "./blocks/Team/team";
import Advantage from "./blocks/Advantages/advantages";
import Map from "./blocks/Map/map";
import Contacts from "./blocks/Contacts/contacts";
import WhyUs from "./blocks/WhyUs/whyus";

function App() {
    return (
        <>
            <Header />
            <Main />
            <About />
            <Advantage />
            <WhyUs />
            <Team />
            <Services />
            <Map />
            <Contacts />
            <Footer />
        </>
    );
}

export default App;
