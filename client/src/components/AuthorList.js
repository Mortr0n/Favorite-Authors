import React, { useState } from 'react';
import axios from 'axios';
import DeleteButton from './DeleteButton';
import { Link } from '@reach/router';

const AuthorList = (props) => {
    const { authors, removeFromDom } = props;


    return (
        <div className='col-3 offset-4'>
            <h1>Favorite Authors</h1>
            <p className='text-start' ><Link  to={'/author/create'}>Add an author</Link></p>
            <p className='headingText text-start'>We have quotes by:</p>
            <table className='table table-striped table-info table-hover'>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                {
                authors.map((author) => {
                    return(
                        <tr className='authorContainer' key={author._id}>
                            <td>{author.author}</td>
                            <td>
                                <Link to={`/author/edit/${author._id}`} className='btn btn-info me-3'>Edit</Link>
                                <DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)}/> 
                            </td>
                        </tr>
                    )})
                }
                </tbody>
            </table>
            
        </div>
    )

}

export default AuthorList;