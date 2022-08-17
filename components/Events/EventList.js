import EventItem from './EventItem';

import classes from './EventList.module.css';

const DUMMY_EVENTS = [
  {id: 'e1', name: 'Networking for introverts', date: 'May 30, 2021', street: 'New Wall Street 5', city: '98765 New Work'},
  {id: 'e2', name: 'Networking for extroverts', date: 'April 10, 2022', street: 'My Street 12', city:  '10115 Broke City'},
  {id: 'e3', name: 'Programming for everyone', date: 'May 12, 2021', street: 'Somestreet 25', city:  '12345 San Somewhereo'},
];

function EventList (props){
  return <ul className={classes['event-list']}>
    { DUMMY_EVENTS.map(event => {
      return <EventItem key={event.id} id={event.id} name={event.name} date={event.date} street={event.street} city={event.city} />
    })}
  </ul>
}

export default EventList;