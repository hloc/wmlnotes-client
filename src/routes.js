import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import NoteList from './components/NoteList';
import Note from './components/Note';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={NoteList}/>
    <Route path="edit-note" component={Note}/>
    <Route path="/:noteId" component={Note}/>
  </Route>
);
