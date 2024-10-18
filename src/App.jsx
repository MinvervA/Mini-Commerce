/* eslint-disable */

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import { CartPage } from "./pages/CartPage";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { NotFoundPage } from "./pages/NotFoundPage";
import { LoginPage } from "./pages/LoginPage";
import { LoginPageForm } from "./pages/LoginPageForm";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        {/* bisa juga menggunakan element tetapi pada kali ini */}
        {/* saya mencoba menggunakan Component */}
        <Route path="/" Component={HomePage} />
        <Route path="/cart" Component={CartPage} />
        <Route path="/loginForm" Component={LoginPageForm} />
        <Route path="/login" Component={LoginPage} />
        <Route path="*" Component={NotFoundPage} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
