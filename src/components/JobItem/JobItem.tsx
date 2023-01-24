import classes from "./JobItem.module.scss";

import { GiEarthAfricaEurope } from "react-icons/gi";
import { AiOutlineClockCircle } from "react-icons/ai";

type Props = {
  data: {
    id: number;
    company_name: string;
    description: string;
    location: string;
    title: string;
    thumbnail: string;
    date: string;
    workmode: string;
  };
};

function JobItem({ data }: Props) {
  return (
    <section
      className={classes.job_container}
      onClick={() => {
        console.log(data.id);
      }}
    >
      <img src={data.thumbnail} />
      <div className={classes.description}>
        <h2>{data.company_name}</h2>
        <h3>{data.title}</h3>
        <div className={classes.workmode}>
          <p>{data.workmode}</p>
        </div>
        <div className={classes.location_date}>
          <div>
            <GiEarthAfricaEurope color="#b9bdcf" />
            <p>{data.location}</p>
          </div>
          <div>
            <AiOutlineClockCircle color="#b9bdcf" />
            <p>{data.date}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobItem;
