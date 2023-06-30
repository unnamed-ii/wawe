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
import Quote from "./blocks/Quote/quote";
import Blog from "./blocks/Blog/blog";
import InfoVideo from "./blocks/InfoVideo/infovideo";
import Gallery from "./blocks/Gallery/gallery";

function App() {
    return (
        <>
            <Header />
            <Main />
            <About />
            <Advantage />
            <WhyUs />
            <Gallery />
            <Quote />
            <InfoVideo />
            {/*<Blog />*/}
            <Team />
            <Services />
            <Map />
            <Contacts />
            <Footer />
        </>
    );
}

export default App;
