import React from 'react';
import "./contact.css";


const Contact = () => {
    return (
        <div>
            <form>
                <label>
                    Name:
    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Contact;