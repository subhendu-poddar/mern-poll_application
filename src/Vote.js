import {React, useState} from 'react'

const Vote = ({ question, options, count, selected}) => {
    const [response, setResponse] = useState(options)
    return (
        <div className="Vote">
            <div className="question"> {question} </div>
            {response.map((each, index) => (
                <button 
                    key={index} 
                    className="ansBtn"
                    onClick={() => {
                        setResponse([each])
                        selected(index)
                    }}>
                    {each}
                </button>
            ))}
        </div>

    )
}

export default Vote