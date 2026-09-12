
import './App.css'
import { Header } from "./components/Header";
import { Home } from "./sections/Home";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";



function App() {

  return (
    <div className="min-h-screen w-screen text-zinc-900 dark:text-zinc-100 bg-slate-50 dark:bg-[#000802]">

      <Header />

      <main>
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
