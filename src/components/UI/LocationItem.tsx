import classes from "./LocationItem.module.scss";

interface Props {
  city: string;
  index: string;
}

function LocationItem({ city, index }: Props) {
  return (
    <div className={classes.item}>
      <input type="radio" name="location" id={index} />
      <label htmlFor={index}>{city}</label>
    </div>
  );
}

export default LocationItem;
