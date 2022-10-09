import React from 'react';
import { Draggble } from 'react-beautiful-dnd';

export const Column = ({ section }) => {
  return (
    <div>
      {section?.tasks?.map((task) => (
        <Draggble draggbleID={task.id}></Draggble>
      ))}
    </div>
  );
};
