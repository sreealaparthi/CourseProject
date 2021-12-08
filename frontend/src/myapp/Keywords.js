import React, {useCallback, useEffect, useRef, useState} from 'react';

function Keywords() {
    let [keywords, setKeywords] = useState('')

    const fetchData = useCallback(() => {
        axios({
            "method": "GET",
            "url": "https://localhost:5002/keywords"
        })
            .then((response) => {
                setKeywords(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return (
        <div >
            <h2 style={{fontSize:'30px', width:'300px'}}>
            Additional Info</h2>
            <textarea rows="50" cols="33">
                keywords
            </textarea>
        </div>
    )
}

export default Keywords;