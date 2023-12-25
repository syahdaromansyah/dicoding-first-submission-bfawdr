import MDEditor from '@uiw/react-md-editor';
import autoBind from 'auto-bind';
import cn from 'classnames';
import { Toast } from 'primereact/toast';
import PropTypes from 'prop-types';
import React from 'react';
import { FaRegTimesCircle } from 'react-icons/fa';
import { FaMarkdown, FaRegCircleCheck } from 'react-icons/fa6';
import NoteOptions from '../../../../components/NoteOptions';
import { customMDEditorComponents } from '../../../../utils/custom-components.jsx';
import NoteDesktopOptions from '../../_route-components/NoteDesktopOptions.jsx';

class AddNoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      titleNoteInputValue: '',
      bodyNoteInputValue: '',
      isDelayAddingToast: false,
    };

    this.toastRef = React.createRef();

    autoBind(this);
  }

  handleTitleInput(ev) {
    const inputValue = ev.target.value;

    this.setState(() => ({
      titleNoteInputValue: inputValue,
    }));
  }

  handleBodyInput(value) {
    this.setState(() => ({
      bodyNoteInputValue: value,
    }));
  }

  handleSaveNote() {
    const trimmedTitleValue = this.state.titleNoteInputValue.trim();

    if (
      trimmedTitleValue === '' ||
      this.state.bodyNoteInputValue.trim() === ''
    ) {
      if (this.state.isDelayAddingToast === false) {
        this.setState(() => ({
          isDelayAddingToast: true,
        }));

        this.toastRef.current.show({
          severity: 'error',
          summary: 'Hold up!',
          detail: 'Please input the title and body note',
          life: 3000,
        });

        setTimeout(() => {
          this.setState(() => ({
            isDelayAddingToast: false,
          }));
        }, 3000);
      }

      return;
    }

    this.props.handleSaveNote({
      title: trimmedTitleValue,
      body: this.state.bodyNoteInputValue,
    });
  }

  render() {
    const buttonOptions = [
      {
        icon: <FaRegCircleCheck />,
        text: 'Save',
        handleClick: this.handleSaveNote,
      },
      {
        icon: <FaRegTimesCircle />,
        text: 'Discard',
        handleClick: this.props.handleDiscardNote,
      },
    ];

    return (
      <>
        <Toast ref={this.toastRef} position="top-center" />

        <NoteDesktopOptions buttonOptions={buttonOptions} />

        <div className="mx-auto flex h-[calc(100vh-70px)] max-w-lg flex-col px-4 md:h-[calc(100vh-98px)] lg:max-w-2xl xl:max-w-[84rem]">
          <div className="mb-4 flex-none border-b-2 border-slate-300">
            <label htmlFor="title-note" className="inline-block w-full">
              <input
                id="title-note"
                className="inline-block w-full bg-transparent pb-4 pt-6 font-space-grotesk text-2xl font-bold outline-none lg:text-4xl lg:placeholder:text-4xl"
                type="text"
                placeholder="Title Note"
                value={this.state.titleNoteInputValue}
                onChange={this.handleTitleInput}
              />
              <span className="sr-only">Input title note</span>
            </label>
          </div>

          <div className="mb-2 flex-none">
            <p className="flex items-center justify-end gap-x-2">
              <span className="inline-block text-2xl">
                <FaMarkdown />
              </span>{' '}
              <span className="inline-block font-space-grotesk font-semibold">
                Markdown Supported
              </span>
            </p>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div
              className={cn(
                'h-full pb-4 md:pb-0',
                '[&_.w-md-editor-text-input]:!text-lg',
                'md:[&_.w-md-editor-text-input]:!text-xl',
                '[&_.w-md-editor-text-input]:!font-jetbrains-mono',
                '[&_.w-md-editor-text-input]:!font-semibold',
                '[&_.w-md-editor-text-pre_>_code]:!text-lg',
                'md:[&_.w-md-editor-text-pre_>_code]:!text-xl',
                '[&_.w-md-editor-text-pre_>_code]:!font-jetbrains-mono',
                '[&_.w-md-editor-text-pre_>_code]:!font-semibold',
              )}
            >
              <MDEditor
                preview="edit"
                data-color-mode="light"
                height="100%"
                value={this.state.bodyNoteInputValue}
                visibleDragbar={false}
                onChange={this.handleBodyInput}
                components={customMDEditorComponents}
              />
            </div>
          </div>
        </div>

        <div className="fixed bottom-24 right-4 md:hidden">
          <NoteOptions buttonOptions={buttonOptions} buttonsBoardPos="top" />
        </div>
      </>
    );
  }
}

export default AddNoteForm;

AddNoteForm.propTypes = {
  handleSaveNote: PropTypes.func.isRequired,
  handleDiscardNote: PropTypes.func.isRequired,
};
