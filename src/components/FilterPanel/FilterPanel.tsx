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
      <h2
        onClick={() => {
          console.log(locations);
        }}
      >
        LOCATION
      </h2>
      <div className={classes.locations}>
        <LocationItem city="All cities" index={0} checked={true} />
        {locations.map((location: string, index: number) => {
          return (
            <LocationItem key={index + 1} city={location} index={index + 1} />
          );
        })}
        {/* <LocationItem city="Katowice" index="1" />
        <LocationItem city="Warszawa" index="2" />
        <LocationItem city="Poznań" index="3" />
        <LocationItem city="Gdańsk" index="4" /> */}
      </div>
    </aside>
  );
}

export default FilterPanel;
