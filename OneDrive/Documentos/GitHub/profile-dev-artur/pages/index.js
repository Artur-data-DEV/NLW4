import Header from "../src/components/header/Header";
import Nav from "../src/components/nav/Nav";
import About from "../src/components/about/About";
import Experience from "../src/components/experience/Experience";
import Services from "../src/components/services/Services";
import Portfolio from "../src/components/portfolio/Portfolio";
import Testimonials from "../src/components/testimonials/Testimonials";
import Contact from "../src/components/contact/Contact";
import Footer from "../src/components/footer/Footer";

import { Title, Wrapper } from "../styles/global/GlobalStyledComponents";

export default function Home() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
