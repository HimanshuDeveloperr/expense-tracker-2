import "./App.css";
import LoginPage from "./Components/Routes/LoginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignupPage from "./Components/Routes/SignupPage";
import Home from "./Components/Routes/Home";
import CompleteProfile from "./Components/Routes/CompleteProfile";
import VerifyEmail from "./Components/Routes/VerifyEmail";

const router = createBrowserRouter([
  { path: "/", element: <LoginPage></LoginPage> },
  { path: "/signUp", element: <SignupPage></SignupPage> },
  { path: "/home", element: <Home></Home> },
  { path: "/complete", element: <CompleteProfile /> },
  {path:'/verifyemail',element:<VerifyEmail/>}
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
