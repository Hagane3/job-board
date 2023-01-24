import { useContext, useEffect, useState } from "react";

import Searchbar from "../components/UI/Searchbar";
import JobItem from "../components/JobItem/JobItem";
import classes from "./JobsList.module.scss";
import FilterPanel from "../components/FilterPanel/FilterPanel";

import context from "../context/jobsContext";

function JobsList() {
  const { filteredJobs } = useContext(context);

  return (
    <section className={classes.jobs_list}>
      <Searchbar />
      <div className={classes.container}>
        <FilterPanel />
        <ul>
          {filteredJobs.map((job: any, index: number) => {
            return <JobItem key={index} data={job} />;
          })}
        </ul>
      </div>
    </section>
  );
}

export default JobsList;
