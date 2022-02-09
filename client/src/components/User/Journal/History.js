import { useState, useEffect } from 'react';
import PastEntry from './PastEntry';

function History() {

    const [journalHistory, setJournalHistory] = useState([]);


    useEffect(() => {
        fetch("/api/journeys")
            .then(r => r.json())
            .then(data => setJournalHistory(data))
    }, [])

    function holdDeletedID(id){
        const updatedJournalHistory = journalHistory.filter(journey => journey.id !== id)
        setJournalHistory(updatedJournalHistory)
    }

    function holdEdit(editedJourney){
        console.log(editedJourney)
        const updatedJournalHistory = journalHistory.map(journey => {
          if (journey.id === editedJourney.id) {
            return editedJourney
          } else {
            return journey
          }
      })
      setJournalHistory(updatedJournalHistory)
    }

    const listPastEntries = journalHistory.map(journey => (
        <PastEntry
            key={journey.id}
            journey={journey}
            holdEdit={holdEdit}
            holdDeletedID={holdDeletedID}
        />
    ))

    return (
        <>
        {listPastEntries}
        </>
    )
}

export default History