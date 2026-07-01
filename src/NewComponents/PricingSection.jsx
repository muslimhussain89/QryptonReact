import { BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";
import { useState } from "react";
import BlurOnScroll from "./BlurOnScroll";

export default function PricingSection({ handleContactToggle }) {
  const [perProject, setPerProject] = useState(true);

  const packages = [
    {
      name: "BASIC",
      price: "719",
      originalPrice: "899",
      badgeText: "Starter",
      badgeType: "success", // Green theme
      // description:
      //   "Best for startups needing consistent graphic output. Sits above ManyPixels Basic ($549) with added animation.",
      services: [
        "Social media static posts",
        "Static renders for social",
        "2D animations up to 20 seconds",
        "Custom illustrations",
        "Print media and basic branding assets",
      ],
      resources: ["Graphic Designer", "Account Coordinator"],
      details: {
        activeRequests: "Up to 2 concurrent tasks",
        turnaround: "2–3 business days",
        limit: "Unlimited",
        tierInfo: "ENTRY . GRAPHIC AND STATIC",
      },
    },
    {
      name: "STANDARD",
      price: "1,196",
      originalPrice: "1,495",
      badgeText: "Growth",
      badgeType: "warning", // Yellow theme
      // description:
      //   "Key differentiator: web/app design included here. DotYeti gates this behind their $2,595 tier.",
      services: [
        "Everything in Basic",
        "2D/3D animations up to 20 seconds",
        "Promotional videos and campaigns",
        "Web and app design",
        "Looping GIFs",
        "Ad creatives for social and paid media",
      ],
      resources: [
        "Graphic Designer",
        "2D/3D Motion Artist",
        "UI/UX Designer",
        "Account Coordinator",
        "3D Modeller",
      ],
      details: {
        activeRequests: "Up to 2 concurrent tasks",
        turnaround: "1–2 business days",
        limit: "Unlimited",
        tierInfo: "MID . ANIMATION AND DESIGN",
      },
    },
    {
      name: "ENTERPRISE",
      price: "1,807",
      originalPrice: "2,259",
      badgeText: "Scale",
      badgeType: "success",
      // description:
      // "Strongest value vs market. DotYeti charges $2,595 for comparable scope. AI production + 4 concurrent slots are decisive edges.",
      services: [
        "Everything in Standard",
        "Cinematic-quality 2D/3D animation",
        "AI production (Midjourney + Runway)",
        "Full brand identity and style guides",
        "Storytelling visuals for campaigns",
        "Packaging and merch design",
      ],
      resources: [
        "Art Director",
        "Graphic Designer",
        "2D/3D Motion Artist",
        "UI/UX Designer",
        "Account Manager",
      ],
      details: {
        activeRequests: "Up to 4 concurrent tasks",
        turnaround: "Within 2 business days",
        limit: "Unlimited",
        tierInfo: "UPPER . BRANDING AND ADVANCED ANIMATION",
      },
    },
    {
      name: "APEX",
      price: "2,480+",
      originalPrice: "3,100+",
      badgeText: "Custom",
      badgeType: "warning",
      // description:
      //   "DotYeti Apex starts at $3,995. Qrypton Apex at $2,480 gives enterprise clients a meaningful discount while you build case studies.",
      services: [
        "Everything in Enterprise",
        "Advanced cinematic CGI",
        "AI video production",
        "Campaign strategy and creative direction",
        "Custom web development",
        "Scope and team tailored per client",
      ],
      resources: [
        "Dedicated Art Director",
        "Full team allocation",
        "Account Manager",
        "Strategy lead on request",
      ],
      details: {
        activeRequests: "4+ concurrent (scoped per project)",
        turnaround: "Priority. Expedited on request",
        limit: "Custom",
        tierInfo: "CUSTOM . FULL SERVICE",
      },
    },
  ];

  return (
    <div id="pricing" className="bg-[#00000005] md:py-[150px] py-[10rem]">
      <div className="max-w-[1500px] mx-auto max-2xl:px-[4%]">
        <div className="flex max-lg:flex-col">
          <div className="flex w-[22%] max-xl:mb-[50px]">
            <p className="capitalize flex text-[1.6rem] font-semibold text-black">
              <BiPlus
                size={25}
                className="bg-white text-black mr-[15px] rounded-full"
              />
              Packages
            </p>
          </div>
          <div>
            <div className="w-[55%] flex flex-col gap-[22px] leading-[01]">
              <BlurOnScroll>
                <h2 className="text-[5.4rem]  font-bold text-black capitalize">
                  pricing
                </h2>
              </BlurOnScroll>
            </div>
            <motion.div
              initial={{ filter: "blur(8px)" }}
              whileInView={{ filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.9 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex gap-[22px] bg-[#363636] md:mt-[100px] mt-[50px] rounded-full w-max p-3"
            >
              <button
                onClick={() => setPerProject(true)}
                className={`${perProject ? "bg-white text-dark" : "bg-dark text-white"} rounded-full py-5 px-12 text-[1.5rem] cursor-pointer block w-fit capitalize font-semibold`}
              >
                Pay Per Month
              </button>
              <button
                onClick={() => setPerProject(!perProject)}
                className={`${perProject ? "bg-dark text-white" : "bg-white text-dark"} rounded-full py-5 px-12 text-[1.5rem] cursor-pointer block w-fit capitalize font-semibold`}
              >
                Pay Per 6 Month
              </button>
            </motion.div>
          </div>
        </div>

        {/* <div className="sm:flex mt-[80px] gap-3">
          <div className="bg-[#ffffff14] p-[25px] sm:w-[30%] sm:h-[350px] h-[200px] flex flex-col justify-between rounded-3xl mb-6">
            <div>
              <p className="text-[1.6rem] font-semibold text-white">
                Want more traffic and leads?
              </p>
              <p className="text-[#6e6e6e] text-[1.4rem] font-semibold lg:w-[60%] leading-7 mt-[15px]">
                Get marketing and SEO that starts with your goals.
              </p>
            </div>
            <div>
              <p className="text-[2.8rem] font-semibold text-white">
                {perProject ? "+$1,490" : "+$590"}
              </p>
            </div>
          </div>
          <div className="bg-[#ffffff14] p-[25px] sm:w-[70%] sm:h-[350px] flex flex-col justify-between rounded-3xl items-stretch">
            <div className="grid sm:grid-cols-2 gap-6">
              <p className="lg:text-[4.8rem] text-[4rem] font-semibold text-white">
                {perProject ? "$2,490" : "$1,990"}
                <span className="text-[#6e6e6e] text-[1.4rem] font-semibold ml-[5px]">
                  {perProject ? "/project" : "/month"}
                </span>
              </p>

              {perProject ? (
                <div>
                  <p className="text-white text-[1.4rem] font-semibold flex mb-4">
                    <span>
                      <BiPlus
                        size={20}
                        className="bg-[#6e6e6e54] text-white mr-[15px] rounded-full"
                      />
                    </span>
                    Homepage + up to 4 inner pages
                  </p>
                  <p className="text-white text-[1.4rem] font-semibold flex mb-4">
                    <span>
                      <BiPlus
                        size={20}
                        className="bg-[#6e6e6e54] text-white mr-[15px] rounded-full"
                      />
                    </span>
                    Homepage + up to 4 inner pages
                  </p>
                  <p className="text-white text-[1.4rem] font-semibold flex mb-4">
                    <span>
                      <BiPlus
                        size={20}
                        className="bg-[#6e6e6e54] text-white mr-[15px] rounded-full"
                      />
                    </span>
                    Homepage + up to 4 inner pages
                  </p>
                </div>
              ) : (
                <div>
                  <p className="text-white text-[1.4rem] font-semibold flex mb-4">
                    <span>
                      <BiPlus
                        size={20}
                        className="bg-[#6e6e6e54] text-white mr-[15px] rounded-full"
                      />
                    </span>
                    Homepage + up to 4 inner pages
                  </p>
                  <p className="text-white text-[1.4rem] font-semibold flex mb-4">
                    <span>
                      <BiPlus
                        size={20}
                        className="bg-[#6e6e6e54] text-white mr-[15px] rounded-full"
                      />
                    </span>
                    Homepage + up to 4 inner pages
                  </p>
                  <p className="text-white text-[1.4rem] font-semibold flex mb-4">
                    <span>
                      <BiPlus
                        size={20}
                        className="bg-[#6e6e6e54] text-white mr-[15px] rounded-full"
                      />
                    </span>
                    Homepage + up to 4 inner pages
                  </p>
                  <p className="text-white text-[1.4rem] font-semibold flex mb-4">
                    <span>
                      <BiPlus
                        size={20}
                        className="bg-[#6e6e6e54] text-white mr-[15px] rounded-full"
                      />
                    </span>
                    Homepage + up to 4 inner pages
                  </p>
                </div>
              )}

            </div>
            <div className="flex justify-between items-center mt-[50px]">
              <div className="flex justify-between border-b border-[#6e6e6e54] pb-2 w-[45%]">
                <p className="text-[#6e6e6e] text-[1.2rem] font-semibold">
                  Delivery time
                </p>
                <p className="text-white text-[1.2rem] font-semibold">
                  {perProject ? "3-4 weeks" : "ongoing"}
                </p>
              </div>

              <button
                href="#"
                className="bg-white rounded-full py-5 px-12 text-[1.4rem] cursor-pointer block w-fit capitalize font-semibold"
              >
                get started
              </button>
            </div>
          </div>
        </div> */}

        {/* <div className="mt-[80px] sm:flex">
          <div className="w-[30%]">
            <p className="capitalize flex text-[1.6rem] font-semibold text-[#6e6e6e] max-sm:mb-[50px]">
              Simple pricing
            </p>
          </div>
          <div className="sm:w-[70%]">
            <p class="text-[2.5rem]  font-medium  sm:w-[80%] text-[#6e6e6e] leading-13">
              <span class="font-semibold text-black mr-[85px]"></span>
              <span className="text-white">
                Add marketing, SEO, or content creation—
              </span>
              flexible tools to strengthen your project. We’ll shape a solution
              that fits your business, not ours.
            </p>
          </div>
        </div> */}

        <div className="max-w-[1500px] mt-40 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={String(index * 250)}
              className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 border-t-8 border-[#b83c27]"
            >
              {/* Header Area */}
              <div className="p-8 pb-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-[1.6rem] font-black tracking-tight italic">
                    {pkg.name}
                  </h2>
                  <div
                    className={`bg-emerald-50 font-bold px-3 py-1 rounded text-[10px] tracking-widest uppercase ${pkg.badgeText === "Custom" ? "text-red-600" : "text-emerald-600"}`}
                  >
                    {pkg.badgeText}
                  </div>
                </div>

                <div className="flex items-baseline mb-1">
                  <span className="text-[1.4rem] font-bold">
                    {perProject
                      ? `$${pkg.price}`
                      : `$${(Number(pkg.price.replace(/[^0-9]/g, "")) * 6).toLocaleString()}`}
                  </span>
                  <span className="text-xl font-semibold text-slate-700 ml-1">
                    / mo
                  </span>
                </div>

                <p className="text-slate-400 text-[1rem] italic mb-8">
                  was <span className="line-through">${pkg.originalPrice}</span>
                </p>

                {/* Button */}
                <div className="relative group mb-10">
                  <div className="absolute inset-0 bg-[#909090] rounded-xl group-hover:translate-y-0 translate-y-1.5 translate-x-0.5 transition-all duration-600 ease-out" />

                  <button className="relative w-full cursor-pointer bg-white border-2  border-[#909090] font-black rounded-xl uppercase tracking-wider text-[1.2rem] transition-transform active:translate-y-1 active:translate-x-0.5">
                    {/* Animated Background */}
                    <span className="absolute left-0 top-0 inset-0  w-0 bg-[#909090] transition-all duration-400 ease-out group-hover:w-full" />

                    <a
                      href="https://cal.com/shahrozqrypton/30min"
                      target="_blank"
                      rel="noreferrer"
                      className="relative z-10 block w-full py-3 transition-colors duration-300 group-hover:text-white"
                    >
                      Get Started
                    </a>
                  </button>
                </div>

                {/* Services List */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-[1.3rem] uppercase tracking-widest mb-3">
                      Services
                    </h3>
                    <ul className="space-y-2">
                      {pkg.services.map((service, sIndex) => (
                        <li
                          key={sIndex}
                          className="flex items-start gap-2 text-slate-600 text-xs leading-tight"
                        >
                          <span className="text-[#909090] text-[1rem]">•</span>
                          <span className="text-[1.3rem]">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Resources List */}
                  <div className="mt-10">
                    <h3 className="font-bold text-[1.3rem] uppercase tracking-widest mb-3">
                      Dedicated Resources
                    </h3>
                    <ul className="space-y-2 text-slate-600 text-xs">
                      {pkg.resources.map((resource, rIndex) => (
                        <li key={rIndex} className="flex gap-2 leading-tight">
                          <span className="text-[#909090] text-[1rem]">•</span>
                          <span className="text-[1.3rem]">{resource}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Stats Section */}
              <div className="mt-auto bg-[#f5f5f5] p-8 pt-6 border-t border-slate-100">
                <div className="space-y-3 text-[11px]">
                  <p className="text-[1.3rem]">
                    <span className="font-bold text-slate-600">
                      Active Requests:
                    </span>{" "}
                    <span className="text-slate-500">
                      {pkg.details.activeRequests}
                    </span>
                  </p>
                  <p className="text-[1.3rem]">
                    <span className="font-bold text-slate-600">
                      Turnaround:
                    </span>{" "}
                    <span className="text-slate-500">
                      {pkg.details.turnaround}
                    </span>
                  </p>
                  <p className="text-[1.3rem]">
                    <span className="font-bold text-slate-600">
                      Monthly Limit:
                    </span>{" "}
                    <span className="text-slate-500">{pkg.details.limit}</span>
                  </p>
                  <p className="uppercase text-[1.2rem] font-bold pt-1">
                    {pkg.details.tierInfo}
                  </p>
                </div>

                {/* <p className="text-slate-500 text-[1rem] italic leading-relaxed border-t border-slate-200 pt-4">
                  {pkg.description}
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
