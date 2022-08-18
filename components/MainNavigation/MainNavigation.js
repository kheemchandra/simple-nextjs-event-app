import Link from 'next/link';

import classes from './MainNavigation.module.css';

function MainNavigation (props) {
  return <header className={classes.header}>
    <nav>
      <ul>
        <li className={classes.logo}><Link href="/">NextEvents</Link></li>
        <li ><Link href="/events">Browse All Events</Link></li>
      </ul>
    </nav>
  </header>
};

export default MainNavigation;