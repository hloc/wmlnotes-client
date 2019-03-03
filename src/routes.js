import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import NoteList from './components/NoteList';
import EditNote from './components/EditNote';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={NoteList}/>
    <Route path="note" component={EditNote}/>
  </Route>
);
