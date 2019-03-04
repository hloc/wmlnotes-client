import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import NoteRow from './NoteRow';

class NoteList extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  renderNoteList(){
    return (
      <table>
        <tbody>
          {this.props.notes.map((note, index) => 
            <NoteRow key={index} index={index} note={note.val}/>)
          }
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div>
        <h1>Note List here</h1>
        <Link to="edit-note">Add Note</Link>
        {this.renderNoteList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    notes: state.notes
  };
}

export default connect(mapStateToProps)(NoteList);
