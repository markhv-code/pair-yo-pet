import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

const marks = [
  {
    value: 1,
    label: 'Wild',
  },
  {
    value: 2,
    label: '',
  },
  {
    value: 3,
    label: 'Moderate',
  },
  {
    value: 4,
    label: '',
  },
  {
    value: 5,
    label: 'Obedient',
  },
];

export default function Behavior({ setBehaved, behaved }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography gutterBottom>Pet Behavior Level</Typography>
      <Slider
        defaultValue={1}
        min={1}
        max={5}
        onChange={e => setBehaved(e.target.value)}
        valueLabelDisplay='auto'
        marks={marks}
        value={behaved}
        type='number'
        name='behaved'
        className='behavior-slider'
        step={1}
      />
    </div>
  );
}
