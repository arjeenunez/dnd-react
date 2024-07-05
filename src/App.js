import React, { useState } from 'react';
import { DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { arrayMove as dndKitArrayMove } from '@dnd-kit/sortable';
import Droppable from './Droppable';
import { styled } from '@mui/material/styles';

const Container = styled('div')`
    width: 750px;
    display: flex;
    margin: auto;
    margin-top: 20px;
`;

const Heading = styled('div')`
    margin-top: 80px;
    text-align: center;
    font-size: 3rem;
    text-decoration: underline;
`;

function App() {
    const [items, setItems] = useState(Array.from({ length: 20 }, el => RandoColor()));

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const handleDragEnd = ({ active, over }) => {
        const activeIndex = active.data.current.sortable.index; // Previous index in the array
        const overIndex = over.data.current?.sortable.index || 0; // New index in the

        setItems(items => [...arrayMove(items, activeIndex, overIndex)]);
    };

    return (
        <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
            <Heading>Sortable Random Color Boxes</Heading>
            <Container>
                <Droppable id="Palette" items={items} />
            </Container>
        </DndContext>
    );
}

export default App;

const arrayMove = (array, oldIndex, newIndex) => {
    return dndKitArrayMove(array, oldIndex, newIndex);
};

const RandoColor = () => {
    function rand() {
        return Math.floor(Math.random() * 255) + 1;
    }
    return `rgb(${rand()}, ${rand()}, ${rand()})`;
};
