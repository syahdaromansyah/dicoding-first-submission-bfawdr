import autoBind from 'auto-bind';
import React from 'react';
import { getArchivedNotes } from '../../../utils/local-data.js';
import NoteListSection from '../../_route-components/NoteListSection/NoteListSection.jsx';

class ArchivedNotesRootRoute extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(),
    };

    autoBind(this);
  }

  handleReloadNotes() {
    this.setState(() => ({
      notes: getArchivedNotes(),
    }));
  }

  render() {
    return (
      <NoteListSection
        notes={this.state.notes}
        isActiveNotes={false}
        handleReloadNotes={this.handleReloadNotes}
      />
    );
  }
}

export default ArchivedNotesRootRoute;
