import "./App.css";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { LandingPage } from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Route } from "react-router-dom";
import { MyNotes } from "./screens/MyNotes/MyNotes";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* header */}
        <Header />
        <main>
          <Route path="/" component={LandingPage} exact />
          <Route path="/login" component={LoginScreen} exact />
          <Route path="/register" component={RegisterScreen} exact />
          <Route path="/mynotes" component={() => <MyNotes />} />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
