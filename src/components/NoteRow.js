import React from 'react';
import {Link} from 'react-router';

const NoteRow = (props) => {
  const {index, note} = props
  return (
    <tr>
      <td>{index}</td>
      <td>{note}</td>
      <td><Link to={`/${index}`}>Update</Link></td>
    </tr>
  );
}

export default NoteRow;