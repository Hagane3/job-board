import { createContext, useState, useEffect } from "react";

const JobsContext = createContext<any>([] || null);

type Props = {
  children: JSX.Element;
};

export function JobsProvider({ children }: Props) {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [location, setLocation] = useState("All cities");
  const [isFulltime, setIsFulltime] = useState(false);

  async function fetchJobs() {
    const response = await fetch(
      "https://job-board-ed857-default-rtdb.europe-west1.firebasedatabase.app/jobs_results.json"
    );
    const data = await response.json();
    setJobs(data);
    setFilteredJobs(data);
  }

  function worktimeToggler() {
    setIsFulltime(!isFulltime);
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    if (isFulltime) {
      setFilteredJobs(jobs.filter((job: any) => job.workmode === "Full time"));
    } else {
      setFilteredJobs(jobs);
    }
  }, [isFulltime, location]);

  return (
    <JobsContext.Provider
      value={{
        filteredJobs,
        location,
        isFulltime,
        setLocation,
        worktimeToggler,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
}

export default JobsContext;
