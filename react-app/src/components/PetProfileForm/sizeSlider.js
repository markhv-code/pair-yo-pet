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
    label: "Small",
  },
  {
    value: 2,
    label: "Medium",
  },
  {
    value: 3,
    label: "Large",
  },
];

export default function Size({setSize, size}) {
  const classes = useStyles();

  const updateSizeLevel = (e) => {
    setSize(e.target.value);
  };

  return (
    <div className={classes.root}>
      <Typography gutterBottom>Pet Size</Typography>
      <Slider
        defaultValue={1}
        min={1}
        max={3}
        onChange={updateSizeLevel}
        valueLabelDisplay="auto"
        marks={marks}
        value={size}
        type="number"
        name="size"
        className="size-slider"
        step={1}
      />
    </div>
  );
}
