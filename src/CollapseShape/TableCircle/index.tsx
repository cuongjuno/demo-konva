import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
export interface IChairProps {
    color: string;
    id: number;
}

export interface IPositionProps {
    x: number;
    y: number;
}

export interface ITableProps {
    idTable: number | string;
    shape: 'circle' | 'rectangle';
    chairs: IChairProps[];
    startTime: Date;
    endTime: Date;
    tableName: string;
    position: IPositionProps;
    tableNameColor?: string;
}
const TableCircle = (props: ITableProps) => {
    const getPercentTimeUsed = () => {
        const differenceTimeTable =
            (endTime.getTime() - startTime.getTime()) / 60000;
        const differenceWithCurrentTime =
            (new Date().getTime() - startTime.getTime()) / 60000;
        return Math.round(
            (differenceWithCurrentTime / differenceTimeTable) * 100
        );
    };
    const {
        shape,
        chairs,
        tableName,
        startTime,
        endTime,
        tableNameColor = 'rgb(69, 77, 105)',
    } = props;
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

    return (
        <div className='table-container'>
            <div className='table-wrapper'>
                <div className='table-name' style={{ color: tableNameColor }}>
                    {tableName}
                </div>
                {chairs.map((chair: IChairProps) => {
                    return (
                        <div
                            className={'chair-' + chair.id}
                            style={{ backgroundColor: chair.color }}
                        />
                    );
                })}
                <div
                    className={'table ' + (shape === 'circle' ? 'circle' : '')}
                >
                    <div className='time-remain'>
                        <div
                            className='time-used'
                            style={{
                                transform: `translateY(${
                                    100 - percentTimeUsed
                                }%)`,
                                backgroundColor: `${
                                    percentTimeUsed >= 50 ? 'red' : '#c6e3f4'
                                }`,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TableCircle;
