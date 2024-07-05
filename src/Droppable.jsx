import { useDroppable } from '@dnd-kit/core';
import { rectSortingStrategy, SortableContext } from '@dnd-kit/sortable';
import SortableItem from './SortableItem';
import React from 'react';
import { styled } from '@mui/material/styles';

const Container = styled('div')`
    width: 750px;
    height: 600px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const Droppable = ({ id, items }) => {
    const { setNodeRef } = useDroppable({ id });

    return (
        <SortableContext id={id} items={items} strategy={rectSortingStrategy}>
            <Container ref={setNodeRef}>
                {items.map(item => (
                    <SortableItem key={item} id={item} />
                ))}
            </Container>
        </SortableContext>
    );
};

export default Droppable;
