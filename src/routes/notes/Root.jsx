import { Outlet } from 'react-router-dom';

export default function NotesRootRoute() {
  return (
    <div className="h-full">
      <Outlet />
    </div>
  );
}
