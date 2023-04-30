import "./App.css";
import LoginPage from "./Components/Routes/LoginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignupPage from "./Components/Routes/SignupPage";
import Home from "./Components/Routes/Home";
import CompleteProfile from "./Components/Routes/CompleteProfile";
import VerifyEmail from "./Components/Routes/VerifyEmail";
import Forgot from "./Components/Routes/Forgot";
import Expenses from "./Components/Routes/Expenses";

const router = createBrowserRouter([
  { path: "/", element: <LoginPage></LoginPage> },
  { path: "/signUp", element: <SignupPage></SignupPage> },
  { path: "/home", element: <Home></Home> },
  { path: "/complete", element: <CompleteProfile /> },
  {path:'/verifyemail',element:<VerifyEmail/>},
  {path:'/forgot',element:<Forgot/>},
  {path:'/expenses',element:<Expenses/>}
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
