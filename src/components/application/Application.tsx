import { useEffect, useState } from "react";

const Application = () => {
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setDisplay(true);
        }, 1000);
    }, []);

    return (
        <>
            <h1>Job Application Form</h1>
            <h2>Apply Now!</h2>
            <p>All fields are mandatory</p>
            <span title='close'>X</span>
            <form>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' />
                </div>

                <div>
                    <label htmlFor='bio'>Bio</label>
                    <input type='text' id='bio' />
                </div>

                <div>
                    <label htmlFor='job-location'>Job Location</label>
                    <select id='job-location'>
                        <option value=''>Select a country</option>
                        <option value='US'>United States</option>
                        <option value='UK'>United Kingdom</option>
                        <option value='CA'>Canada</option>
                        <option value='IN'>India</option>
                        <option value='AU'>Australia</option>
                    </select>
                </div>

                <div>
                    <label>
                        <input type='checkbox' id='terms' />I agree to the terms
                        and conditions
                    </label>
                </div>
            </form>

            {display ? (
                <button type='submit'>Submit</button>
            ) : (
                <button type='submit' onClick={() => setDisplay(true)}>
                    Login
                </button>
            )}
        </>
    );
};

export default Application;
