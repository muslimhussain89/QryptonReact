import React, { useState } from "react";
import BlurOnScroll from "./BlurOnScroll";
import { BiPlus } from "react-icons/bi";
import Accordion from "./ServicesAccordion";

export default function LandingServicesSection({ handleContactToggle}) {
  const [openIndex, setOpenIndex] = useState(null);

  const accordionData = [
    {
      number: "001",
      title: "Product Design",
      serviceImage:"./Images/ServicesPage/product_design-2.webp",
      openTitle: "Product <br/> Design",
      details:
        "Compelling product design sparks interest, encourages participation, and establishes brand affinity. Be remarkable.",
      dataAos: "fade-up",
      dataDelay: "0",
      categories: [
        "Ul design",
        "Prototyping",
        "UX design and usability",
        "Design system",
        "User flows and wireframes",
        "User testing",
      ],
    },
    {
      number: "002",
      title: "Product discovery", // Assuming 002 should be different from 001
      serviceImage:"./Images/ServicesPage/lowtoHi.webp",
      openTitle: "Product <br/> Discovery",
      details:
        "Thorough early-stage product exploration minimizes development expenditures and optimizes market entry.",
      dataAos: "fade-up",
      dataDelay: "500",
      categories: [
        "Discovery workshops",
        "User interviews",
        "MVP prioritization",
        "Audits",
        "Market research",
        "User journey mapping",
      ],
    },
    {
      number: "003",
      title: "Web design", // Assuming 003 should be different from 002
      serviceImage:"./Images/ServicesPage/web_design-3.webp",
      openTitle: "Web <br/> Design",
      details:
        "We skillfully blend exceptional artistry and functionality to create websites that captivate and convert.",
      dataAos: "fade-up",
      dataDelay: "1000",
      categories: [
        "High-fidelity web designs",
        "Lo-fi mockups & wireframes",
        "Responsive designs",
        "UX/UI design",
        "Customized design solutions",
      ],
    },
    {
      number: "004",
      title: "Web Development", // Assuming 004 should be different
      serviceImage:"./Images/OurWorkImages/webFlow-1.webp",
      openTitle: "Web <br/> Development",
      details:
        "Our Web expertise delivers immersive digital experiences that captivate, engage, and inspire visitors to take action.",
      dataAos: "fade-up",
      dataDelay: "1500",
      categories: [
        "Websites",
        "Landing pages",
        "Web apps",
        "Landing pages generators",
        "Custom solutions",
        "Integrations",
        "Support",
      ],
    },
    {
      number: "005",
      title: "Branding", // Assuming 005 should be different
      serviceImage:"./Images/OurWorkImages/spantiq_brand.webp",
      openTitle: "Branding",
      details:
        "Powerful branding is the cornerstone of startup success, establishing credibility, trust, and a strong market presence.",
      dataAos: "fade-up",
      dataDelay: "1500",
      categories: [
        "Branding",
        "Brand guidelines & brandbook",
        "Creative direction",
        "Communication strategy",
        "Identity design",
        "Logo design",
      ],
    },
    {
      number: "006",
      title: "Marketing design", // Assuming 006 should be different
      serviceImage:"./Images/ServicesPage/marketing_design-2.webp",
      openTitle: "Marketing <br/> Design",
      details:
        "Compelling marketing design resonates with your target audience and persuades them to choose your brand.",
      dataAos: "fade-up",
      dataDelay: "1500",
      categories: [
        "Pitch deck design & refinement",
        "Social media graphics & templates",
        "Branding for marketing collaterals",
        "Infographic design",
        "Display ad design",
        "Illustrations",
      ],
    },
    {
      number: "007",
      title: "Software development", // Assuming 007 should be different
      serviceImage:"./Images/ServicesPage/software_dev-3.webp",
      openTitle: "Software <br/> Development",
      details:
        "Achieve more with less through our highly-focused design-centric partnership for efficient product development.",
      dataAos: "fade-up",
      dataDelay: "1500",
      categories: [
        "Fast & cheap MVP prototyping",
        "Frontend development (React, Vue)",
        "Backend development (node.js, PHP, python, GO, C#, .NET)",
        "Mobile development",
        "Cryptocurrencies / Blockchain",
        " Cloud Infrastructure & DevOps",
        "Software architecture consultancy",
      ],
    },
  ];

  return (
    <div id="services">
      <div className="bg-black md:py-[150px] py-50">
        <div className="max-w-[1500px] mx-auto lg:flex max-2xl:px-[4%]">
          <div className="flex w-[22%] max-lg:mb-[50px]">
            <p className="capitalize flex text-[1.6rem] font-[600] text-white">
              <BiPlus
                size={25}
                className="bg-white text-black mr-[15px] rounded-full"
              />
              What we do
            </p>
          </div>
          <div className="w-fit flex gap-[22px] leading-[01] relative">
            <BlurOnScroll>
              <h2 className="2xl:text-[12.2rem] sm:text-[8rem] text-[6rem] font-[600] text-white capitalize">
                services
              </h2>
            </BlurOnScroll>
            <BlurOnScroll>
              <p className="text-[4rem] text-[#6e6e6e] font-[600] -mb-20 ml-[-15px]">
                (7)
              </p>
            </BlurOnScroll>
          </div>
        </div>
        <div className="max-w-[1500px] mx-auto md:mt-[100px] mt-30 max-2xl:px-[4%]">
          {accordionData.map((item, index) => (
            <Accordion
              key={index}
              number={item.number}
              serviceImage={item.serviceImage}
              title={item.title}
              OpenTitle={item.openTitle}
              Details={item.details}
              categories={item.categories}
              dataAos={item.dataAos}
              dataDelay={index * 100}
              open={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
          <button onClick={handleContactToggle}
            href="#"
            className="text-[1.6rem]  lg:ml-[21%] ml-[10%] mt-[50px] cursor-pointer block w-fit capitalize font-semibold"
          >
            <a className="bg-white rounded-full py-5 px-12 " href="https://cal.com/shahrozqrypton/30min" target="blank">get started</a>
          </button>
        </div>
      </div>
    </div>
  );
}
