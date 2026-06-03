import { TiStar } from "react-icons/ti";
import { BiPlus } from "react-icons/bi";
export default function TestimonialGrid() {
  const testimonialCards = [
    {
      title: "Successful projects",
      subtitle: "completed",
      text: "Incredible team. They delivered exactly what we needed, on time and beyond expectations.",
      reverse: false,
      delay: 0,
    },
    {
      title: "Successful projects",
      subtitle: "completed",
      text: "Incredible team. They delivered exactly what we needed, on time and beyond expectations.",
      reverse: true,
      delay: 200,
    },
    {
      title: "Successful projects",
      subtitle: "completed",
      text: "Incredible team. They delivered exactly what we needed, on time and beyond expectations.",
      reverse: false,
      delay: 400,
    },
    {
      title: "Successful projects",
      subtitle: "completed",
      text: "Incredible team. They delivered exactly what we needed, on time and beyond expectations.",
      reverse: true,
      delay: 600,
    },
  ];

  return (
    <>
    
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-2 gap-15 mt-[100px]">
        {testimonialCards.map((card, index) => (
          <div
            key={index}
            className={`rounded-2xl flex flex-col group transition-all duration-600 ${
              card.reverse ? "md:flex-col flex-col-reverse" : ""
            }`}
            data-aos="fade-up"
            data-aos-delay={String(card.delay)}
          >
            {/* TOP / BOTTOM BLOCK */}
            {!card.reverse && (
              <div className="flex items-start bg-white p-8 rounded-2xl group-hover:rounded-b-none transition-all duration-600">
                <img
                  className="w-[60px] h-fit"
                  src="/Images/service-faq.webp"
                  alt=""
                />
                <p className="text-[1.4rem] font-[600] ml-[25px] leading-7">
                  {card.title} <br />
                  <span className="text-[#6e6e6e] text-[1.2rem] font-[500]">
                    {card.subtitle}
                  </span>
                </p>
              </div>
            )}

            {/* TEXT BLOCK */}
            <div
              className={`flex flex-col justify-between bg-white p-8 md:h-[318px] max-md:h-[150px]  group-hover:h-[324px]  rounded-2xl transition-all duration-600   ${card.reverse ? "mb-[6px] group-hover:mb-0 hover:rounded-b-none" : "mt-[6px] group-hover:mt-0 hover:rounded-t-none"} `}
            >
              {card.reverse && (
                <p className="text-[1.6rem] font-[600]">
                  <span className="ml-[85px]"></span>
                  {card.text}
                </p>
              )}
              <div className="flex justify-between">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <TiStar key={i} color="#fb9826" size={18} />
                  ))}
                </div>
                <BiPlus
                  size={25}
                  className="text-[#6e6e6e] mr-[15px] rounded-full group-hover:rotate-90 transition-all duration-300"
                />
              </div>

              {!card.reverse && (
                <p className="text-[1.6rem] font-[600]">
                  <span className="ml-[85px]"></span>
                  {card.text}
                </p>
              )}
            </div>

            {/* REVERSED HEADER */}
            {card.reverse && (
              <div className="flex items-start bg-white p-8 rounded-2xl group-hover:rounded-t-none transition-all duration-600">
                <img
                  className="w-[60px] h-fit"
                  src="/Images/service-faq.webp"
                  alt=""
                />
                <p className="text-[1.4rem] font-[600] ml-[25px] leading-7">
                  {card.title} <br />
                  <span className="text-[#6e6e6e] text-[1.2rem] font-[500]">
                    {card.subtitle}
                  </span>
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
