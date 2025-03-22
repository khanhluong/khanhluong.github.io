import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contract/Contract";
import Experiences from "./components/expericences/Experiences";
import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <>
      <div className='App'>
        <Header />
        <About />
        <Projects />
        <Experiences />
        <Contact />
      </div>
    </>
  );
}

export default App;
