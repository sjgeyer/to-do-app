import React from 'react';
import PropTypes from 'prop-types';
import NoteForm from './note-form';
import Modal from './modal/modal';

export default class NoteItem extends React.Component {
  constructer(props) {
    super()
  }
  render() {
    const { note, handleRemoveNote, handleUpdateNote } = this.props;
    const showModal = () => handleUpdateNote({ ...note, editing: true });
    const hideModal = () => handleUpdateNote({ ...note, editing: false });
    const updateAndClose = (updatedNote) => {
      handleUpdateNote({ ...updatedNote, id: note.id, editing: false });
    };

    return (
      <div>
        <li className='note-item' onDoubleClick={ showModal }>
          <button id={ note.id } onClick={ handleRemoveNote.bind(null, note) }>
            mark as complete
          </button>
          <div>
            <h3>{ note.title }</h3>
            <p>{ note.content }</p>
          </div>
        </li>
        <Modal show={ note.editing } handleClose={ hideModal }>
          {
            <h3>Editing: { note.title }</h3>
          }
          <NoteForm handleAddNote={updateAndClose} note={note}/>
        </Modal>
      </div>
    );
  }
}

NoteItem.propTypes = {
  note: PropTypes.object,
  handleRemoveNote: PropTypes.func,
  handleUpdateNote: PropTypes.func,
};
