import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
import { Home } from "./pages/Home/Home";
import { Portfolio } from "./pages/Portfolio/Portfolio";
import { Resume } from "./pages/Resume/Resume";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route>
          <Route index element={<Home />} />
          {/* <Route element={<Home />} /> */}
          <Route path='/about' element={<About />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
