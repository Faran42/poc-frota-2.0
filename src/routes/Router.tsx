import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage";
import Login from "../pages/Login";

export default function Router() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/Home" Component={Home} />
      </Routes>
    </BrowserRouter>
  )
}

