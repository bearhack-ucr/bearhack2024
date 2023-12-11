import { FAQdata } from "@/data/static/FAQ";
import ToggleSelection from "./ToggleSelection";
const FAQ = () => {
  return (
    <div className="w-full h-full flex flex-col items-center bg-bear-dark">
      <div className="font-chonburi text-3xl text-white flex mb-20">FAQ</div>
      <div className="flex w-9/12 z-50 overflow-hidden flex-col">
        {FAQdata.map((faq, index) => (
          <ToggleSelection key={index} title={faq.question}>
            {faq.answer}
          </ToggleSelection>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
