import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import RootIndexRoute from './routes/Index.jsx';
import NotFoundErrorRoute from './routes/NotFoundError.jsx';
import RootRoute from './routes/Root.jsx';
import NotesRootRoute from './routes/notes/Root.jsx';
import NoteDetailRootRoute from './routes/notes/[noteid]/Root.jsx';
import AddNoteRootRoute from './routes/notes/add/Root.jsx';
import ArchivedNotesRootRoute from './routes/notes/archived/Root.jsx';
import { getNoteById } from './utils/local-data.js';

const browserRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootRoute />}
      errorElement={<NotFoundErrorRoute />}
    >
      <Route index element={<RootIndexRoute />} />
      <Route path="notes" element={<NotesRootRoute />}>
        <Route
          index
          element={null}
          loader={async () => {
            throw new Response('Not Found', { status: 404 });
          }}
        />

        <Route
          path=":noteId"
          element={<NoteDetailRootRoute />}
          loader={async ({ params }) => {
            const data = getNoteById(params.noteId);

            if (data) return data;

            throw new Response('Not Found', { status: 404 });
          }}
        />

        <Route path="add" element={<AddNoteRootRoute />} />
        <Route path="archived" element={<ArchivedNotesRootRoute />} />
      </Route>
    </Route>,
  ),
);

export default function AppRouter() {
  return <RouterProvider router={browserRouter} />;
}
