import classes from "./JobItem.module.scss";

import { GiEarthAfricaEurope } from "react-icons/gi";
import { AiOutlineClockCircle } from "react-icons/ai";

function JobItem() {
  return (
    <section className={classes.job_container}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEpc2fVNvPTxy7uf-qD-4xDmuEWGEJbldY82jf&s=0" />
      <div className={classes.description}>
        <h2>Kasisto</h2>
        <h3>Front-End Software Engineer</h3>
        <div className={classes.workmode}>
          <p>Full time</p>
        </div>
        <div className={classes.location_date}>
          <div>
            <GiEarthAfricaEurope color="#b9bdcf" />
            <p>New York</p>
          </div>
          <div>
            <AiOutlineClockCircle color="#b9bdcf" />
            <p>5 days ago</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobItem;
