import { Col, Row, Switch } from 'antd';
import React, { useState } from 'react';
import { useRef } from 'react';
import Draggable from 'react-draggable';
import TableCircle, { ITableProps } from './CollapseShape/TableCircle';
import DetailTable, { IDetailTable } from './DetailTable/DetailTable';

const Demo = () => {
    const wrapperRef = useRef(null);
    const [showTypeDetail, setShowTypeDetail] = useState(true);
    const TableConfig: ITableProps[] & IDetailTable[] = [
        {
            idTable: 120,
            shape: 'rectangle',
            type: 'available',
            startTime: new Date(new Date().getTime() - 0 * 60000),
            endTime: new Date(new Date().getTime() + 1 * 60000),
            tableName: 'B1',
            position: {
                x: 100,
                y: 0,
            },
            chairs: [
                {
                    id: 1,
                    color: 'rgb(228 231 243)',
                },
                {
                    id: 3,
                    color: 'rgb(228 231 243)',
                },
                {
                    id: 2,
                    color: '#4a5c6b',
                },
                {
                    id: 4,
                    color: '#4a5c6b',
                },
            ],
        },
        {
            idTable: 120,
            shape: 'rectangle',
            type: 'blocked',
            startTime: new Date(new Date().getTime() - 0 * 60000),
            endTime: new Date(new Date().getTime() + 1 * 60000),
            tableName: 'B2',
            position: {
                x: 400,
                y: 0,
            },
            chairs: [
                {
                    id: 1,
                    color: 'rgb(228 231 243)',
                },
                {
                    id: 3,
                    color: 'rgb(228 231 243)',
                },
            ],
        },
        {
            idTable: 120,
            shape: 'rectangle',
            type: 'inuse',
            startTime: new Date(new Date().getTime() - 0 * 60000),
            endTime: new Date(new Date().getTime() + 1 * 60000),
            tableName: 'B3',
            position: {
                x: 700,
                y: 0,
            },
            chairs: [
                {
                    id: 1,
                    color: 'rgb(228 231 243)',
                },
                {
                    id: 4,
                    color: '#4a5c6b',
                },
            ],
        },
        {
            idTable: 120,
            shape: 'circle',
            type: 'cheque',
            startTime: new Date(new Date().getTime() - 0 * 60000),
            endTime: new Date(new Date().getTime() + 1 * 60000),
            tableName: 'A5',
            position: {
                x: 100,
                y: 300,
            },
            chairs: [
                {
                    id: 1,
                    color: 'rgb(228 231 243)',
                },
                {
                    id: 3,
                    color: 'rgb(228 231 243)',
                },
                {
                    id: 2,
                    color: '#4a5c6b',
                },
                {
                    id: 4,
                    color: '#4a5c6b',
                },
            ],
        },
        {
            idTable: 120,
            shape: 'circle',
            type: 'cleaning',
            startTime: new Date(new Date().getTime() - 0 * 60000),
            endTime: new Date(new Date().getTime() + 1 * 60000),
            tableName: 'A7',
            position: {
                x: 400,
                y: 300,
            },
            chairs: [
                {
                    id: 1,
                    color: 'rgb(228 231 243)',
                },
                {
                    id: 3,
                    color: 'rgb(228 231 243)',
                },
            ],
        },
        {
            idTable: 120,
            shape: 'circle',
            startTime: new Date(new Date().getTime() - 0 * 60000),
            endTime: new Date(new Date().getTime() + 1 * 60000),
            tableName: 'A5',
            position: {
                x: 700,
                y: 300,
            },
            chairs: [
                {
                    id: 2,
                    color: '#4a5c6b',
                },
                {
                    id: 4,
                    color: '#4a5c6b',
                },
            ],
        },
    ];

    return (
        <Row className='big-conatainer'>
            <Col span={4} className='control'>
                <h1 style={{ marginTop: '20px' }}>Show Detail</h1>
                <Switch
                    defaultChecked
                    onChange={() => setShowTypeDetail(!showTypeDetail)}
                />
            </Col>
            <Col span={20}>
                <div className='draggable-container'>
                    <Draggable bounds='parent'>
                        <div className='draggable-area' ref={wrapperRef}>
                            {TableConfig.map((tableProps: ITableProps) => {
                                console.log(tableProps.position.x);
                                return (
                                    <Draggable
                                        onStart={(e) => e.stopPropagation()}
                                        bounds='parent'
                                        defaultPosition={{
                                            x: tableProps.position.x,
                                            y: tableProps.position.y,
                                        }}
                                    >
                                        <div className='draggable-wrap'>
                                            {showTypeDetail ? (
                                                <DetailTable {...tableProps} />
                                            ) : (
                                                <TableCircle {...tableProps} />
                                            )}
                                        </div>
                                    </Draggable>
                                );
                            })}
                        </div>
                    </Draggable>
                </div>
            </Col>
        </Row>
    );
};

export default Demo;
