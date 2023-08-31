import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Browse from "./pages/Browse";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

function App() {
  return (
    <>
      <div className="min-h-screen app">
        <Header />
        <RouterProvider router={appRouter} />
      </div>
      <div className="bg-overlay-custom"></div>
    </>
  );
}

export default App;
