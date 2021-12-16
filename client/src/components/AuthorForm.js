import React, { useState } from 'react';
import { Link } from '@reach/router';

const AuthorForm = (props) => {
    const { initialAuthor, onSubmitProp, errors } = props;
    const [ author, setAuthor ] = useState(initialAuthor);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({ author });
    }

    return(
        <form onSubmit={onSubmitHandler}>
            
            <div className='form-group'>
                {/* checking for errors on form so it works for both new and update */}
                {
                    errors.author ?
                    <label htmlFor='author' className='form-label text-danger fs-5 me-3'>{errors.author.message}</label>    :
                    <label htmlFor="author" className="form-label fs-3 me-3">Author</label>
                }
                <input 
                type="text"
                value={author}
                onChange={(e)=>setAuthor(e.target.value)} />
            </div>
            {/* used margin to keep submit off form input after label changes */}
            <button className='btn btn-primary mt-2' type='submit'>Submit</button>
            <Link to={`/author`} className="btn btn-info mt-2 ms-2">Cancel</Link>
        </form>
    )
}
export default AuthorForm;