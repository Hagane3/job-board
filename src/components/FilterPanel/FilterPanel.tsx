import { useContext } from "react";

import classes from "./FilterPanel.module.scss";
import LocationItem from "../UI/LocationItem";
import context from "../../context/jobsContext";

function FilterPanel() {
  const { worktimeToggler } = useContext(context);
  return (
    <aside className={classes.aside}>
      <div className={classes.container}>
        <input type="checkbox" id="worktime" onChange={worktimeToggler} />
        <label htmlFor="worktime">Full time</label>
      </div>
      <h2>LOCATION</h2>
      <form className={classes.locations}>
        <LocationItem city="All cities" index="0" />
        <LocationItem city="Katowice" index="1" />
        <LocationItem city="Warszawa" index="2" />
      </form>
    </aside>
  );
}

export default FilterPanel;
