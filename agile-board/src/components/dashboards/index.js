import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../hooks/useStore';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Column } from './Column';

export const Dashboard = observer(() => {
  const { boards } = useStore();
  const getListStyle = () => {};
  return (
    <Box p={2}>
      <DragDropContext onDragEnd={() => {}}>
        <Grid container>
          {boards.active?.sections.map((section) => (
            <Grid item key={section.id}>
              <Paper>
                <Box p={1} display="flex" alignItems="center" justifyContent="center">
                  <Typography variant="h5">{section?.title}</Typography>
                </Box>
                <Droppable droppableId={section.id}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      style={getListStyle(snapshot.isDraggingOver)}
                      {...provided.droppableProps}
                    >
                      <Column sections={section} />
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </DragDropContext>
    </Box>
  );
});
