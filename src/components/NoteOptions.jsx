import autoBind from 'auto-bind';
import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { TbDotsVertical } from 'react-icons/tb';
import NoteOptionButton from './NoteOptionButton.jsx';

class NoteOptions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showNoteOption: false,
    };

    autoBind(this);
  }

  handleShowOptions() {
    this.setState((prevState) => ({
      showNoteOption: !prevState.showNoteOption,
    }));
  }

  render() {
    return (
      <div className="relative">
        <button
          className="inline-block rounded-md border-2 border-slate-400 bg-indigo-50/80 p-2 text-2xl backdrop-blur transition focus:outline-none focus:ring focus:ring-blue-600 active:outline-none active:ring active:ring-blue-600"
          type="button"
          onClick={this.handleShowOptions}
        >
          <TbDotsVertical />
        </button>

        {this.state.showNoteOption && (
          <div
            className={cn(
              'absolute right-0 grid min-w-[220px] grid-rows-2 gap-y-2 rounded-md border-2 border-slate-400 bg-slate-50/80 p-2 font-space-grotesk text-xl font-semibold backdrop-blur',
              {
                'bottom-[calc(100%+8px)]': this.props.buttonsBoardPos === 'top',
                'top-[calc(100%+8px)]': this.props.buttonsBoardPos === 'bottom',
              },
            )}
          >
            {this.props.buttonOptions.map((buttonOption) => (
              <NoteOptionButton
                key={buttonOption.text}
                icon={buttonOption.icon}
                text={buttonOption.text}
                handleClick={buttonOption.handleClick}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default NoteOptions;

NoteOptions.propTypes = {
  buttonOptions: PropTypes.arrayOf(
    PropTypes.exact({
      icon: PropTypes.element.isRequired,
      text: PropTypes.string.isRequired,
      handleClick: PropTypes.func.isRequired,
    }),
  ).isRequired,
  buttonsBoardPos: PropTypes.oneOf(['top', 'bottom']).isRequired,
};
