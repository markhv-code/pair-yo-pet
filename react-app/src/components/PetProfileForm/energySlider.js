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
    value: 2,
    label: "",
  },
  {
    value: 3,
    label: "Medium",
  },
  {
    value: 4,
    label: "",
  },
  {
    value: 5,
    label: "High",
  },
];

export default function Energy({setEnergy, energy}) {
    const classes = useStyles();
    
    return (
      <div className={classes.root}>
        <Typography gutterBottom>Pet Energy Level</Typography>
        <Slider
          min={1}
          max={5}
          onChange={(e) => setEnergy(e.target.value)}
          valueLabelDisplay='auto'
          marks={marks}
          value={energy}
          type='number'
          name='energy'
          // className='energy-slider'
          step={1}
        />
      </div>
    );
}