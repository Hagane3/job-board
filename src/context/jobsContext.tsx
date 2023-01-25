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
  const [locations, setLocations] = useState([]);
  const [searchbarValue, setSearchbarValue] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  function filterJobs() {
    let filteredJobs = jobs;
    if (location !== "All cities") {
      filteredJobs = filteredJobs.filter(
        (item: { location: string }) => item.location === location
      );
    }
    if (isFulltime) {
      filteredJobs = filteredJobs.filter(
        (item: { workmode: string }) => item.workmode === "Full time"
      );
    }
    if (searchbarValue) {
      filteredJobs = filteredJobs.filter((item: { title: string }) =>
        item.title.toLowerCase().includes(searchbarValue.toLowerCase())
      );
    }
    setFilteredJobs(filteredJobs);
  }

  const getDetailedJob = (jobid: number) => {
    const filteredJob = jobs.filter((item: { id: number }) => {
      return item.id === jobid;
    });
    return filteredJob[0];
  };

  async function fetchJobs() {
    setIsLoading(true);
    const response = await fetch(
      "https://job-board-ed857-default-rtdb.europe-west1.firebasedatabase.app/jobs_results.json"
    );
    const data = await response.json();
    setJobs(data);
    setFilteredJobs(data);
    setLocationsHandler(data);
    setIsLoading(false);
  }

  function setLocationsHandler(array: any) {
    setLocations(
      Array.from(
        new Set(array.map((item: { location: string }) => item.location))
      )
    );
  }

  function setSearchbarValueHandler(value: string) {
    setSearchbarValue(value);
  }

  function worktimeToggler() {
    setIsFulltime(!isFulltime);
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    filterJobs();
  }, [isFulltime, location, searchbarValue]);

  return (
    <JobsContext.Provider
      value={{
        filteredJobs,
        location,
        isFulltime,
        setLocation,
        worktimeToggler,
        locations,
        setSearchbarValueHandler,
        searchbarValue,
        getDetailedJob,
        isLoading,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
}

export default JobsContext;
