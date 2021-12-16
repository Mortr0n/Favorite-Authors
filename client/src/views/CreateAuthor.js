import axios from 'axios';
import React, { useState } from 'react';
import AuthorForm from '../components/AuthorForm';
import { navigate, Link } from '@reach/router';


const CreateAuthor = (props) => {
    const { authors, setAuthors, author, setAuthor } = props;
    const [errors, setErrors ] = useState([]);

    // create an author and add it to the array of authors
    const createAuthor = (author) => {
        axios.post(`http://localhost:8000/api/author`, author)
            .then((res) =>{
                console.log(res.data);
                setAuthors([...authors, res.data]);
                navigate('/author');
            })
            .catch((err) => {
                // pushing errors to and array for display on the form
                console.log(err.response);
                if(err.response.data.errors) {
                    setErrors(err.response.data.errors);
                }
            });
    }

    return(
        <div className='col-3 offset-4'>
            <h1 >Favorite Authors</h1>
            <p className='text-start'><Link to={`/author`}>Home</Link></p>
            <p className='headingText text-start'>Add a new author:</p>
            <AuthorForm onSubmitProp={createAuthor} initialAuthor="" errors={errors} />
        </div>
    )
}
export default CreateAuthor;