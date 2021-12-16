import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuthorList from '../components/AuthorList';

const Main = (props) => {
    const { authors, setAuthors } = props;
    const [ loaded, setLoaded ] = useState(false); 
    


    useEffect(() => {
        axios.get(`http://localhost:8000/api/author`)
            .then((res) => {
                console.log(res.data);
                setAuthors(res.data);
                setLoaded(true);
            })
            .catch((err) => console.log(err));
    }, []);
    // remove the deleted author from the front end list
    const removeFromDom = (authorId) => {
        setAuthors(authors.filter(author=>author._id !== authorId));
    }
    
    return(
        <div>
        {/* check if we've got the authors and add them and the removeFromDom to props */}
            { loaded && 
                <AuthorList authors={authors} setAuthors={setAuthors} removeFromDom={removeFromDom} /> }
        </div>

    )

}

export default Main;