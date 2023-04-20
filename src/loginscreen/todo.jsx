import React from "react";
import Controlled from "./loginscreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigateComponent from "./Common/navigate";
import HomeScreen from "./homescreen";
import Tableforms from "./formslist";
import Param from "./Common/navigate";

function Todo() {
  const LoginParam = Param(Controlled);
  const HomeScreenParam = Param(HomeScreen);
  const FormListParam = Param(Tableforms);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginParam />}></Route>
          <Route path="/Controlled" element={<LoginParam />}></Route>
          <Route path="/home/:name" element={<HomeScreenParam />}></Route>
          <Route path="/formlist" element={<FormListParam />}></Route>
        </Routes>
      </Router>

      {/* <Controlled />
      <HomeScreen /> */}
    </div>
  );
}
export default Todo;
