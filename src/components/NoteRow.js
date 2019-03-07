import React from 'react';
import {Link} from 'react-router';

const NoteRow = (props) => {
  const note = props.note;
  return (
    <tr>
      <td><Link to={`/${note.id}`}>{note.id}</Link></td>
      <td>{note.val}</td>
    </tr>
  );
}

export default NoteRow;