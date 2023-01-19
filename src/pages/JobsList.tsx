import Searchbar from "../components/UI/Searchbar";
import classes from "./JobsList.module.scss";

function JobsList() {
  return (
    <section className={classes.jobs_list}>
      <Searchbar />
    </section>
  );
}

export default JobsList;
