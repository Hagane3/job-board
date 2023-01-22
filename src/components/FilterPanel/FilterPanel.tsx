import classes from "./FilterPanel.module.scss";
import LocationItem from "../UI/LocationItem";

function FilterPanel() {
  return (
    <aside className={classes.aside}>
      <div className={classes.container}>
        <input type="checkbox" id="worktime" />
        <label htmlFor="worktime">Full time</label>
      </div>
      <h2>LOCATION</h2>
      <div className={classes.locations}>
        <LocationItem city="All cities" index="0" />
        <LocationItem city="Katowice" index="1" />
        <LocationItem city="Warszawa" index="2" />
      </div>
    </aside>
  );
}

export default FilterPanel;
