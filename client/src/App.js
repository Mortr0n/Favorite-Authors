import React, { useState } from 'react';
import './App.css';
import Main from './views/Main';
import { Router } from '@reach/router';
import CreateAuthor from './views/CreateAuthor';
import EditAuthor from './views/EditAuthor';

function App() {
  const [ authors, setAuthors ] = useState([]);
  const [ author, setAuthor ] = useState("");
  return (
    <div className="App">
      <Router>
        <Main path="/author" authors={authors} setAuthors={setAuthors} />
        <CreateAuthor path="/author/create" authors={authors} setAuthors={setAuthors} />
        <EditAuthor path="/author/edit/:id" author={author} setAuthor={setAuthor} />
      </Router>
    </div>
  );
}

export default App;
