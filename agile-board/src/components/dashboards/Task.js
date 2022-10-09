import { CardContent, Typography } from '@mui/material';
import React from 'react';

export const Task = ({ task }) => {
  return (
    <CardContent>
      <Typography color="textPrimary" gutterBottom style={{ fonstSize: '1.8rem' }}>
        {task?.title}
      </Typography>
    </CardContent>
  );
};
