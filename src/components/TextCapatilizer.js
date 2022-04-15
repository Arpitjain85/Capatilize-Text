import React, { useState } from 'react';

export default function TextCapatilizer() {
    const [text, setText] = useState("");
   const  capatilize = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    return (
        <>
            <div className='capatlize'>
                <h1>Enter Text Below</h1>

                <div className="mb-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='enter text here' value={text} onChange={handleOnChange} rows="6"></textarea>
                </div>
                <button className="btn-btnprimary" onClick={capatilize}> Convert to Uppaercase </button>
            </div>
        </>


    )
}
