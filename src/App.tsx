import Main from "./components/main";
import Projects from "./components/projects";
import Resume from "./components/resume";
import Sidebar from "./components/sidebar";
import Work from "./components/work";

function App() {
  return (
    <div>
      <Sidebar />
      <Main />
      <Work />
      <Projects />
      <Resume />
    </div>
  );
}

export default App;
