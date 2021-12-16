import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import DeleteButton from '../components/DeleteButton';
import AuthorForm from '../components/AuthorForm';

const EditAuthor = (props) => {
    const { id, author, setAuthor } = props;
    // could have raised state, but it's more work then just doing it twice
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then((res) => {
                // set author object to Author
                setAuthor(res.data.author);
                setLoaded(true);
            })
            .catch((err) => console.log(err));
    }, [])

    const updateAuthor = (author) => {
        axios.put(`http://localhost:8000/api/author/${id}`, author)
        .then((res) => {
            // go back to list after updating author
            navigate('/author');
        })
        .catch((err) => {
            console.log(err.response.data);
            if(err.response.data.errors) {
                setErrors(err.response.data.errors);
            }
        });
    }

        return(
        <div className='col-3 offset-4'>
            <h1>Edit this Author</h1>
            <p className='text-start'><Link to={'/author'}>Home</Link></p>
            <p className='headingText text-start'>Edit this author:</p>
            {
                loaded &&
                    <AuthorForm onSubmitProp={updateAuthor} initialAuthor={author} setAuthor={setAuthor} errors={errors}/>
            }
            <div className='mt-2'>
            <DeleteButton authorId={id} successCallback={() =>navigate('/author')}/> 
            
            </div> 
            
        </div>
    )
}
export default EditAuthor;