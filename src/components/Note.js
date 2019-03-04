import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import * as noteActions from '../actions/noteActions';

class Note extends React.Component {
  constructor(props, context){
    super(props, context);
    if (props.params 
      && props.params.noteIndex) {
      this.noteIndex = props.params.noteIndex;
      this.title = "Edit Note";
      this.state = {
        note: {
          val: props.notes[this.noteIndex].val
        }
      };
    } else {
      // new note
      this.title = 'New Note';
      this.state = {
        note: {
          val: ''
        }
      }; 
    }

    this.onNoteChange = this.onNoteChange.bind(this);
    this.onSaved = this.onSaved.bind(this);
    this.onCreate = this.onCreate.bind(this);
  }

  onNoteChange(event) {
    const note = this.state.note;
    note.val = event.target.value;
    this.setState({note});
  }

  onSaved() {
    this.props.actions.saveNote(this.state.note, this.noteIndex);
  }

  onCreate() {
    this.props.actions.createNote(this.state.note);
  }
  
  render() {
    const clickHandler = this.noteIndex ? this.onSaved : this.onCreate;
    return (
      <div>
        <h3>{this.title}</h3>
        <input type="text"
          value={this.state.note.val}
          onChange={this.onNoteChange}/>
        <input type="submit"  
          value="Save"
          onClick={clickHandler}/>
        <Link to="/">Cancel</Link>
      </div>
    );
  }
}

Note.protoTypes = {
  note: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    notes: state.notes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(noteActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Note);
