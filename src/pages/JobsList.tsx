import { useContext, useEffect, useState } from "react";

import Searchbar from "../components/UI/Searchbar";
import JobItem from "../components/JobItem/JobItem";
import classes from "./JobsList.module.scss";
import FilterPanel from "../components/FilterPanel/FilterPanel";
import { Oval } from "react-loader-spinner";

import context from "../context/jobsContext";

function JobsList() {
  const { filteredJobs, isLoading } = useContext(context);

  return (
    <section className={classes.jobs_list}>
      <Searchbar />
      <div className={classes.container}>
        <FilterPanel />
        {isLoading ? (
          <Oval
            height={80}
            width={80}
            color="#0068df"
            wrapperStyle={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#1E86FF"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        ) : (
          <ul>
            {filteredJobs.map((job: any, index: number) => {
              return <JobItem key={index} data={job} />;
            })}
          </ul>
        )}
      </div>
    </section>
  );
}

export default JobsList;
