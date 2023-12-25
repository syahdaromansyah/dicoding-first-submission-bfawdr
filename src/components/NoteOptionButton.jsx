import PropTypes from 'prop-types';

export default function NoteOptionButton({ icon, text, handleClick }) {
  return (
    <button
      className="inline-block rounded-md px-6 py-4 font-space-grotesk font-semibold transition hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-300"
      type="button"
      onClick={handleClick}
    >
      <div className="flex items-center gap-x-2">
        <span className="text-2xl">{icon}</span> <span>{text}</span>
      </div>
    </button>
  );
}

NoteOptionButton.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
