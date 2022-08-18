import EventItem from './EventItem';

import classes from './EventList.module.css';



function EventList (props){ 

  if(!props.events || props.events.length === 0){
    return <h2 className={classes['no-events']}>No Events found!!!!</h2>
  }
  
  return <ul className={classes['event-list']}>
    { props.events.map(event => {
      return <EventItem key={event.id} id={event.id} name={event.name} date={event.date} street={event.street} city={event.city} />
    })}
  </ul>
}

export default EventList;