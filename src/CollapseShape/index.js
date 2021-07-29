import React from 'react';
import { Stage, Layer, Text, Rect, Group, Circle, Shape } from 'react-konva';
const CollapseShape = (props) => {
    const baseHeight = 80;
    const { percentUsed } = props;
    const getHeightShapeUsed = () => {
        return baseHeight * 100 / percentUsed;
    }
    const heightShapeUsed = getHeightShapeUsed();
    return (
        <Group>
            <Rect
                opacity={1}
                width={25}
                height={100}
                fill="#4970a2"
                shadowForStrokeEnabled={true}
                shadowBlur={0}
                shadowColor="#4970a2"
                shadowOpacity={1}
                // shadowOffset={x : 10, y : 10}
                // shadowOffsetX={table.isDragging ? 10 : 5}
                // shadowOffsetY={table.isDragging ? 10 : 5}
                shadowOffsetX={0}
                rotation={0}
                shadowOffsetY={0}
                cornerRadius={15}
                // scaleX={table.isDragging ? 1.2 : 1}
                // scaleY={table.isDragging ? 1.2 : 1}
                stroke='#4970a2'
                strokeWidth={3}
            />
            <Rect
                opacity={1}
                width={25}
                height={100}
                fill="#e7e9ea"
                shadowForStrokeEnabled={true}
                shadowBlur={0}
                shadowColor="#e7e9ea"
                shadowOpacity={1}
                // shadowOffset={x : 10, y : 10}
                // shadowOffsetX={table.isDragging ? 10 : 5}
                // shadowOffsetY={table.isDragging ? 10 : 5}
                shadowOffsetX={0}
                rotation={90}
                shadowOffsetY={0}
                cornerRadius={15}
                offsetY={62}
                offsetX={-37}
                // scaleX={table.isDragging ? 1.2 : 1}
                // scaleY={table.isDragging ? 1.2 : 1}
                stroke='#e7e9ea'
                strokeWidth={3}
                co
            />
            {/* <Rect
                opacity={1}
                width={80}
                height={80}
                x={-27}
                y={10}
                fill="red"
                shadowForStrokeEnabled={true}
                shadowBlur={0}
                shadowOpacity={1}
                shadowOffsetX={0}
                rotation={0}
                shadowOffsetY={0}
                cornerRadius={[3,3,0,0]}
                fillLinearGradientEndPointY="red"
                shadowEnabled={false}
                strokeWidth={1}
            /> */}
            <Rect
                opacity={1}
                width={80}
                height={80}
                x={-27}
                y={40}
                shadowForStrokeEnabled={true}
                shadowBlur={0}
                shadowOpacity={1}
                fillPatternOffset={30}
                fill="red"
                fillLinearGradientColorStops={[0, 'red', 1, 'yellow']}
                fillEnabled
                shadowOffsetX={0}
                rotation={0}
                shadowOffsetY={0}
                cornerRadius={[0, 0, 3, 3]}
                shadowEnabled={false}
                // scaleX={table.isDragging ? 1.2 : 1}
                // scaleY={table.isDragging ? 1.2 : 1}
                strokeWidth={1}
            />
            <Circle
                opacity={1}
                width={80}
                height={80}
                x={-27}
                y={40}
                shadowForStrokeEnabled={true}
                shadowBlur={0}
                shadowOpacity={1}
                fillPatternOffset={30}
                fill="red"
                fillLinearGradientColorStops={[0, 'red', 1, 'yellow']}
                fillEnabled
                shadowOffsetX={0}
                rotation={0}
                shadowOffsetY={0}
                cornerRadius={[0, 0, 3, 3]}
                shadowEnabled={false}
            />
            <Rect
                opacity={1}
                width={80}
                height={80}
                x={-65}
                y={40}
                shadowForStrokeEnabled={true}
                shadowBlur={0}
                shadowOpacity={1}
                fillPatternOffset={30}
                fill="black"
                fillLinearGradientColorStops={[0, 'red', 1, 'yellow']}
                fillEnabled
                shadowOffsetX={0}
                rotation={0}
                shadowOffsetY={0}
                shadowEnabled={false}
                cornerRadius={50}
            />
            {/* <Text
                // y={widthTable / 2.5}
                wrap="word"
                align="center"
                verticalAlign="middle"
                width={widthTable}
                height={heightTable}
                padding={5}
                text="hello i am junotaro "
                fill='black'
                offsetX={25}
                offsetY={-10}
            /> */}
        </Group>
    );
};

export default CollapseShape;