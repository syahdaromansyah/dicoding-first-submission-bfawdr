import { IoSearch } from 'react-icons/io5';
import { useSearchParams } from 'react-router-dom';

export default function SearchNoteInput() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (ev) => {
    const inputValue = ev.target.value;

    if (inputValue.trim()) {
      setSearchParams((prevParams) => ({
        ...prevParams,
        title: inputValue,
      }));
    } else {
      setSearchParams(() => ({}));
    }
  };

  return (
    <label
      className="inline-block w-full font-space-grotesk"
      htmlFor="search-note"
    >
      <div className="relative">
        <span
          className="absolute left-4 top-0 flex h-full items-center justify-center text-2xl text-slate-400"
          aria-hidden
        >
          <IoSearch />
        </span>

        <input
          className="inline-block w-full rounded border-2 border-slate-400 bg-indigo-100 py-4 pl-12 pr-2 text-lg font-semibold placeholder:text-slate-400"
          id="search-note"
          type="text"
          placeholder="Search title note"
          value={searchParams.get('title') || ''}
          onChange={handleSearch}
        />
      </div>

      <span className="sr-only">Search title note input</span>
    </label>
  );
}
