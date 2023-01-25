import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import context from "../context/jobsContext";

import classes from "./JobDetails.module.scss";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { AiOutlineClockCircle } from "react-icons/ai";

function JobDetails() {
  const navigate = useNavigate();
  const params = useParams();
  const { getDetailedJob } = useContext(context);
  const [job, setJob] = useState<any>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setJob(getDetailedJob(Number(params.jobId)));
  }, []);

  return (
    <div className={classes.job_details}>
      <aside>
        <div className={classes.page_back} onClick={() => navigate(-1)}>
          <HiOutlineArrowNarrowLeft id={classes.arrow} />
          <p>Back to search</p>
        </div>
        <div className={classes.apply}>
          <h2>HOW TO APPLY</h2>
          <p>
            Please email a copy of your resume and online portfolio to company
            adress.
          </p>
        </div>
      </aside>
      <section>
        <div className={classes.details_heading}>
          <h2>{job.title}</h2>
          <div className={classes.workmode}>
            <p>{job.workmode}</p>
          </div>
        </div>
        <div className={classes.date}>
          <AiOutlineClockCircle id={classes.clock_icon} />
          <p>{job.date}</p>
        </div>
        <div className={classes.label_details}>
          <img src={job.thumbnail} />
          <div>
            <h3>{job.company_name}</h3>
            <div className={classes.location}>
              <GiEarthAfricaEurope /> <p>{job.location}</p>
            </div>
          </div>
        </div>
        <div>
          <p className={classes.description}>{job.description}</p>
        </div>
      </section>
    </div>
  );
}

export default JobDetails;
