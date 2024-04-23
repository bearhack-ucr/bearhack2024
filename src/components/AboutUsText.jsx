"use client";
import { motion } from "framer-motion";

function AboutUsText() {
  return (
    <div className="flex flex-col w-4/6 md:w-5/12 lg:w-4/12 items-center gap-8 -my-24 md:-my-24">
      <motion.p
        className="font-header text-4xl md:text-5xl flex justify-center !text-center lg:!text-center -mb-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
      >
        About Us
      </motion.p>
      <motion.div
        className="h-0.5 w-11/12 bg-gray-300 rounded-full"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      />
      <motion.p
        className="font-paragraph text-base md:text-xl text-center mt-1"
        initial={{ opacity: 0, translate0: "8px" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        Welcome to Bearhack, a medical-technology-focused, in-person,
        weekend-long event brought to you by BMES (Biomedical Engineering
        Society). Bearhack invites curious minds to embark on a journey of
        learning and innovation. This event provides a unique opportunity for
        participants to choose a project of their liking and dedicate the
        weekend to exploring and building something new. Whether you&apos;re
        passionate about a specific medical technology or have been meaning to
        delve into a particular topic, Bearhack is the perfect platform for you.
        Form a team of up to 4 people to collaborate and create. The event not
        only fosters individual growth but also offers the chance to forge new
        friendships with fellow enthusiasts.
      </motion.p>
    </div>
  );
}

export default AboutUsText;
