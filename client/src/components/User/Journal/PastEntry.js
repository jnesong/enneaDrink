import { useState } from 'react';

function PastEntry( {journey} ) {

    console.log(journey)

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="collapsible">
            <button className="toggle" onClick={()=> setIsOpen(!isOpen)}> {journey.date} - {journey.drink} </button> 
            {isOpen && <div className="pastEntry"> {journey.entry} </div> }
        </div>
    )
}
 
export default PastEntry