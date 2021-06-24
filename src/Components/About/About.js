import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import './About.css';
const About = () => {
    return (
        <div className="backGround">
            <Navbar></Navbar>
            
            <div className="container ">
                 <div className="align-self-center"style={{paddingTop:'50px'}}>
                        <h1>FOODPANDA</h1>
                        <h3>About Us</h3>
                        <p >
                        Foodpanda (stylized in lowercase as foodpanda) is an online food and grocery delivery platform brand owned by Delivery Hero, which is headquartered in Berlin, Germany and operates with 20 brands in about 50 countries across four continents.[1] The Foodpanda brand, currently used in Asia, Bulgaria and Romania, was acquired by Delivery Hero in December 2016.[2]
                        In 2012, Lukas Nagel and Rico Wyder established Foodpanda in Singapore and later expanded in Malaysia, Indonesia, Thailand.Foodpanda was launched in 2013 in Romania and in 2014 expanded in Hungary and Balkans.In 2014, Foodpanda expanded its service into the Philippines.[6] Shortly after, global expansion of the Foodpanda business was led by Ralf Wenzel, Felix Plog and Ben Bauer.From 2019 to 2020, foodpanda expanded in Myanmar,[7] Cambodia[8] and Laos.Foodpanda was launched in Japan, in September 2020[10] covering 6 cities including Kobe, Yokohama, Nagoya, Sapporo, Fukuoka and Hiroshima and later Osaka and Kyoto.[11]
                        </p>
                        <p>
                        In February 2014, Foodpanda acquired its main rival in Pakistan, Eat Oye.[12] It afterwards went through three management changes until 2019.[13] In early 2015, the company made an all-stock purchase of TastyKhana.in, and the portal Just Eat India.[14]Cofounder Rohit Chadda stepped down from roles at the company in the middle of 2015. In the end of 2015, the company laid off around 300 employees in India.[15] By 2016, none of the original managing directors or cofounders were present with the company.[16] Also at that time, there was a news expose alleging malpractice at foodpanda India, including non-payments to restaurants, and fake listings. Earlier that July, it was also revealed that the Singapore police raided their offices in the country for signs of malpractice concerning foreign interns. The company was based in Gurgaon at the time and active in 200 cities.[17] By 2016, Rocket India was seeking a buyer for the company, listing relatively low prices such as $10 to $15 million.[18]Delivery Hero announced in December 2020 that it would take control of South Korea's biggest food delivery app, Woowa Brothers Corp., at a $4 billion valuation.[10].In 2013, Foodpanda was launched in Bangladesh. With more than 20,000 employees operating in their company, Foodpanda is currently the largest food delivery service in Bangladesh.[19]
                        </p>
                </div>
            </div>
            <Footer></Footer>
       
        </div>
    );
};

export default About;