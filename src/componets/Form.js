import React, { useState } from "react";

const Form = () => {

    const [data, setData] = useState({
        number: "",
        language: ""
    });

    const handleInputChange = (event) => {
        console.log(event.target.value);
        setData({
            ...data,
            [event.target.name] : [event.target.value]
        });
    }

    const sendData = (event) => {
        event.preventDefault();
        console.log(data.number + " " + data.language);
    }

    return(
        <form onSubmit={sendData}>
            <div className="row">
                <div className="col">
                    <input 
                        name="number"
                        type="text" 
                        className="form-control" 
                        placeholder="# of top"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col">
                    <input
                        name="language" 
                        type="text" 
                        className="form-control" 
                        placeholder="language"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col">
                    <button 
                        type="submit" 
                        className="btn btn-dark"
                    >
                        Check
                    </button>    
                </div>
            </div>
        </form>
    );
}

export default Form;
