import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import RedirectBlankPage from "./pages/Common/RedirectBlankPage";
import RedirectBlankPageHome from "./pages/Common/RedirectBlankPageHome";
import Login from "./pages/Login/Login";
import Changepassword from "./pages/Changepassword/Changepassword";
import Signup from "./pages/Signup/Signup";
import Editprofile from "./pages/edit_profile/Editprofile";
import CarInfoSinglepage from "./pages/Single_page/CarInfoSinglepage";
import Cart from "./pages/Cart/Cart";
import BrandFilter from "./pages/Brandfilter/BrandFilter";
import Forgot from "./pages/forgotpassword/Forgot";

function App() {
  const location = useLocation();
  
  const getFlow = () => {
    var some_path = true;
    if (
      location.pathname == "/login" ||
      location.pathname == "/changepassword" ||
      location.pathname == "/signup" ||
      location.pathname == "/forgotpassword"
    ) {
      some_path = false;
    }

    if (!localStorage.getItem("MAisLogin", false)) {
      return (
        <>
          {some_path ? <Header /> : ""}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cardetails/:id" element={<CarInfoSinglepage />} />
            <Route path="*" element={<RedirectBlankPage />} />
            <Route path="/forgotpassword" element={<Forgot />} />
            <Route path="/filter/:brand" element={<BrandFilter />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </>
      );
    } else {
      return (
        <>
          {some_path ? <Header /> : ""}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forgotpassword" element={<Forgot />} />
            <Route path="/cardetails/:id" element={<CarInfoSinglepage />} />
            <Route path="/changepassword" element={<Changepassword />} />
            <Route path="/editprofile" element={<Editprofile />} />
            <Route path="/filter/:brand" element={<BrandFilter />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<RedirectBlankPageHome />} />
          </Routes>
        </>
      );
    }
  };

  return <>{getFlow()}</>;
}

export default App;
