
import './App.css';
import LoginPage from './Components/Routes/LoginPage';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import SignupPage from './Components/Routes/SignupPage';

const router=createBrowserRouter([
  {path:'/',element:<LoginPage></LoginPage>},
  {path:'/signUp',element:<SignupPage></SignupPage>}
])
function App() {
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;