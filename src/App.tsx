
import './App.css'
import { Header } from "./components/Header";
import { Home } from "./sections/Home";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";



function App() {

  return (
    <div className="h-screen w-scree text-zinc-900">

      <Header />

      <main className="">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

    </div>
  );
}

export default App
