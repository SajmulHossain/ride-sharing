import Contact from "../Contact/Contact";
import Banner from "./Banner";
import Feedbacks from "./Feedbacks";
import HowItsWork from "./HowItsWork";
import ServiceHighlight from "./ServiceHighlight";

const Home = () => {
  return (
    <>
      <Banner />
      <HowItsWork />
      <ServiceHighlight />
      <Feedbacks />
      <Contact />
    </>
  );
};

export default Home;