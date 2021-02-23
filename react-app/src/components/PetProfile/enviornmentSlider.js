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
    label: "Indoor",
  },
  {
    value: 2,
    label: "Outdoor",
  },
  {
    value: 3,
    label: "Both",
  },
];

export default function Enviornment() {
  const classes = useStyles();
  const [env, setEnv] = useState(1);

  const updateEnviornmentLevel = (e) => {
    setEnv(e.target.value);
  };

  return (
    <div className={classes.root}>
      <Typography gutterBottom>Pet Preferred Enviornment</Typography>
      <Slider
        defaultValue={1}
        min={1}
        max={3}
        onChange={updateEnviornmentLevel}
        valueLabelDisplay="auto"
        marks={marks}
        value={env}
      />
    </div>
  );
}
