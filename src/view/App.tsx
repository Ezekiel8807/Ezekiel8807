import Header from "../layouts/Header";
import Main from "../layouts/Main";
import Hero from "../layouts/Hero";
import Footer from "../layouts/Footer";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
      </Main>
      <Footer> footer</Footer>
    </>
  );
}

export default App;
