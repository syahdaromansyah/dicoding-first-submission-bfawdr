import PropTypes from 'prop-types';

export default function PageLayout({ children }) {
  return (
    <div className="h-screen bg-slate-100 font-inter text-slate-800">
      {children}
    </div>
  );
}

PageLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
};
