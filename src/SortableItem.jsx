import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { styled } from '@mui/material/styles';

const Box = styled('div')(
    ({ color, transform, transition }) => `
    height: 150px;
    width: 150px;
    background-color: ${color};
    transform: ${CSS.Transform.toString(transform)};
    transition: ${transition};
    line-height: 150px;
    text-align: center;
    font-size: 10px;
    font-weight: bold;
    
    :hover {
        cursor: grab
    }

    :active {
        cursor: grabbing
    }
`
);
const SortableItem = props => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.id });

    return (
        <Box color={props.id} transition={transition} transform={transform} ref={setNodeRef} {...attributes} {...listeners}>
            {props.id}
        </Box>
    );
};

export default SortableItem;
