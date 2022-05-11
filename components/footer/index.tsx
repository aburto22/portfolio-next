import Svg from "../svg/";
import Form from "./form";
import styles from './styles.module.scss';

interface FooterProps {
  sidebar: boolean;
}

const Footer = ({ sidebar }: FooterProps) => {
  return (
    <footer
      className={`border-t border-gray-200 bg-gray-light dark:bg-gray-dark-bg-light dark:border-gray-primary ${
        sidebar && "md:ml-side-nav-w"
      }`}
    >
      <div className="flex flex-col items-center justify-around max-w-screen-lg mx-auto px-4">
        <Form />
        <div className="flex items-center justify-center flex-col mx-4 mb-12 relative -top-12">
          <div className="flex items-center justify-center mb-4">
            <a
              href="mailto:aburto22@gmail.com"
              aria-label="Send me an email"
              className="mx-1 hover:text-blue-hover dark:hover:text-blue-hover"
            >
              <Svg name="mail" className="w-8 h-8" />
            </a>
            <a
              href="https://github.com/aburto22"
              aria-label="My git-hub page"
              target="_blank"
              rel="noreferrer"
              className="mx-1 hover:text-blue-hover dark:hover:text-blue-hover"
            >
              <Svg name="github" className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/alejandroaburtos/"
              aria-label="My linkedin page"
              target="_blank"
              rel="noreferrer"
              className="mx-1 hover:text-blue-hover dark:hover:text-blue-hover"
            >
              <Svg name="linkedin" className="w-8 h-8" />
            </a>
            <a
              href="https://www.freecodecamp.org/aburto22"
              aria-label="My freeCodeCamp page"
              target="_blank"
              rel="noreferrer"
              className="mx-1 hover:text-blue-hover dark:hover:text-blue-hover"
            >
              <Svg name="freeCodeCamp" className="w-8 h-8" />
            </a>
          </div>
          <p className="text-xs">Created by Alejandro Aburto S.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

Footer.defaultProps = {
  sidebar: false,
};
