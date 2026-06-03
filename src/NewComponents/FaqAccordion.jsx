import { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
const faqs = [
  {
    question: "How does Qrypton work?",
    answer:
      "Qrypton embeds a dedicated creative team into your operation on a flat monthly subscription. You submit requests, your assigned team handles execution, and work is delivered within 1 to 3 business days. No hiring cycles, no agency markups, no re-briefing strangers. Your team holds your brand guidelines, knows your visual language, and produces work exclusively for you.",
  },
  {
    question: "Who exactly is working on my brand?",
    answer:
      "You get a dedicated team matched to your plan. Every member works exclusively on your account during your subscription. Basic starts with a Graphic Designer and Account Coordinator. Standard adds a Motion Artist, UI/UX Designer, and 3D Modeller. Enterprise brings an Art Director into the lead role. Apex gives you a fully allocated team with a strategy lead on request. These are not shared resources rotating between clients. They are your team.  ",
  },
  {
    question: "Do I own the work produced?",
    answer:
      "Fully. Every asset, every file, every deliverable created for your brand is your property. No licensing fees, no usage restrictions, no asterisks. You own it outright from delivery.",
  },
  {
    question: "What kinds of work can my team handle?",
    answer:
      "Across plans, Qrypton covers social and static design, motion and animation, UI/UX, ad creatives, brand identity, AI-assisted campaign production, packaging, merch, and cinematic CGI. Basic is built for brands that need consistent static and entry-level motion output. Standard is the right fit for agencies running paid media and multi-platform campaigns. Enterprise handles advanced brand work and campaign storytelling. Apex is scoped around your full operation.",
  },
  {
    question: "How is this different from hiring in-house or using freelancers?",
    answer:
      "In-house gives you ownership but costs $4,000 to $7,000+ per month per hire, plus benefits, management time, and gaps when people leave. Freelancers are cheaper per task but inconsistent, slow to brief, and impossible to scale quickly. Qrypton gives you a dedicated team that already knows your brand, at a flat monthly rate starting at $719, with no HR overhead and no ramp-up every time a project starts. It is the output of an internal team without the operational weight of running one.",
  },
  {
    question: "Can I pause or cancel?",
    answer:
      "Yes. No long-term contracts, no lock-in. Pause or cancel whenever it makes sense for your business. Most clients who pause come back because the alternative, rebuilding brand context with a new team from scratch, costs more in time than the subscription itself.",
  },
  {
    question: "What does onboarding look like?",
    answer:
      "Once you subscribe, we schedule an onboarding call where you meet your Account Manager and the Art Director or Art Lead assigned to your account. We walk you through our process, go over your branding, and get aligned on your visual standards before anything gets made. By the end of that call, we take your first design request. No waiting period, no back-and-forth intake forms. Your team is ready to move from day one.",
  },
];

export default function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="md:w-[60%] px-4 py-10">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-[15px]"  data-aos="fade-up"
                data-aos-delay={String(index * 100)}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-8 py-8 text-left cursor-pointer"
              
            >
              <span className=" text-[1.6rem] font-[500]">{faq.question}</span>
              <p className="flex text-[1.6rem] items-center mr-4 h-fit">
                <BiPlus
                  size={18}
                  className={`bg-black text-white rounded-full transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </p>
            </button>

            <div
              className={`px-8  overflow-hidden transition-all duration-300 ease-in-out box-content ${
                activeIndex === index ? "max-h-60 pb-8" : "max-h-0"
              }`}
            >
                {<p className="text-[#6e6e6e] text-[1.4rem] leading-7 font-[500]" dangerouslySetInnerHTML={{ __html: faq.answer}}  />}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
