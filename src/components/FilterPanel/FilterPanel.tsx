import { useContext } from "react";

import classes from "./FilterPanel.module.scss";
import LocationItem from "../UI/LocationItem";
import context from "../../context/jobsContext";

function FilterPanel() {
  const { worktimeToggler, locations } = useContext(context);
  return (
    <aside className={classes.aside}>
      <div className={classes.container}>
        <input type="checkbox" id="worktime" onChange={worktimeToggler} />
        <label htmlFor="worktime">Full time</label>
      </div>
      <h2>LOCATION</h2>
      <div className={classes.locations}>
        <LocationItem city="All cities" index={0} checked={true} />
        {locations.map((location: string, index: number) => {
          return (
            <LocationItem key={index + 1} city={location} index={index + 1} />
          );
        })}
      </div>
    </aside>
  );
}

export default FilterPanel;
