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
    type: "Circle" | "Rectangle";
    chairs: IChairProps[];
    startTime: Date;
    endTime: Date;
    tableName: string;
    position: IPositionProps;
    tableNameColor: string;
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
                console.log("call")
                const percent = getPercentTimeUsed();
                setPercentTimeUsed(percent);
            }, 1000)
        }
        return () => clearInterval(idInterval);
    }, [percentTimeUsed])

    return (
        <div className="table-container">
            <div className="table-wrapper">
                <div className="table-name" style={{ color: tableNameColor }}>{tableName}</div>
                {chairs.map((chair: IChairProps) => {
                    return <div className={"chair-" + chair.id} style={{ backgroundColor: chair.color }} />
                })}
                <div className={"table " + (type === "Circle" ? "circle" : "")}>
                    <div className="time-remain" style={{ height: `${100 - percentTimeUsed}%` }}></div>
                    <div className="time-used" style={{ height: `${percentTimeUsed}%` }}></div>
                </div>
            </div>
            <div className="text"></div>
        </div>
    );
};

export default TableCircle;