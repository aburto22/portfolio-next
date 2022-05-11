import { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import ScrollContext from '../../../context/scroll_context';

export default function ScrollLink({ name, target, setIsNavShowing }) {
  const [anchor, setAnchor] = useState(null);
  const { activateScrollingDelay } = useContext(ScrollContext);

  useEffect(() => {
    setAnchor(document.querySelector(`#${target}`));
  }, []);

  function handleClick(event) {
    event.preventDefault();
    activateScrollingDelay();
    anchor.scrollIntoView({ behavior: "smooth", block: "start" });
    if (setIsNavShowing) {
      setIsNavShowing(false);
    }
  }

  return (
    <li className="flex justify-center relative nav-link w-max mx-auto sm:mx-1">
      <div className="absolute bottom-0 h-0 w-0 border-b border-blue-hover nav-link-underline transition-all" />
      <a
        href={`#${anchor}`}
        className="p-2 border-b border-transparent hover:text-blue-hover dark:hover:text-blue-hover transition-all"
        onClick={handleClick}
      >
        {name}
      </a>
    </li>
  );
}

ScrollLink.propTypes = {
  name: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  setIsNavShowing: PropTypes.func,
};

ScrollLink.defaultProps = {
  setIsNavShowing: undefined,
};
