import classes from './Header.module.css';

const Header = () => (
  <header className={classes.container}>
    <ul className={classes.main_nav}>
      <li><a href="">Home</a></li>
      <li><a href="">Experience</a></li>
      <li><a href="">Education</a></li>
      <li><a href="">Portfolio</a></li>
    </ul>
  </header>
);

export default Header;
