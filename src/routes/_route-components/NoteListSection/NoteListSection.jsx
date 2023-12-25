import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import emptyNotesSvg from '../../../assets/empty-illustration.svg';
import NoteCard from './sub-components/NoteCard.jsx';
import SearchNoteInput from './sub-components/SearchNoteInput.jsx';

export default function NoteListSection({
  notes,
  isActiveNotes,
  handleReloadNotes,
}) {
  const [searchParams] = useSearchParams();

  const searchNotesParams = searchParams.get('title') || '';

  const filteredNotes = notes
    .filter((note) =>
      note.title
        .toLowerCase()
        .startsWith(searchNotesParams.trim().toLowerCase()),
    )
    .map((note) => (
      <NoteCard
        key={note.id}
        noteData={note}
        isShowingActiveNotes={isActiveNotes}
        handleReloadNotes={handleReloadNotes}
      />
    ));

  const printNotFoundSearchedNotes = () => {
    if (isActiveNotes)
      return (
        <span>
          <span className="font-bold">&quot;{searchNotesParams}&quot;</span>{' '}
          title note is not found
        </span>
      );

    return (
      <span>
        Archived{' '}
        <span className="font-bold">&quot;{searchNotesParams}&quot;</span> title
        note is not found
      </span>
    );
  };

  const printEmptyNotes = () => {
    if (isActiveNotes) return 'Active notes are empty';
    else return 'Archived notes are empty';
  };

  return (
    <div className="px-4 pt-4">
      <div className="mb-6">
        <SearchNoteInput />
      </div>

      <div>
        <h1 className="border-b-2 border-slate-400 pb-4 text-4xl font-bold">
          {isActiveNotes ? 'Active Notes' : 'Archived Notes'}
        </h1>

        <div className="h-[calc(100vh-228px)] w-full overflow-y-auto md:h-[calc(100vh-162px)]">
          {filteredNotes.length > 0 && (
            <div className="grid w-full grid-cols-1 gap-y-4 py-4 md:grid-cols-[repeat(auto-fill,minmax(540px,1fr))] md:gap-x-4 md:pr-2">
              {filteredNotes}
            </div>
          )}
          {filteredNotes.length === 0 && (
            <div className="h-full">
              <div className="flex h-full flex-col items-center justify-center gap-y-4">
                <img
                  src={emptyNotesSvg}
                  className="block w-60 lg:w-96"
                  alt={
                    isActiveNotes
                      ? 'Active note lists is empty'
                      : 'Archived note lists is empty'
                  }
                />

                <div className="max-w-xs md:max-w-md">
                  <p className="mx-auto w-full break-words rounded bg-blue-200 px-3 py-1 text-center text-sm lg:text-base">
                    {searchNotesParams.trim() === ''
                      ? printEmptyNotes()
                      : printNotFoundSearchedNotes()}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

NoteListSection.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
      createdAt: PropTypes.string.isRequired,
    }),
  ).isRequired,
  isActiveNotes: PropTypes.bool.isRequired,
  handleReloadNotes: PropTypes.func.isRequired,
};
