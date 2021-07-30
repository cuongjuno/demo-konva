import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { IChairProps, IPositionProps } from '../CollapseShape/TableCircle';
import './DeatalTable.style.scss';
import sandClock from './sand-clock.svg';

export interface IDetailTable {
    idTable: number | string;
    type?:
        | 'reserved'
        | 'inuse'
        | 'cheque'
        | 'cleaning'
        | 'available'
        | 'blocked';
    shape: 'circle' | 'rectangle' | 'square';
    chairs: IChairProps[];
    startTime: Date;
    endTime: Date;
    position: IPositionProps;
    borderColor?: string;
}

function DetailTable(props: IDetailTable) {
    const {
        idTable,
        type = 'reserved',
        chairs,
        startTime,
        endTime,
        shape,
    } = props;

    const borderColor = {
        reserved: '#CA94FF',
        inuse: '#94C5FF',
        cheque: '#FFC700',
        cleaning: '#FF9494',
        available: '#FFFFFF',
        blocked: '#C7C7C7',
    };

    const getPercentTimeUsed = () => {
        const differenceTimeTable =
            (endTime.getTime() - startTime.getTime()) / 60000;
        const differenceWithCurrentTime =
            (new Date().getTime() - startTime.getTime()) / 60000;
        return Math.round(
            (differenceWithCurrentTime / differenceTimeTable) * 100
        );
    };

    const [percentTimeUsed, setPercentTimeUsed] = useState(
        getPercentTimeUsed()
    );
    useEffect(() => {
        let idInterval: any;
        if (percentTimeUsed < 100) {
            idInterval = setInterval(() => {
                const percent = getPercentTimeUsed();
                setPercentTimeUsed(percent);
            }, 1000);
        }
        return () => clearInterval(idInterval);
    }, [percentTimeUsed]);

    const ReservedTable = () => {
        return (
            <div
                className='table-detail'
                style={{
                    borderColor: borderColor[type],
                    backgroundColor: type === 'blocked' ? '#C7C7C7' : '#FFFFFF',
                }}
            >
                <div className='table-id'>{idTable}</div>
                <div className='table-text'>Upcoming Reservations</div>
                <Row className='table-text'>
                    <Col>Savannah Nguyen</Col>
                    <Col>11:30AM</Col>
                </Row>
                <Row className='table-text'>
                    <Col>Savannah Nguyen</Col>
                    <Col>11:30AM</Col>
                </Row>
                <div className='chair-left' />
                <div className='chair-right' />
                {/* {chairs.map((chair: IChairProps) => {
                    return (
                        <div
                            className={'chair-' + chair.id}
                            style={{ backgroundColor: chair.color }}
                        />
                    );
                })} */}
            </div>
        );
    };

    const CurrentTable = () => {
        return (
            <div
                className='table-detail current-table'
                style={{ borderColor: borderColor[type] }}
            >
                <div className='table-id' style={{ marginBottom: '0' }}>
                    {idTable}
                </div>
                <div className='text'>Current Diner</div>
                <div className='table-text'>Savannah Nguyen</div>
                <Row>
                    <img src={sandClock} alt='' width='12' />
                    <div className='progess'>
                        <div
                            className='out'
                            style={{
                                transform: `translateX(${percentTimeUsed}%)`,
                            }}
                        />
                    </div>
                </Row>
                <div className='text'>Next reservation</div>
                <Row className='table-text'>
                    <Col>Savannah Nguyen</Col>
                    <Col>11:30AM</Col>
                </Row>
                <div className='chair-left' />
                <div className='chair-right' />
                {/* {chairs.map((chair: IChairProps) => {
                    return (
                        <div
                            className={'chair-' + chair.id}
                            style={{ backgroundColor: chair.color }}
                        />
                    );
                })} */}
            </div>
        );
    };

    return (
        <>
            {type === 'reserved' && <ReservedTable />}
            {['inuse', 'cheque', 'cleaning'].includes(type) && <CurrentTable />}
            {(type === 'blocked' || type === 'available') && (
                <div
                    className='table-detail'
                    style={{ backgroundColor: borderColor[type] }}
                >
                    <div className='chair-left' />
                    <div className='chair-right' />
                </div>
            )}
        </>
    );
}

export default DetailTable;
