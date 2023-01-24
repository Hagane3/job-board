import { useContext } from "react";
import context from "../../context/jobsContext";
import classes from "./LocationItem.module.scss";

interface Props {
  city: string;
  index: number;
  checked?: boolean;
}

function LocationItem({ city, index, checked }: Props) {
  const { setLocation } = useContext(context);
  return (
    <div className={classes.item}>
      <input
        type="radio"
        name="location"
        id={index.toString()}
        defaultChecked={checked}
        onChange={() => {
          setLocation(city);
        }}
      />
      <label htmlFor={index.toString()}>{city}</label>
    </div>
  );
}

export default LocationItem;
