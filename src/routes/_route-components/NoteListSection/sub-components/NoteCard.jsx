import PropTypes from 'prop-types';
import {
  MdOutlineArchive,
  MdOutlineDelete,
  MdOutlineUnarchive,
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import MarkdownContent from '../../../../components/MarkdownContent.jsx';
import NoteOptions from '../../../../components/NoteOptions.jsx';
import {
  archiveNoteById,
  deleteNoteById,
  unArchiveNoteById,
} from '../../../../utils/local-data';
import { showFormattedDate } from '../../../../utils/show-formatted-date.js';

export default function NoteCard({
  noteData,
  isShowingActiveNotes,
  handleReloadNotes,
}) {
  const handleArchiveNote = () => {
    archiveNoteById(noteData.id);
    handleReloadNotes();
  };

  const handleUnArchiveNote = () => {
    unArchiveNoteById(noteData.id);
    handleReloadNotes();
  };

  const handleDeleteNote = () => {
    deleteNoteById(noteData.id);
    handleReloadNotes();
  };

  const buttonOptions = [
    {
      text: isShowingActiveNotes ? 'Archive' : 'Unarchive',
      icon: isShowingActiveNotes ? (
        <MdOutlineArchive />
      ) : (
        <MdOutlineUnarchive />
      ),
      handleClick: isShowingActiveNotes
        ? handleArchiveNote
        : handleUnArchiveNote,
    },
    {
      text: 'Delete',
      icon: <MdOutlineDelete />,
      handleClick: handleDeleteNote,
    },
  ];

  return (
    <article
      className="rounded border-2 border-slate-400 bg-indigo-100 px-4 py-4"
      key={noteData.id}
    >
      <div className="mb-4 flex items-center justify-between gap-x-2">
        <h2 className="flex-1 font-space-grotesk text-2xl font-bold">
          <Link
            className="inline-block max-w-xl underline md:overflow-hidden md:text-ellipsis md:whitespace-nowrap"
            title={noteData.title}
            to={`/notes/${noteData.id}`}
          >
            {noteData.title}
          </Link>
        </h2>

        <div className="flex-none">
          <NoteOptions buttonOptions={buttonOptions} buttonsBoardPos="bottom" />
        </div>
      </div>

      <div className="mb-4 h-40 max-w-full overflow-auto rounded-md bg-indigo-50 px-4 py-3 pr-2 font-inter md:h-64">
        <MarkdownContent>{noteData.body}</MarkdownContent>
      </div>

      <p className="border-t-2 border-slate-300 pt-4 text-xs md:text-sm">
        Created at{' '}
        <time dateTime={noteData.createdAt}>
          {showFormattedDate(noteData.createdAt)}
        </time>
      </p>
    </article>
  );
}

NoteCard.propTypes = {
  noteData: PropTypes.exact({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
  isShowingActiveNotes: PropTypes.bool.isRequired,
  handleReloadNotes: PropTypes.func.isRequired,
};
