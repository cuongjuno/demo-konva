
import React, { useState } from 'react';
import { useRef } from 'react';
import Draggable from 'react-draggable';
import TableCircle, { ITableProps } from './CollapseShape/TableCircle';

const Demo = () => {
    const wrapperRef = useRef(null);
    const TableConfig: ITableProps[] = [
        {
            type: "Rectangle",
            startTime: new Date(new Date().getTime() - 1 * 60000),
            endTime: new Date(new Date().getTime() + 1 * 60000),
            tableName: "B1",
            tableNameColor: "rgb(69, 77, 105)",
            position: {
                x: 0,
                y: 0
            },
            chairs: [
                {
                    id: 1,
                    color: "rgb(228 231 243)"
                },
                {
                    id: 3,
                    color: "rgb(228 231 243)"
                },
                {
                    id: 2,
                    color: "#4a5c6b"
                },
                {
                    id: 4,
                    color: "#4a5c6b"
                }
            ]
        },
        {
            type: "Rectangle",
            startTime: new Date(new Date().getTime() - 1 * 60000),
            endTime: new Date(new Date().getTime() + 1 * 60000),
            tableName: "B2",
            tableNameColor: "rgb(69, 77, 105)",
            position: {
                x: 175,
                y: 0
            },
            chairs: [
                {
                    id: 1,
                    color: "rgb(228 231 243)"
                },
                {
                    id: 3,
                    color: "rgb(228 231 243)"
                },
            ]
        },
        {
            type: "Rectangle",
            startTime: new Date(new Date().getTime() - 1 * 60000),
            endTime: new Date(new Date().getTime() + 1 * 60000),
            tableName: "B3",
            tableNameColor: "rgb(69, 77, 105)",
            position: {
                x: 350,
                y: 0
            },
            chairs: [
                {
                    id: 1,
                    color: "rgb(228 231 243)"
                },
                {
                    id: 4,
                    color: "#4a5c6b"
                }
            ]
        },
        {
            type: "Circle",
            startTime: new Date(new Date().getTime() - 1 * 60000),
            endTime: new Date(new Date().getTime() + 1 * 60000),
            tableName: "A5",
            tableNameColor: "rgb(69, 77, 105)",
            position: {
                x: 870,
                y: 0
            },
            chairs: [
                {
                    id: 1,
                    color: "rgb(228 231 243)"
                },
                {
                    id: 3,
                    color: "rgb(228 231 243)"
                },
                {
                    id: 2,
                    color: "#4a5c6b"
                },
                {
                    id: 4,
                    color: "#4a5c6b"
                }
            ]
        },
        {
            type: "Circle",
            startTime: new Date(new Date().getTime() - 1 * 60000),
            endTime: new Date(new Date().getTime() + 1 * 60000),
            tableName: "A7",
            tableNameColor: "rgb(69, 77, 105)",
            position: {
                x: 1060,
                y: 0
            },
            chairs: [
                {
                    id: 1,
                    color: "rgb(228 231 243)"
                },
                {
                    id: 3,
                    color: "rgb(228 231 243)"
                },
            ]
        },
        {
            type: "Circle",
            startTime: new Date(new Date().getTime() - 1 * 60000),
            endTime: new Date(new Date().getTime() + 1 * 60000),
            tableName: "A5",
            tableNameColor: "rgb(69, 77, 105)",
            position: {
                x: 1250,
                y: 0
            },
            chairs: [
                {
                    id: 2,
                    color: "#4a5c6b"
                },
                {
                    id: 4,
                    color: "#4a5c6b"
                }
            ]
        },
        {
            type: "Rectangle",
            startTime: new Date(new Date().getTime() - 1 * 60000),
            endTime: new Date(new Date().getTime() + 1 * 60000),
            tableName: "A1",
            tableNameColor: "rgb(69, 77, 105)",
            position: {
                x: 0,
                y: 315
            },
            chairs: [ 
                {
                    id: 3,
                    color: "rgb(228 231 243)"
                },
                {
                    id: 4,
                    color: "#4a5c6b"
                }
            ]
        },
        {
            type: "Rectangle",
            startTime: new Date(new Date().getTime() - 1 * 60000),
            endTime: new Date(new Date().getTime() + 1 * 60000),
            tableName: "A2",
            tableNameColor: "red",
            position: {
                x: 175,
                y: 315
            },
            chairs: [
                {
                    id: 1,
                    color: "rgb(228 231 243)"
                },
                
            ]
        },
        {
            type: "Rectangle",
            startTime: new Date(new Date().getTime() - 1 * 60000),
            endTime: new Date(new Date().getTime() + 1 * 60000),
            tableName: "A3",
            tableNameColor: "rgb(69, 77, 105)",
            position: {
                x: 350,
                y: 315
            },
            chairs: [
                {
                    id: 1,
                    color: "rgb(228 231 243)"
                },
                {
                    id: 3,
                    color: "rgb(228 231 243)"
                },
                {
                    id: 2,
                    color: "#4a5c6b"
                },
                {
                    id: 4,
                    color: "#4a5c6b"
                }
            ]
        },
        {
            type: "Circle",
            startTime: new Date(new Date().getTime() - 1 * 60000),
            endTime: new Date(new Date().getTime() + 1 * 60000),
            tableName: "A4",
            tableNameColor: "rgb(69, 77, 105)",
            position: {
                x: 870,
                y: 315
            },
            chairs: [
                {
                    id: 1,
                    color: "rgb(228 231 243)"
                },
                {
                    id: 3,
                    color: "rgb(228 231 243)"
                },
                {
                    id: 2,
                    color: "#4a5c6b"
                },
                {
                    id: 4,
                    color: "#4a5c6b"
                }
            ]
        },
        {
            type: "Circle",
            startTime: new Date(new Date().getTime() - 1 * 60000),
            endTime: new Date(new Date().getTime() + 1 * 60000),
            tableName: "A5",
            tableNameColor: "rgb(69, 77, 105)",
            position: {
                x: 1060,
                y: 315
            },
            chairs: [
                {
                    id: 2,
                    color: "rgb(228 231 243)"
                },
                {
                    id: 4,
                    color: "rgb(228 231 243)"
                },
            ]
        },
        {
            type: "Circle",
            startTime: new Date(new Date().getTime() - 1 * 60000),
            endTime: new Date(new Date().getTime() + 1 * 60000),
            tableName: "A6",
            tableNameColor: "rgb(69, 77, 105)",
            position: {
                x: 1250,
                y: 315
            },
            chairs: [
                {
                    id: 2,
                    color: "#4a5c6b"
                },
                {
                    id: 4,
                    color: "#4a5c6b"
                }
            ]
        },
        
    ]

    return (
        <div className="draggable-container">
            <Draggable bounds="parent">
                <div className="draggable-area"  ref={wrapperRef}>
                    {
                        TableConfig.map((tableProps: ITableProps) => {
                            console.log(tableProps.position.x)
                            return (
                                <Draggable onStart={(e) => e.stopPropagation()} bounds="parent" defaultPosition={{x: tableProps.position.x, y: tableProps.position.y}}>
                                    <div className="draggable-wrap"><TableCircle {...tableProps} /></div>
                                </Draggable>
                            )
                        })
                    }
                </div>
            </Draggable>
        </div>
    );
};

export default Demo;