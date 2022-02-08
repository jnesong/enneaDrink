import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function NewEntry() {

    const navigate = useNavigate();

    const [buttonDisplay, setButtonDisplay] = useState("save");
    const [journalData, setJournalData] = useState({
      date: "",
      drink: "",
      level: null | Number,
      entry: ""
    });
  
    // useEffect(() => {
    //   fetch(baseURL + "/auth")
    //     .then((response) => {
    //       if (response.ok) {
    //         response.json().then((user) => setUser(user));
    //       }
    //     });
    //   fetch(baseURL + "/journeys")
    // }, []);
  
    // console.log(user)
  
    const handleChange = (e) => {
      setJournalData({
        ...journalData,
        [e.target.name]: e.target.value,
      });
    };
  
    function handleSubmit(e) {
      e.preventDefault()
  
      fetch("/api/journeys", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(journalData),
      }).then(response => {
        if (response.ok) {
            response.json().then((data) => console.log(data));
            setButtonDisplay("✔");
            setTimeout(() => { navigate("/journal/history") }, 900);
        } else {
            response.json().then((errors) => {
                console.error(errors);
                setButtonDisplay(errors[0] + ", please try again.");
            });
        }
    })
        .catch(err => { console.log(err.message) });
};


    return (

        <form onSubmit={handleSubmit} className="fade" >

            <div>

                <label htmlFor="date" />
                <input
                    type="date"
                    name="date"
                    value={journalData.date}
                    onChange={handleChange}
                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                />

                <label htmlFor="enneadrink" />
                <input
                    type="text"
                    placeholder="drink"
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
                    placeholder="health level"
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
                    name="entry"
                    value={journalData.entry}
                    onChange={handleChange}
                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                />

                <button className="buttonSubmit" type="submit"> {buttonDisplay} </button>


            </div>


        </form>

    )
}

export default NewEntry