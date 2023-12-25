import PropTypes from 'prop-types';
import NoteOptionButton from '../../../components/NoteOptionButton.jsx';

export default function NoteDesktopOptions({ buttonOptions }) {
  return (
    <div className="hidden items-center justify-end gap-x-2 border-b-2 border-slate-300 px-4 pb-4 pt-4 shadow-md shadow-slate-200 md:flex">
      {buttonOptions.map((buttonOption) => (
        <NoteOptionButton
          key={buttonOption.text}
          icon={buttonOption.icon}
          text={buttonOption.text}
          handleClick={buttonOption.handleClick}
        />
      ))}
    </div>
  );
}

NoteDesktopOptions.propTypes = {
  buttonOptions: PropTypes.arrayOf(
    PropTypes.exact({
      icon: PropTypes.element.isRequired,
      text: PropTypes.string.isRequired,
      handleClick: PropTypes.func.isRequired,
    }),
  ).isRequired,
};
