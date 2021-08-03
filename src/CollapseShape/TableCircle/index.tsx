import { Spin } from 'antd';
import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
export interface IChairProps extends IPositionProps {
    color: string;
    id: number;
    width: number;
    height: number;
}

export interface IPositionProps {
    x?: number;
    y?: number;
}

export interface ITableProps {
    type: "Circle" | "Rectangle";
    chairs: IChairProps[];
    startTime: Date;
    endTime: Date;
    tableName: string;
    position: IPositionProps;
    tableNameColor: string;
    width: number;
    height: number;
}
const TableCircle = (props: ITableProps) => {
    const getPercentTimeUsed = () => {
        const differenceTimeTable = (endTime.getTime() - startTime.getTime()) / 60000;
        const differenceWithCurrentTime = (new Date().getTime() - startTime.getTime()) / 60000;
        return Math.round((differenceWithCurrentTime / differenceTimeTable) * 100);
    }
    const { type, chairs, tableName, startTime, endTime, tableNameColor } = props;
    const [percentTimeUsed, setPercentTimeUsed] = useState(getPercentTimeUsed());
    let idInterval: any;

    useEffect(() => {
        if (percentTimeUsed < 100) {
            idInterval = setInterval(() => {
                const percent = getPercentTimeUsed();
                setPercentTimeUsed(percent);
            }, 1000)
        }
        return () => clearInterval(idInterval);
    }, [percentTimeUsed])

    useEffect(() => {
        (props.type === "Circle" || props.type === "Rectangle") && setPositionChairs();
    }, []);

    const setPositionChairs = () => {
        const { width: tableWidth, height: tableHeight } = props;
        const radius = tableWidth / 2;
        const width = tableWidth;
        const height = tableHeight;
        let angle = 0;
        const step = (2 * Math.PI) / chairs.length;
        chairs.forEach((item) => {
            const x = Math.round(width / 2 + radius * Math.cos(angle) - item.width / 2);
            const y = Math.round(height / 2 + radius * Math.sin(angle) - item.width / 2);
            item.x = x;
            item.y = y;
            angle += step;
        }
        )
    }

    return (
        <div className="table-container">
            {(chairs[0].y as number)? <div className="table-wrapper" style={{ width: props.width, height: props.height }}>
                <div className="table-name" style={{ color: tableNameColor }}>{tableName}</div>
                <div className={"table " + (type === "Circle" ? "circle" : "")}>
                    <div className="time-remain" style={{ height: `${100 - percentTimeUsed}%` }}></div>
                    <div className="time-used" style={{ height: `${percentTimeUsed}%` }}></div>
                </div>
                {chairs.map((chair: IChairProps) => {
                    return <div className="chair" style={{ backgroundColor: chair.color, left: chair.x + 'px', top: chair.y + 'px', width: chair.width, height: chair.height }} />
                })}
            </div> : <Spin />
            }
            <div className="text"></div>
        </div>
    );
};

export default TableCircle;