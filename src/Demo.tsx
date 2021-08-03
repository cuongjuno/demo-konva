
import React, { useState } from 'react';
import { useRef } from 'react';
import Draggable from 'react-draggable';
import TableCircle, { ITableProps } from './CollapseShape/TableCircle';

const Demo = () => {
    const wrapperRef = useRef(null);
    const TableConfig: ITableProps[] = [
        {
            type: "Circle",
            startTime: new Date(new Date().getTime() - 1 * 60000),
            endTime: new Date(new Date().getTime() + 1 * 60000),
            tableName: "A6",
            tableNameColor: "rgb(69, 77, 105)",
            position: {
                x: 280,
                y: 220
            },
            width: 100,
            height: 100,
            chairs: [
                {
                    id: 1,
                    color: "#4a5c6b",
                    width: 30,
                    height: 30
                },
                {
                    id: 2,
                    color: "#4a5c6b",
                    width: 30,
                    height: 30
                },
                {
                    id: 3,
                    color: "#4a5c6b",
                    width: 30,
                    height: 30
                },
                {
                    id: 4,
                    color: "#4a5c6b",
                    width: 30,
                    height: 30
                },
                {
                    id: 5,
                    color: "#4a5c6b",
                    width: 30,
                    height: 30
                },
                {
                    id: 6,
                    color: "#4a5c6b",
                    width: 30,
                    height: 30
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
                x: 41,
                y: 40
            },
            width: 100,
            height: 100,
            chairs: [
                {
                    id: 1,
                    color: "#4a5c6b",
                    width: 30,
                    height: 30
                },
                {
                    id: 2,
                    color: "#4a5c6b",
                    width: 30,
                    height: 30
                },
                {
                    id: 3,
                    color: "#4a5c6b",
                    width: 30,
                    height: 30
                },
                {
                    id: 4,
                    color: "#4a5c6b",
                    width: 30,
                    height: 30
                },
                {
                    id: 5,
                    color: "#4a5c6b",
                    width: 30,
                    height: 30
                },
            ]
        },
        {
            type: "Circle",
            startTime: new Date(new Date().getTime() - 1 * 60000),
            endTime: new Date(new Date().getTime() + 1 * 60000),
            tableName: "A3",
            tableNameColor: "rgb(69, 77, 105)",
            position: {
                x: 280,
                y: 40
            },
            width: 100,
            height: 100,
            chairs: [
                {
                    id: 1,
                    color: "#4a5c6b",
                    width: 30,
                    height: 30
                },
                {
                    id: 2,
                    color: "#4a5c6b",
                    width: 30,
                    height: 30
                },
                {
                    id: 3,
                    color: "#4a5c6b",
                    width: 30,
                    height: 30
                },
            ]
        },
        {
            type: "Circle",
            startTime: new Date(new Date().getTime() - 1 * 60000),
            endTime: new Date(new Date().getTime() + 1 * 60000),
            tableName: "A4",
            tableNameColor: "rgb(69, 77, 105)",
            position: {
                x: 535,
                y: 40
            },
            width: 100,
            height: 100,
            chairs: [
                {
                    id: 1,
                    color: "#4a5c6b",
                    width: 30,
                    height: 30
                },
                {
                    id: 2,
                    color: "#4a5c6b",
                    width: 30,
                    height: 30
                },
                {
                    id: 3,
                    color: "#4a5c6b",
                    width: 30,
                    height: 30
                },
                {
                    id: 4,
                    color: "#4a5c6b",
                    width: 30,
                    height: 30
                },
            ]
        },
        {
            type: "Circle",
            startTime: new Date(new Date().getTime() - 1 * 60000),
            endTime: new Date(new Date().getTime() + 1 * 60000),
            tableName: "A1",
            tableNameColor: "rgb(69, 77, 105)",
            position: {
                x: 41,
                y: 220
            },
            width: 100,
            height: 100,
            chairs: [
                {
                    id: 1,
                    color: "#4a5c6b",
                    width: 30,
                    height: 30
                },
            ]
        },
        {
            type: "Circle",
            startTime: new Date(new Date().getTime() - 1 * 60000),
            endTime: new Date(new Date().getTime() + 1 * 60000),
            tableName: "A2",
            tableNameColor: "rgb(69, 77, 105)",
            position: {
                x: 535,
                y: 220
            },
            width: 100,
            height: 100,
            chairs: [
                {
                    id: 1,
                    color: "#4a5c6b",
                    width: 30,
                    height: 30
                },
                {
                    id: 2,
                    color: "#4a5c6b",
                    width: 30,
                    height: 30
                },
            ]
        },
        {
            type: "Circle",
            startTime: new Date(new Date().getTime() - 1 * 60000),
            endTime: new Date(new Date().getTime() + 1 * 60000),
            tableName: "A7",
            tableNameColor: "rgb(69, 77, 105)",
            position: {
                x: 749,
                y: 40
            },
            width: 200,
            height: 200,
            chairs: [
                {
                    id: 1,
                    color: "#4a5c6b",
                    width: 30,
                    height: 30
                },
                {
                    id: 2,
                    color: "#4a5c6b",
                    width: 30,
                    height: 30
                },
                {
                    id: 3,
                    color: "#4a5c6b",
                    width: 30,
                    height: 30
                },
                {
                    id: 4,
                    color: "#4a5c6b",
                    width: 30,
                    height: 30
                },
                {
                    id: 5,
                    color: "#4a5c6b",
                    width: 30,
                    height: 30
                },
                {
                    id: 6,
                    color: "#4a5c6b",
                    width: 30,
                    height: 30
                },
                {
                    id: 7,
                    color: "#4a5c6b",
                    width: 30,
                    height: 30
                },

            ]
        },
        {
            type: "Rectangle",
            startTime: new Date(new Date().getTime() - 1 * 60000),
            endTime: new Date(new Date().getTime() + 1 * 60000),
            tableName: "A8",
            tableNameColor: "rgb(69, 77, 105)",
            position: {
                x: 749,
                y: 220
            },
            width: 200,
            height: 200,
            chairs: [
                {
                    id: 1,
                    color: "#4a5c6b",
                    width: 30,
                    height: 30
                },
                {
                    id: 2,
                    color: "#4a5c6b",
                    width: 30,
                    height: 30
                },
                {
                    id: 3,
                    color: "#4a5c6b",
                    width: 30,
                    height: 30
                },
                {
                    id: 4,
                    color: "#4a5c6b",
                    width: 30,
                    height: 30
                },
                {
                    id: 5,
                    color: "#4a5c6b",
                    width: 30,
                    height: 30
                },
                {
                    id: 6,
                    color: "#4a5c6b",
                    width: 30,
                    height: 30
                },
                {
                    id: 7,
                    color: "#4a5c6b",
                    width: 30,
                    height: 30
                },
                {
                    id: 8,
                    color: "#4a5c6b",
                    width: 30,
                    height: 30
                },
            ]
        },

    ]

    return (
        <div className="draggable-container">
            <Draggable bounds="parent">
                <div className="draggable-area" ref={wrapperRef}>
                    {
                        TableConfig.map((tableProps: ITableProps) => {
                            console.log(tableProps.position.x)
                            return (
                                <Draggable onStart={(e) => e.stopPropagation()} bounds="parent" defaultPosition={{ x: tableProps.position.x as number, y: tableProps.position.y as number }}>
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