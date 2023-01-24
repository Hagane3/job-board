import { createBrowserRouter, RouterProvider } from "react-router-dom";

import JobsList from "./pages/JobsList";
import Layout from "./pages/Layout";
import JobDetails from "./pages/JobDetails";
import { JobsProvider } from "./context/jobsContext";

import "./App.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <JobsList />,
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
      <JobsProvider>
        <RouterProvider router={router} />
      </JobsProvider>
    </div>
  );
}

export default App;
