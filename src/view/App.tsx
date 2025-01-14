// page layouts
import Header from "../layouts/Header";
import Main from "../layouts/Main";
import Hero from "../layouts/Hero";
import Footer from "../layouts/Footer";
import Tools from "../layouts/Tools";
import Services from "../layouts/Services";
import Achievement from "../layouts/achievement";
import Projects from "../layouts/Projects";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <Tools />
        <Services />
        <Achievement />
      </Main>
      {/* <Projects /> */}
      <Footer />
    </>
  );
}

export default App;
