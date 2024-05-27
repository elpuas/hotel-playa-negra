import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Fragment} from 'react'

/**
 * Renders a table for a specific season.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.season - The season object containing the season details.
 * @param {string} props.season.name - The name of the season.
 * @param {string} props.season.color - The background color of the season.
 * @param {Array} props.season.dates - The array of dates for the season.
 * @param {Array} props.season.rooms - The array of rooms for the season.
 * @returns {JSX.Element} The rendered SeasonTable component.
 */
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
