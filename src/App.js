import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router/Router";

function App() {
  return (
    <div className="App w-[1440px] m-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
