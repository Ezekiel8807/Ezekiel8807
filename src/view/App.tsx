// page layouts
import Header from "../layouts/Header";
import Main from "../layouts/Main";
import Hero from "../layouts/Hero";
import Footer from "../layouts/Footer";
import Tools from "../layouts/Tools";
import Services from "../layouts/Services";
import Achievement from "../layouts/Achievement";
import Projects from "../layouts/Projects";
import Contact from "../layouts/Contact";
import Testimony from "../layouts/Testimony";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <Tools />
        <Services />
        <Achievement />
        <Projects />
        <Testimony />
        <Contact />
      </Main>

      <Footer />
    </>
  );
}

export default App;
