import { render } from "preact";
import { LocationProvider, Router, Route } from "preact-iso";

import { Header } from "./components/header/Header.jsx";
import { Home } from "./pages/home/Home.jsx";
import { NotFound } from "./pages/_404.jsx";
import "./style.css";
import { Footer } from "./components/footer/Footer.jsx";

export function App() {
  return (
    <LocationProvider>
      <Header />
      <main>
        <Router>
          <Route path="/" component={Home} />
          <Route default component={NotFound} />
        </Router>
      </main>
      <Footer />
    </LocationProvider>
  );
}

render(<App />, document.getElementById("app"));
