import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Fragment} from 'react'

export default function SeasonTable({season}) {
    return (
        <div className="border rounded-lg overflow-hidden shadow-lg m-4 flex-1">
            <div className="text-white text-center p-4" style={{backgroundColor: season.color}}>
                <h2 className="text-2xl font-bold">{season.name}</h2>
                {season.dates.map((date, index) => (
                <p key={index}>{date}</p>
                ))}
            </div>
            <div className="grid grid-cols-3 gap-4 bg-blue-700 text-white text-center p-4">
                {season.rooms.map((room, index) => (
                <div key={index} className="font-semibold">{room.type}</div>
                ))}
            </div>
            <div className="grid grid-cols-4 gap-4 text-center p-4">
                {season.rooms[0].prices.map((_, rowIndex) => (
                <Fragment key={rowIndex}>
                    <span className="font-semibold border p-2"><FontAwesomeIcon icon={faUser} className="text-blue-700" /> x {rowIndex + 1}</span>
                    {season.rooms.map((room, colIndex) => (
                        <div key={colIndex} className="border p-2">${room.prices[rowIndex]}</div>
                    ))}
                </Fragment>
                ))}
            </div>
        </div>
    );
}
