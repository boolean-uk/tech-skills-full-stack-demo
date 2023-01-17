import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import './App.css';
import Place from "./components/Place"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<h1>Places Directory! </h1>}/>
      <Route path="/places/:id" element={<Place />}/>
    </>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
