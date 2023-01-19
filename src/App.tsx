import { createBrowserRouter, RouterProvider } from "react-router-dom";

import JobsList, { loadJobs } from "./pages/JobsList";
import Layout from "./pages/Layout";
import JobDetails from "./pages/JobDetails";

import "./App.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <JobsList />,
        loader: loadJobs,
      },
      {
        path: ":jobId",
        element: <JobDetails />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
