import { useState, useEffect } from 'react';
import PastEntry from './PastEntry';

function History() {

    const [journalHistory, setJournalHistory] = useState([]);


    useEffect(() => {
        fetch("/api/journeys")
            .then(r => r.json())
            .then(data => setJournalHistory(data))
    }, [])

    console.log(journalHistory)

    const listPastEntries = journalHistory.map(journey => (
        <PastEntry
            key={journey.id}
            journey={journey}
        />
    ))

    return (
        <>
        {listPastEntries}
        </>
    )
}

export default History