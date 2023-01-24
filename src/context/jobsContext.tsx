import { createContext, useState } from "react";

const JobsContext = createContext<any>([] || null);

type Props = {
  children: JSX.Element;
};

export function JobsProvider({ children }: Props) {
  const [jobs, setJobs] = useState([]);

  function setJobsHandler(data: any) {
    setJobs(data);
  }

  return (
    <JobsContext.Provider value={{ jobs, setJobsHandler }}>
      {children}
    </JobsContext.Provider>
  );
}

export default JobsContext;
