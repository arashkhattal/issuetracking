import Searchapp from "./pages/Searchapp";
import Draw from "./pages/Draw";
import Createissue from "./pages/Createissue";
import Createpriject from "./pages/Createpriject";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projectboard from "./pages/Projectboard";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/issuetracking" element={<Projectboard />} />
          <Route path="/search" element={<Searchapp />} />
          <Route path="/side" element={<Draw />} />
          <Route path="/issues" element={<Createissue />} />
          <Route path="/projects" element={<Createpriject />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
