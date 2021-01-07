import React from 'react';
import "./timeline.css";
import TimelineCard from "./TimelineCard";

const Timeline = () => {
  return (
    <>
<div className="timeline">
    
<div className="container py-5">
<h1 id="time">Timeline</h1>
<div className="row">
<div className="col-lg-7 mx-auto">
<ul className="timeline">

<TimelineCard 
date="8 Jan, 2020"
data1="Put something here 0"
data2="write whatever you want to ."/>

<TimelineCard 
date="9 Jan, 2020"
data1="Put something here 1"
data2="write whatever you want to ."/>

<TimelineCard 
date="12 Jan, 2020"
data1="Put something here 2"
data2="write whatever you want to ."/>

<TimelineCard 
date="13 Jan, 2020"
data1="Put something here 3"
data2="write whatever you want to ."/>

</ul>
</div>
</div>
</div>
</div>
    </>
  );
}

export default Timeline