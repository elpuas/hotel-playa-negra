"use client";

import React, { useEffect, useState, Suspense } from 'react';
import SeasonTable from './SeasonTable';
import data from '../app/data/data.json';

/**
 * Renders a wrapper component for displaying a list of seasons in a table format.
 * @returns {JSX.Element} The SeasonTableWrapper component.
 */
export default function SeasonTableClientWrapper() {

    const [seasons, setSeasons] = useState([]);

    useEffect(() => {
        setSeasons(data.seasons);
    }, [] );

    return (
        <div className="flex mx-auto">
            <Suspense fallback={<div>Loading...</div>}>
                {Array.isArray(seasons) && seasons.length > 0 ? (
                seasons.map((season, index) => (
                    <SeasonTable key={index} season={season} />
                ))
                ) : (
                <p>No seasons available</p>
                )}
            </Suspense>
        </div>
    );
};
