import autoBind from 'auto-bind';
import React from 'react';
import { getActiveNotes } from '../utils/local-data.js';
import NoteListSection from './_route-components/NoteListSection/NoteListSection.jsx';

class RootIndexRoute extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
    };

    autoBind(this);
  }

  handleReloadNotes() {
    this.setState(() => ({
      notes: getActiveNotes(),
    }));
  }

  render() {
    return (
      <NoteListSection
        notes={this.state.notes}
        isActiveNotes
        handleReloadNotes={this.handleReloadNotes}
      />
    );
  }
}

export default RootIndexRoute;
