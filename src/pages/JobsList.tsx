import { useContext, useEffect } from "react";

import Searchbar from "../components/UI/Searchbar";
import JobItem from "../components/JobItem/JobItem";
import classes from "./JobsList.module.scss";
import FilterPanel from "../components/FilterPanel/FilterPanel";

import context from "../context/jobsContext";

function JobsList() {
  const { jobs, setJobsHandler } = useContext(context);

  async function fetchJobs() {
    const response = await fetch(
      "https://job-board-ed857-default-rtdb.europe-west1.firebasedatabase.app/jobs_results.json"
    );
    const data = await response.json();
    setJobsHandler(data);
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <section className={classes.jobs_list}>
      <Searchbar />
      <div className={classes.container}>
        <FilterPanel />
        <ul>
          {jobs.map((job: any, index: number) => {
            return <JobItem key={index} data={job} />;
          })}
        </ul>
      </div>
    </section>
  );
}

export default JobsList;
