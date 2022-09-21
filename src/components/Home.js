import React from "react";
import Countdown from "./home/Countdown";
import Header from "./home/Header";
import Navigation from "./home/Navigation";
import Services from "./home/Services";
import Process from "./home/Process";
import Plans from "./home/Plans";
import Resources from "./home/Resources";
import Footer from "./home/Footer";

function Home(){
    return(
        <div className="body">
            <Navigation />
            <Header />
            <Services />
            <Countdown />
            <Process />
            <Plans/>
            <Resources/>
            <Footer/>
        </div>
    );
}

export default Home;