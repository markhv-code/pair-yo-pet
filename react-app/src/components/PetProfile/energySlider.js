import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

const marks = [
  {
    value: 1,
    label: "Low",
  },
  {
    value: 5,
    label: "High",
  },
];

export default function Energy({setEnergy, energy}) {
    const classes = useStyles();

    const updateEnergyLevel = (e) => {
        setEnergy(e.target.value);
    }
    
    return (
      <div className={classes.root}>
        <Typography gutterBottom>Pet Energy Level</Typography>
        <Slider
          defaultValue={1}
          min={1}
          max={5}
          onChange={updateEnergyLevel}
          valueLabelDisplay="auto"
          marks={marks}
          value={energy}
          type="number"
          name="energy"
          className="energy-slider"
          step={1}
        />
      </div>
    );
}