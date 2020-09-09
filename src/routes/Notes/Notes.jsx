import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote, deleteNote } from '../../redux/actions/note';
import faker from 'faker';

class Notes extends Component {
  handleAddNote = () => {
    const { addNote } = this.props;

    addNote({ id: faker.random.uuid(), text: faker.lorem.words(5) });
  };
  handleDeleteNote = (id) => () => {
    const { deleteNote } = this.props;

    deleteNote(id);
  };

  render() {
    const { notes } = this.props;
    return (
      <div>
        <button onClick={this.handleAddNote}>Add Note</button>
        <ul>
          {notes.map(({ text, id }) => (
            <li key={id}>
              {text}
              <button onClick={this.handleDeleteNote(id)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ notes }, props) => ({
  notes,
});

const mapDispatchToProps = (dispatch) => ({
  addNote: (payload) => dispatch(addNote(payload)),
  deleteNote: (id) => dispatch(deleteNote(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
