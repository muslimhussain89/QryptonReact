import React from "react";
import "./ServicesPage.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import required modules
import { Autoplay } from "swiper/modules";

import "./ServicesPage.css";

export default function ServicesPage() {
  const services = [
    {
      ServiceName: "product design",
      ServiceNumber: "01",
      ServiceId: "productdesign",
    },
    {
      ServiceName: "product discovery",
      ServiceNumber: "02",
      ServiceId: "productdiscovery",
    },
    { ServiceName: "web design", ServiceNumber: "03", ServiceId: "webdesign" },
    {
      ServiceName: "webflow development",
      ServiceNumber: "04",
      ServiceId: "webflowdevelopment",
    },
    { ServiceName: "branding", ServiceNumber: "05", ServiceId: "branding" },
    {
      ServiceName: "marketing design",
      ServiceNumber: "06",
      ServiceId: "marketingdesign",
    },
    {
      ServiceName: "software development",
      ServiceNumber: "07",
      ServiceId: "softwaredevelopment",
    },
  ];

  const WeProvide = [
    // PRODUCT DESIGN
    {
      ServiceHeading: "Product design",
      className: "ProductDesign",
      Serviceid: "productdesign",
      Details:
        "Compelling product design sparks interest, encourages participation, and establishes brand affinity. Be remarkable.",

      ServiceList: [
        {
          ServiceCount: "01",
          ServiceName: "Ul design",
        },
        {
          ServiceCount: "02",
          ServiceName: "Prototyping",
        },
        {
          ServiceCount: "03",
          ServiceName: "UX design and usability",
        },
        {
          ServiceCount: "04",
          ServiceName: "Design system",
        },
        {
          ServiceCount: "05",
          ServiceName: "User flows and wireframes",
        },
        {
          ServiceCount: "06",
          ServiceName: "User testing",
        },
      ],
      ProductImages: [
        { Image: "./Images/ServicesPage/product_design-1.jpg" },
        { Image: "./Images/ServicesPage/product_design-2.jpg" },
        { Image: "./Images/ServicesPage/product_design-3.jpg" },
      ],
    },
    // PRODUCT DISCOVERY
    {
      ServiceHeading: "Product discovery",
      Serviceid: "productdiscovery",
      Details:
        "Thorough early-stage product exploration minimizes development expenditures and optimizes market entry.",

      ServiceList: [
        {
          ServiceCount: "01",
          ServiceName: "Discovery workshops",
        },
        {
          ServiceCount: "02",
          ServiceName: "User interviews",
        },
        {
          ServiceCount: "03",
          ServiceName: "MVP prioritization",
        },
        {
          ServiceCount: "04",
          ServiceName: "Audits",
        },
        {
          ServiceCount: "05",
          ServiceName: "Market research",
        },
        {
          ServiceCount: "06",
          ServiceName: "User journey mapping",
        },
      ],
      ProductImages: [
        { Image: "./Images/ServicesPage/lowtoHi.jpg" },
        { Image: "./Images/ServicesPage/web_detail.jpg" },
        { Image: "./Images/ServicesPage/lowtoHi.jpg" },

      ],
    },
    // WEB DESIGN
    {
      ServiceHeading: "Web design",
      Serviceid: "webdesign",
      Details:
        "We skillfully blend exceptional artistry and functionality to create websites that captivate and convert.",

      ServiceList: [
        {
          ServiceCount: "01",
          ServiceName: "High-fidelity web designs",
        },
        {
          ServiceCount: "02",
          ServiceName: "Lo-fi mockups & wireframes",
        },
        {
          ServiceCount: "03",
          ServiceName: "Responsive designs",
        },
        {
          ServiceCount: "04",
          ServiceName: "UX/UI design",
        },
        {
          ServiceCount: "05",
          ServiceName: "Customized design solutions",
        },
      ],
      ProductImages: [
        { Image: "./Images/ServicesPage/web_design-1.jpg" },
        { Image: "./Images/ServicesPage/web_design-2.jpg" },
        { Image: "./Images/ServicesPage/web_design-3.jpg" },
      ],
    },
    // Webflow Development
    {
      ServiceHeading: "Webflow Development",
      Serviceid: "webflowdevelopment",
      Details:
        "Our Webflow expertise delivers immersive digital experiences that captivate, engage, and inspire visitors to take action.",

      ServiceList: [
        {
          ServiceCount: "01",
          ServiceName: "Websites",
        },
        {
          ServiceCount: "02",
          ServiceName: "Landing pages",
        },
        {
          ServiceCount: "03",
          ServiceName: "Web apps",
        },
        {
          ServiceCount: "04",
          ServiceName: "Landing pages generators",
        },
        {
          ServiceCount: "05",
          ServiceName: "Custom solutions",
        },
        {
          ServiceCount: "06",
          ServiceName: "Integrations",
        },
        {
          ServiceCount: "07",
          ServiceName: "Support",
        },
      ],
      ProductImages: [
        { Image: "./Images/OurWorkImages/webFlow-1.jpg" },
        { Image: "./Images/OurWorkImages/webFlow-2.jpg" },
        { Image: "./Images/OurWorkImages/webFlow-1.jpg" },
      ],
    },

    // BRANDING
    {
      ServiceHeading: "Branding",
      Serviceid: "branding",
      Details:
        "Powerful branding is the cornerstone of startup success, establishing credibility, trust, and a strong market presence.",

      ServiceList: [
        {
          ServiceCount: "01",
          ServiceName: "Branding",
        },
        {
          ServiceCount: "02",
          ServiceName: "Brand guidelines & brandbook",
        },
        {
          ServiceCount: "03",
          ServiceName: "Creative direction",
        },
        {
          ServiceCount: "04",
          ServiceName: "Communication strategy",
        },
        {
          ServiceCount: "05",
          ServiceName: "Identity design",
        },
        {
          ServiceCount: "06",
          ServiceName: "Logo design",
        },
      ],
      ProductImages: [
        { Image: "./Images/OurWorkImages/Cosmetics Packaging.jpg" },
        { Image: "./Images/OurWorkImages/spantiq_brand.jpg" },
        { Image: "./Images/OurWorkImages/seekho_wcar.jpg" },
      ],
    },

    // Marketing design
    {
      ServiceHeading: "Marketing design",
      Serviceid: "marketingdesign",
      Details:
        "Compelling marketing design resonates with your target audience and persuades them to choose your brand.",

      ServiceList: [
        {
          ServiceCount: "01",
          ServiceName: "Pitch deck design & refinement",
        },
        {
          ServiceCount: "02",
          ServiceName: "Social media graphics & templates",
        },
        {
          ServiceCount: "03",
          ServiceName: "Branding for marketing collaterals",
        },
        {
          ServiceCount: "04",
          ServiceName: "Infographic design",
        },
        {
          ServiceCount: "05",
          ServiceName: "Display ad design",
        },
        {
          ServiceCount: "06",
          ServiceName: "Illustrations",
        },
      ],
      ProductImages: [
        { Image: "./Images/ServicesPage/marketing_design-1.jpg" },
        { Image: "./Images/ServicesPage/marketing_design-2.jpg" },
        { Image: "./Images/ServicesPage/marketing_design-3.jpg" },
      ],
    },

    // Software development
    {
      ServiceHeading: "Software development",
      Serviceid: "softwaredevelopment",
      Details:
        "Achieve more with less through our highly-focused design-centric partnership for efficient product development.",

      ServiceList: [
        {
          ServiceCount: "01",
          ServiceName: "Fast & cheap MVP prototyping",
        },
        {
          ServiceCount: "02",
          ServiceName: "Frontend development (React, Vue)",
        },
        {
          ServiceCount: "03",
          ServiceName:
            "Backend development (node.js, PHP, python, GO, C#, .NET)",
        },
        {
          ServiceCount: "04",
          ServiceName: "Mobile development",
        },
        {
          ServiceCount: "05",
          ServiceName: "Cryptocurrencies / Blockchain",
        },
        {
          ServiceCount: "06",
          ServiceName: "Cloud Infrastructure & DevOps",
        },
        {
          ServiceCount: "07",
          ServiceName: "Software architecture consultancy",
        },
      ],
      // ServiceVideo:"./Videos/Mobile App.mp4"
      ProductImages: [
        { Image: "./Images/ServicesPage/software_dev-1.jpg" },
        { Image: "./Images/ServicesPage/software_dev-2.jpg" },
        { Image: "./Images/ServicesPage/software_dev-3.jpg" },
      ],
    },
  ];
  return (
    <div className="ServicesPage">
      {/*********************************************************************
       *************** SERVICES HERO SECTION *****************************
       ***********************************************************************/}
      <div className="ServicesPageHero">
        <h1>
          At QRYPTON we plan, design and market delightful digital products.
        </h1>
        <div className="OurServices">
          <div className="ServicesName">
            {services.map((item, index) => (
              <HashLink smooth to={`#${item.ServiceId}`}>
                <div className="ServiceName">
                  <p>
                    <span>{item.ServiceNumber}</span>
                    {item.ServiceName}
                  </p>
                  <svg
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.33203 10H19.2487"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                    ></path>
                    <path
                      d="M13.4141 4.16797L19.2474 10.0013L13.4141 15.8346"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="square"
                    ></path>
                  </svg>
                </div>
              </HashLink>
            ))}
          </div>
        </div>
      </div>

      {/*********************************************************************
       *************** EACH SERVICES *****************************
       ***********************************************************************/}
      <div className="EachServiceSec">
        {WeProvide.map((items, index) => (
          <div className={items.className} id={items.Serviceid}>
            <div className="EachService">
              <h2>{items.ServiceHeading}</h2>
              <div className="EachServiceBody">
                <div className="ServicesDetails">
                  <p>BENEFIT</p>
                  <p>{items.Details}</p>
                </div>
                <div className="WeProvide">
                  <div className="WeProvideNumber">
                    <p>services</p>
                    {items.ServiceList.map((service, idx) => (
                      <p key={idx}>
                        <span>{service.ServiceCount}</span>{" "}
                        {service.ServiceName}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              {items.ProductImages && (
                <div className="WeProvidedImages">
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    centeredSlides={true}
                    loop={true} // Enables continuous loop
                    autoplay={{
                      delay: 3500,
                      disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay]}
                  >
                    <div>
                      {items.ProductImages.map((serviceImg, idx) => (
                        <SwiperSlide>
                          <img src={serviceImg.Image} alt="" />
                        </SwiperSlide>
                      ))}
                    </div>
                  </Swiper>
                </div>
              )}
              {items.ServiceVideo && (
                <div className="ServiceVideo">
                  <video autoPlay muted loop preload="auto">
                    <source src={items.ServiceVideo} type="video/mp4" />
                  </video>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
