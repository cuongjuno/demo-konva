import { Col, Row, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Text, Rect, Group } from 'react-konva';

const generatePos = (width, height, subWidth, subHeight, marginX, marginY) => {
    let result = [];
    for (let y = 0; y < height; y = y + subHeight + marginY) {
        for (let x = 0; x < width; x = x + subWidth + marginX) {
            result.push({
                x: x,
                y: y
            })
        }
    }
    return result;
}


const Demo = () => {
    const [numTable, setNumTable] = useState(0);
    const [table, setTable] = React.useState([]);

    const [stage, setStage] = useState({
        scale: 1,
        x: 0,
        y: 0
    });

    const handleWheel = (e) => {
        e.evt.preventDefault();

        const scaleBy = 1.02;
        const stage = e.target.getStage();
        const oldScale = stage.scaleX();
        const mousePointTo = {
            x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
            y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale
        };

        console.log(mousePointTo)
        const newScale = e.evt.deltaY < 0 ? oldScale * scaleBy : oldScale / scaleBy;

        setStage({
            scale: newScale,
            x: (stage.getPointerPosition().x / newScale - mousePointTo.x) * newScale,
            y: (stage.getPointerPosition().y / newScale - mousePointTo.y) * newScale
        });
    };

    const widthCanvas = 1000;
    const heightCanvas = 800;
    const widthTable = 100;
    const heightTable = 100;
    const marginTable = 50;

    const ListPosTable = generatePos(widthCanvas, heightCanvas, widthTable, heightTable, marginTable, marginTable);
    const handleDragtablet = (e) => {
        const id = e.target.id();
        setTable(
            table.map((table) => {
                return {
                    ...table,
                    isDragging: table.id === id,
                };
            })
        );
    };
    const handleDragEnd = (e) => {
        setTable(
            table.map((table) => {
                return {
                    ...table,
                    isDragging: false,
                };
            })
        );
    };

    function generateShapes() {
        return [...Array(numTable)].map((_, i) => ({
            id: i.toString(),
            x: ListPosTable[i].x,
            y: ListPosTable[i].y,
            isDragging: false,
        }));
    }

    useEffect(() => {
        const arrtable = generateShapes();
        setTable(arrtable);
    }, [numTable])

    return (
        <Row className='root-demo'>
            <Col span={4} className='controller'>
                <Button type="primary" onClick={() => setNumTable((state) => state + 1)}>Add</Button>
                {numTable}
            </Col>
            <Col span={20} className='board'>
                <Stage
                    width={widthCanvas}
                    height={heightCanvas}
                    onWheel={handleWheel}
                    scaleX={stage.scale}
                    scaleY={stage.scale}
                    x={stage.x}
                    y={stage.y}
                    stroke='black'
                >
                    <Layer>
                        {table.map((table) => (
                            <Group
                                onDragStart={handleDragtablet}
                                onDragEnd={handleDragEnd}
                                key={table.id}
                                id={table.id}
                                x={table.x}
                                y={table.y}
                                draggable
                            >
                                <Rect
                                    opacity={1}
                                    width={widthTable}
                                    height={heightTable}
                                    fill="white"
                                    shadowForStrokeEnabled={true}
                                    shadowBlur={20}
                                    shadowColor="blue"
                                    shadowOpacity={1}
                                    // shadowOffset={x : 10, y : 10}
                                    // shadowOffsetX={table.isDragging ? 10 : 5}
                                    // shadowOffsetY={table.isDragging ? 10 : 5}
                                    shadowOffsetX={0}
                                    shadowOffsetY={0}
                                    scaleX={table.isDragging ? 1.2 : 1}
                                    scaleY={table.isDragging ? 1.2 : 1}
                                    stroke='green'
                                    strokeWidth={3}
                                />
                                <Text
                                    // y={widthTable / 2.5}
                                    wrap="word"
                                    align="center"
                                    verticalAlign="middle"
                                    width={widthTable}
                                    height={heightTable}
                                    padding={5}
                                    text="hello i am junotaro "
                                    fill='black'
                                />
                            </Group>
                        ))}
                    </Layer>
                </Stage>

            </Col>
        </Row>
    );
};
export default Demo;