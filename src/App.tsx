
import './App.css'
import { Header } from "./components/Header";
import { Home } from "./sections/Home";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import { useThemeStore } from './stores/themeStore';
import AnimatedBackground from './components/UI/AnimatedBackground';



function App() {

  const theme = useThemeStore((s) => s.theme)

  return (

    <div className="min-h-screen w-screen text-zinc-900 dark:text-zinc-100 ">
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
