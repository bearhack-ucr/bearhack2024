import Title from "../Title";
import AboutUs from "../AboutUs";
import Schedule from "../schedule/Schedule";
import Tracks from "../Tracks";
import GetInvolved from "../GetInvolved";
import Team from "../Team";
import Sponsors from "../Sponsors";
import Judges from "../Judges";
import FAQ from "../FAQ";
import Footer from "../Footer";

const Postlive = () => {
  return (
    <div className="bg-bear-dark">
      <title>Bearhack 2024</title>
      <Title />
      <AboutUs />
      <Tracks />
      <Schedule />
      <GetInvolved />
      <Team />
      <Sponsors />
      <Judges />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Postlive;
