import "./App.css";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { LandingPage } from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Route } from "react-router-dom";
import { MyNotes } from "./screens/MyNotes/MyNotes";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import CreateNote from "./screens/CreateNote/CreateNote";
import SingleNote from "./screens/SingleNote/SingleNote.js";
import { useState } from "react";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
function App() {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <BrowserRouter>
      <div className="App">
        {/* header */}
        <Header setSearch={setSearch} />
        <main>
          <Route path="/" component={LandingPage} exact />
          <Route path="/login" component={LoginScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/createnote" component={CreateNote} />
          <Route path="/note/:id" component={SingleNote} exact />
          <Route
            path="/mynotes"
            component={() => <MyNotes search={search} />}
          />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
