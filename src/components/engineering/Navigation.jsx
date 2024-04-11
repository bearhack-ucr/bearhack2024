import { TABS } from "@/data/engineering/Navigation";
import { SiGithub } from "react-icons/si";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="fixed top-0 z-10 flex items-center justify-between bg-[#1e4e4a] w-full text-2xl text-white py-4 px-4">
      <Link href="/engineering">Bearhack Engineering</Link>
      <div className="flex">
        {TABS.map((tab, index) => (
          <Link
            key={index}
            href={tab.link}
            className="mx-6 hover:text-white/50 duration-300"
          >
            {tab.label}
          </Link>
        ))}
        <Link
          href="https://github.com/acm-ucr/hackathon-website"
          className="mx-6 hover:text-white/50 duration-300 text-3xl"
        >
          <SiGithub />
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
