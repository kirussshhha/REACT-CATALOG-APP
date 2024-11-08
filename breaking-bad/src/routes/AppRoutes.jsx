import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ListPage from "../pages/ListPage/ListPage";
import DetailPage from "../pages/DetailPage/DetailPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/list" element={<ListPage />} />
      <Route path="/details/:id" element={<DetailPage />} />
    </Routes>
  );
}

export default AppRoutes;
