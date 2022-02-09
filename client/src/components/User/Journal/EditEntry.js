import { Button, Icon, Modal } from 'semantic-ui-react'
import { useState } from 'react';

function EditEntry({ setOpen, journey, holdEdit }) {


    const [error, setError] = useState(null);
    const [journalData, setJournalData] = useState({
        date: journey.date,
        drink: journey.drink,
        level: journey.level,
        entry: journey.entry
    });


    const handleChange = (e) => {
        setJournalData({
            ...journalData,
            [e.target.name]: e.target.value,
        });
    };

    function handleSubmit(e) {
        e.preventDefault()

        fetch(`/api/journeys/${journey.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(journalData),
        }).then(r => r.json())
            .then(editedJourney => holdEdit(editedJourney))
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else { setError(err.message) };
            })
    };

    const style ={
        border: 'none',
        background: 'transparent',
        fontSize: '18px',
        fontFamily: 'Optima',
        fontWeight: 'normal',
        letterSpacing: '2px',
        color: 'black'
    }

    return (
        <>
            <Modal.Header> ✏️ 📖 🌲</Modal.Header>
            <Modal.Content image scrolling>

                <Modal.Description>

                    <form onSubmit={handleSubmit} className="fade" >

                        <div>

                            <label htmlFor="date" />
                            <input
                                type="date"
                                name="date"
                                defaultValue={journey.date}
                                value={journalData.date}
                                onChange={handleChange}
                                onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                            />

                            <label htmlFor="enneadrink" />
                            <input
                                type="text"
                                defaultValue={journey.drink}
                                name="drink"
                                value={journalData.drink}
                                onChange={handleChange}
                            />

                            <label htmlFor="level" />
                            <input
                                onKeyPress={(event) => {
                                    if (!/[1-9]/.test(event.key)) {
                                        event.preventDefault();
                                    }
                                }}
                                type="text"
                                defaultValue={journey.level}
                                name="level"
                                value={journalData.level}
                                onChange={handleChange}
                            />

                            {<br />}
                            {<br />}
                            {<br />}

                            <label htmlFor="entry" />
                            <textarea
                                className="input-entry"
                                type="text"
                                defaultValue={journey.entry}
                                name="entry"
                                value={journalData.entry}
                                onChange={handleChange}
                                onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                            />

                            <button className="buttonLogout" type="submit"> save edit </button>

                        </div>


                    </form>

                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button style={style} onClick={() => setOpen(false)} primary>
                    Close
                </Button>
            </Modal.Actions>
        </>
    )
}

export default EditEntry