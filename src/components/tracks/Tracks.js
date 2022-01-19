import React from 'react'
import TrackCard from './TrackCard'
import './Tracks.css'
const Tracks = () => {
    return (
        <div id="tracks">
            <h1 className="heading">THEMES</h1>
            <div className="track-grid">
                <TrackCard title="Education"/>
                <TrackCard title="Employability" />
                <TrackCard title="Food"/>
                <TrackCard title="Healthcare"/>
                <TrackCard title="Social Security and Awareness"/>
                <TrackCard title="Sustainable Development"/>
                <TrackCard title="Open Innovation" description=""/>
            </div>
        </div>
    )
}

export default Tracks
