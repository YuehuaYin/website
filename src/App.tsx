import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";

export const pages = [
  {
    name: "Home",
    route: "/",
    component: Home,
  },
  {
    name: "About Me",
    route: "/about",
    component: About,
  },
];

function App() {
  return (
    <Router>
      <Header />
      <Sidebar />
      <div className="mainContent">
        <Routes>
          {pages.map((page) => (
            <Route path={page.route} Component={page.component} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
