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
    label: "Shy",
  },
  {
    value: 5,
    label: "Social",
  },
];

export default function Social() {
  const classes = useStyles();
   const [social, setSocial] = useState(1);

  const updateSocialLevel = (e) => {
    setSocial(e.target.value);
  };

  return (
    <div className={classes.root}>
      <Typography gutterBottom>Pet Social Level</Typography>
      <Slider
        defaultValue={1}
        min={1}
        max={5}
        onChange={updateSocialLevel}
        valueLabelDisplay="auto"
        marks={marks}
        value={social}
      />
    </div>
  );
}
