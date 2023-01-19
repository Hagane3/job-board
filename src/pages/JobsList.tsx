import { useLoaderData } from "react-router-dom";

import Searchbar from "../components/UI/Searchbar";
import JobItem from "../components/JobItem/JobItem";
import classes from "./JobsList.module.scss";

function JobsList() {
  const jobs = useLoaderData();

  return (
    <section className={classes.jobs_list}>
      <Searchbar />
      <div className={classes.container}>
        <div className={classes.filter}>
          <h1>MOCK</h1>
        </div>
        <ul>
          <JobItem />
          <JobItem />
          <JobItem />
          <JobItem />
          <JobItem />
        </ul>
      </div>
    </section>
  );
}

export default JobsList;

export async function loadJobs() {
  const response = await fetch(
    "https://job-board-ed857-default-rtdb.europe-west1.firebasedatabase.app/jobs_results.json"
  );
  const data = await response.json();
  return data;
}
