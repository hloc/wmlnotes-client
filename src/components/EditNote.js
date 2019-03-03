import React, {PropTypes} from 'react';

const EditNote = (props) => {
  return (
    <div>
      <h1>Edit Note</h1>
    </div>
  );
};

EditNote.protoTypes = {
  note: PropTypes.object.isRequired
};

export default EditNote;
