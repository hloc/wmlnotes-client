import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link, Redirect  } from 'react-router';
import {bindActionCreators} from 'redux';
import * as noteActions from '../actions/noteActions';

class Note extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      note: {
        id: '',
        val: ''
      }
    };
    this.title = 'New Note';

    this.onNoteChange = this.onNoteChange.bind(this);
    this.onSaved = this.onSaved.bind(this);
  }

  componentDidMount() {
    const {notes, params} = this.props;
    if (params && params.noteId) {
      this.noteId = params.noteId;
      this.title = "Edit Note";
      
      if (notes) {
        this.findNoteUpdateState(notes);

      }
    }
  }

  componentWillReceiveProps(nextProps) {
    const {notes} = this.props;
    if(notes.length === 0 && nextProps.notes.length > 0) {
      this.findNoteUpdateState(nextProps.notes);
    }
  }

  findNoteUpdateState(notes) {
    const note = notes.find(note => `${note.id}` === this.noteId)
    if (note) {
      this.setState({
        note: {
          id: note.id,
          val: note.val
        }
      });
    }
  }

  onNoteChange(event) {
    const note = this.state.note;
    note.val = event.target.value;
    this.setState({note});
  }

  onSaved() {
    this.props.actions.saveNote(this.state.note, this.noteId);
    this.props.history.push('/');  
  }
  
  render() {
    const clickHandler = this.noteId ? this.onSaved : this.onCreate;
    return (
      <div>
        <h3>{this.title}</h3>
        <input type="text"
          value={this.state.note.val}
          onChange={this.onNoteChange}/>
        <input type="submit"  
          value="Save"
          onClick={this.onSaved}/>
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
