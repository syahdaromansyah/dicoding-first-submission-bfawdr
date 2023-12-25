import {
  MdOutlineArchive,
  MdOutlineDelete,
  MdOutlineUnarchive,
} from 'react-icons/md';
import { useLoaderData, useNavigate } from 'react-router-dom';
import MarkdownContent from '../../../components/MarkdownContent';
import NoteOptions from '../../../components/NoteOptions';
import {
  archiveNoteById,
  deleteNoteById,
  unArchiveNoteById,
} from '../../../utils/local-data';
import { showFormattedDate } from '../../../utils/show-formatted-date.js';
import NoteDesktopOptions from '../_route-components/NoteDesktopOptions.jsx';

export default function NoteDetailRootRoute() {
  const noteData = useLoaderData();
  const navigate = useNavigate();

  const handleArchiveNote = () => {
    archiveNoteById(noteData.id);
    navigate(`/notes/${noteData.id}`);
  };

  const handleUnArchiveNote = () => {
    unArchiveNoteById(noteData.id);
    navigate(`/notes/${noteData.id}`);
  };

  const handleDeleteNote = () => {
    deleteNoteById(noteData.id);

    if (noteData.archived) navigate('/notes/archived');
    else navigate('/');
  };

  const buttonOptions = [
    {
      icon: noteData.archived ? <MdOutlineUnarchive /> : <MdOutlineArchive />,
      text: noteData.archived ? 'Unarchive' : 'Archive',
      handleClick: noteData.archived ? handleUnArchiveNote : handleArchiveNote,
    },
    {
      icon: <MdOutlineDelete />,
      text: 'Delete',
      handleClick: handleDeleteNote,
    },
  ];

  return (
    <>
      <NoteDesktopOptions buttonOptions={buttonOptions} />

      <div className="mx-auto flex h-[calc(100vh-72px)] max-w-2xl flex-col overflow-y-auto px-4 pt-4 md:h-[calc(100vh-90px)] md:px-0 lg:max-w-4xl xl:max-w-6xl">
        <div className="mb-6 flex-none border-b-2 border-slate-300 pb-4">
          <h1 className="mb-2 font-space-grotesk text-4xl font-bold xl:mb-4 xl:text-6xl">
            {noteData.title}
          </h1>

          <p className="text-sm xl:text-base">
            <span className="inline-block rounded-md bg-indigo-100 px-2 py-1">
              Created at{' '}
              <time
                className="inline-block"
                dateTime={new Date().toISOString()}
              >
                {showFormattedDate(noteData.createdAt)}
              </time>
            </span>
          </p>
        </div>

        <div className="flex-1 pr-4">
          <MarkdownContent>{noteData.body}</MarkdownContent>
        </div>
      </div>

      <div className="fixed bottom-20 right-2 md:hidden">
        <NoteOptions buttonOptions={buttonOptions} buttonsBoardPos="top" />
      </div>
    </>
  );
}
