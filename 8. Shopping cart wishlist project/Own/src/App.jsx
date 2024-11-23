import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-full h-auto flex flex-col max-w-7xl mx-auto">
      <Header />
      <div className="w-full p-3">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
