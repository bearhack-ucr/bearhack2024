import Title from "../Title";
import AboutUs from "../AboutUs";
import Tracks from "../Tracks";
import GetInvolved from "../GetInvolved";
import Team from "../Team";
import FAQ from "../FAQ";
// import Sponsors from "../Sponsors";
import Footer from "../Footer";

const Live = () => {
  return (
    <div className="bg-bear-dark">
      <title>Bearhack 2024</title>
      <Title />
      <AboutUs />
      <Tracks />
      <GetInvolved />
      <Team />
      <FAQ />
      {/* <Sponsors /> */}
      <Footer />
    </div>
  );
};

export default Live;
