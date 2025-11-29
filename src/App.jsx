import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/About";
import SkillsSection from "./components/Skills";
import Services from "./components/Services";
import ProjectsSection from "./components/Project";
import GetInTouch from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    
    <ThemeProvider>
      <Navbar />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <Services />
      <ProjectsSection />
      <GetInTouch />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
