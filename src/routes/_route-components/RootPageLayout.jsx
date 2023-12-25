import cn from 'classnames';
import PropTypes from 'prop-types';
import { HiMiniPencilSquare } from 'react-icons/hi2';
import { MdOutlineArchive, MdOutlineNotes } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import PageLayout from '/src/components/PageLayout.jsx';

export default function RootPageLayout({ children }) {
  const rootNavLinks = [
    {
      to: '/notes/add',
      icon: <HiMiniPencilSquare />,
      a11yText: 'Go to note add page',
    },
    {
      to: '/',
      icon: <MdOutlineNotes />,
      a11yText: 'Go to active notes page',
    },
    {
      to: '/notes/archived',
      icon: <MdOutlineArchive />,
      a11yText: 'Go to archived notes page',
    },
  ].map((navLinkData) => (
    <li key={navLinkData.to} className="flex items-center justify-center">
      <NavLink
        className={({ isActive }) =>
          cn(
            'inline-block rounded-md p-4 transition hover:bg-blue-300 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-400',
            {
              'bg-blue-100 text-blue-600': isActive,
            },
          )
        }
        to={navLinkData.to}
      >
        {navLinkData.icon}
        <span className="sr-only">{navLinkData.a11yText}</span>
      </NavLink>
    </li>
  ));

  return (
    <PageLayout>
      <div className="flex h-full flex-col-reverse md:flex-row">
        <header className="flex-none">
          <nav className="bg-blue-200 py-2 md:h-full md:px-2">
            <ul className="flex items-center justify-evenly text-2xl md:flex-col md:gap-y-4 md:text-3xl">
              {rootNavLinks}
            </ul>
          </nav>
        </header>

        <div className="flex-1">
          <main className="h-full">{children}</main>
        </div>
      </div>
    </PageLayout>
  );
}

RootPageLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
};
