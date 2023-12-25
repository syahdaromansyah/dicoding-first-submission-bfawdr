import { useNavigate } from 'react-router-dom';
import { addNote } from '../../../utils/local-data.js';
import AddNoteForm from './_route-components/AddNoteForm.jsx';

export default function AddNoteRootRoute() {
  const navigate = useNavigate();

  const handleSaveNote = ({ title, body }) => {
    addNote({ title, body });
    navigate(`/`);
  };

  const handleDiscardNote = () => {
    navigate('/');
  };

  return (
    <AddNoteForm
      handleSaveNote={handleSaveNote}
      handleDiscardNote={handleDiscardNote}
    />
  );
}
