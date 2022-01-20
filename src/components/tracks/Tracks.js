import React from 'react'
import TrackCard from './TrackCard'
import './Tracks.css'
import edu from '../../images/theme/edu.svg'
import employ from '../../images/theme/employ.svg'
import food from '../../images/theme/food.svg'
import health from '../../images/theme/health.svg'
import open from '../../images/theme/open.svg'
import social from '../../images/theme/social.svg'
import subs from '../../images/theme/subs.svg'

const Tracks = () => {
    const track = [
        {
            logo: `${edu}`,
        },
        {
            logo: `${employ}`,
        },
        {
            logo: `${food}`,
        },
        {
            logo: `${health}`,
        },
        {
            logo: `${open}`,
        },
        {
            logo: `${social}`,
        },
        {
            logo: `${subs}`,
        },
    ]
    return (
        <div id="tracks">
            <h1 className="heading">THEMES</h1>
            <div className="track-grid">
                <TrackCard title="Education" img={track[0].logo} />
                <TrackCard title="Employability" img={track[1].logo} />
                <TrackCard title="Food" img={track[2].logo} />
                <TrackCard title="Healthcare" img={track[3].logo} />
                <TrackCard title="Social Security and Awareness" img={track[5].logo} />
                <TrackCard title="Sustainable Development" img={track[6].logo} />
                <TrackCard title="Open Innovation" description="" img={track[4].logo} />
            </div>
        </div>
    )
}

export default Tracks
