import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyMoves from "./components/page/MyMoves";
import MyProfile from "./components/page/MyProfile";
import GetQuote from "./components/page/GetQuote";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <div className="w-[18%]">
          <Navigation />
        </div>
        <div className="w-[80%]">
          <Routes>
            <Route path="/" element={<MyMoves />} />
            <Route path="/profile" element={<MyProfile />} />
            <Route path="/quote" element={<GetQuote />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
