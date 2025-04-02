// App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ExperienceMap } from "./components/ExperienceMap"; // Add this import
import { AchievementList } from './components/AchievementList';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <ExperienceMap />
      <Projects />
      <AchievementList />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;