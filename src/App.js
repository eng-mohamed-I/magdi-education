import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import NotFound from "./pages/notFound/notFound";
import Content from "./component/content/content";
import Contact from "./component/contact/contact";
// app routes
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="youtube" element={<Content />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
