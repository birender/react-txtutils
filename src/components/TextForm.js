import React, { useState } from 'react'
export default function TextForm(props) {

    const handleUpClick = () => {
        setTextName(text.toUpperCase()); 
        props.showAlert("Convert Into uppercase","success");
    }
    
    const handleLowerClick = () => {
        setTextName(text.toLocaleLowerCase());
        props.showAlert("Convert Into lowercase","success");
    } 
    
    const handleEmailClick = () => {
        let emailRegex = /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,}/g;
        let emailExtractor = text.match(emailRegex);   
        setEmailExtractor(emailExtractor+"");     
    } 
    
    const handleClearClick = () => {
        setTextName(``);
    }

    const handleOnChange = (event) => {
        setTextName(event.target.value);
    }
    const [text, setTextName] = useState('Enter Text Here.');
    const [extract, setEmailExtractor] = useState('');
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea onChange={handleOnChange} value={text} className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
            </div>
            <button onClick={handleUpClick} className="btn btn-primary mx-2 my-2">Convert to Uppercase</button>
            <button onClick={handleLowerClick} className="btn btn-primary mx-2 my-2">Convert to Lowercase</button>
            <button onClick={handleEmailClick} className="btn btn-primary mx-2 my-2">Email Extractor</button>
            <button onClick={handleClearClick} className="btn btn-primary mx-2 my-2">Clear</button>
        </div>    
        <div className="container mt-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").filter((element)=>{ return element.length!==0}).length} Words, {text.length} Characters</p> 
            <h2>Email Extractor</h2>
            <p>{extract}</p>
            <h2>Preview</h2>
            <p>{text}</p>           
        </div>
        </>
    )
}