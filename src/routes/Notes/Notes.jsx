import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote, deleteNote, fetchNotes } from './redux/actions';
import faker from 'faker';

class Notes extends Component {
  componentDidMount() {
    const { fetchNotes } = this.props;

    fetchNotes();
  }

  handleAddNote = () => {
    const { addNote } = this.props;

    addNote({ id: faker.random.uuid(), title: faker.lorem.words(5) });
  };
  handleDeleteNote = (id) => () => {
    const { deleteNote } = this.props;

    deleteNote(id);
  };

  render() {
    const {
      notes: { loading, error, items },
    } = this.props;
    return (
      <div>
        <button disabled={loading} onClick={this.handleAddNote}>
          Add Note
        </button>
        <ul>
          {loading
            ? '...loading'
            : items.map(({ title, id }) => (
                <li key={id}>
                  {title}
                  <button onClick={this.handleDeleteNote(id)}>X</button>
                </li>
              ))}
        </ul>
        {error}
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
  fetchNotes: () => dispatch(fetchNotes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
