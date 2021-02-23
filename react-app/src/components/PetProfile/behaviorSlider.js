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
    label: "Wild",
  },
  {
    value: 5,
    label: "Obedient",
  },
];

export default function Behavior() {
  const classes = useStyles();
  const [behaved, setBehaved] = useState(1);

  const updateBehaviorLevel = (e) => {
    setBehaved(e.target.value);
  };

  return (
    <div className={classes.root}>
      <Typography gutterBottom>Pet Behavior Level</Typography>
      <Slider
        defaultValue={1}
        min={1}
        max={5}
        onChange={updateBehaviorLevel}
        valueLabelDisplay="auto"
        marks={marks}
        value={behaved}
      />
    </div>
  );
}
