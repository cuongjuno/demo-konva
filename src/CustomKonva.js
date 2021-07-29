import React from 'react';
import { Circle, Group, Image, Rect, Text } from 'react-konva';
import useImage from 'use-image';
import iconHourGlass from './hourglass.png'

const TYPE_STATUS = {
    UPCOMING: 'upcoming',
    CURRENT: 'current'
}

function CustomKonva(props) {
    const { x, y, type = 'upcoming', progess, borderColor } = props;
    const colorStroke = type === TYPE_STATUS.UPCOMING ? '#7C69EF' : 'red';
    const [hourGlass] = useImage(iconHourGlass)
    // const handleDragtablet = (e) => {
    //     const id = e.target.id();
    //     setTable(
    //         table.map((table) => {
    //             return {
    //                 ...table,
    //                 isDragging: table.id === id,
    //             };
    //         })
    //     );
    // };
    // const handleDragEnd = (e) => {
    //     setTable(
    //         table.map((table) => {
    //             return {
    //                 ...table,
    //                 isDragging: false,
    //             };
    //         })
    //     );
    // };

    return (
        <Group
            // onDragStart={handleDragtablet}
            // onDragEnd={handleDragEnd}
            x={x}
            y={y}
            draggable
        >
            <Circle
                width={100}
                height={100}
                fill='gray'
                x={0}
                y={100}
            />
            <Circle
                width={100}
                height={100}
                fill='gray'
                x={200}
                y={100}
            />
            <Rect
                width={200}
                height={200}
                fill="white"
                // shadowBlur={20}
                // shadowColor="blue"
                stroke={borderColor}
                strokeWidth={5}
                x={0}
                y={0}

            />
            <Text
                wrap="word"
                padding={20}
                text="102"
                fill='black'
                fontSize={32}
            />
            <Text
                wrap="word"
                y={40}
                padding={20}
                text="Current diner"
                fill='black'
                fontSize={10}
            />
            <Text
                wrap="word"
                y={60}
                padding={20}
                text="Sherlock Holmes"
                fill='black'
                fontSize={12}
            />
            <Image
                x={20}
                y={115}
                image={hourGlass}
            />
            <Rect
                x={50}
                y={120}
                width={120}
                height={10}
                stroke="#ddd"
                shadowColor="green"
                strokeWidth={3}
                cornerRadius={10}
            />
            <Rect
                x={50}
                y={120}
                width={progess * 120 / 100}
                height={10}
                fill="skyblue"
                cornerRadius={10}
            />
            <Text
                wrap="word"
                y={130}
                padding={20}
                text="Next reservation"
                fill='black'
                fontSize={10}
            />
            <Text
                wrap="word"
                y={150}
                padding={20}
                text="Savannah Nguyen"
                fill='black'
                fontSize={12}
            />
            <Text
                wrap="word"
                align="right"
                width="200"
                y={150}
                padding={20}
                text="11:00AM"
                fill='black'
                fontSize={12}
            />
        </Group>

    );
}

export default CustomKonva;