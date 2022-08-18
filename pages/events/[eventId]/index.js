import { Fragment } from 'react';
import { useRouter } from 'next/router';

import EventDetail from "../../../components/EventDetail/EventDetail";

const DUMMY_EVENTS = [
  {id: 'e1', name: 'Networking for introverts', date: 'May 30, 2021', street: 'New Wall Street 5', city: '98765 New Work', description: 'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.'},
  {id: 'e2', name: 'Networking for extroverts', date: 'April 10, 2022', street: 'My Street 12', city:  '10115 Broke City' , description: 'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.'},
  {id: 'e3', name: 'Programming for everyone', date: 'May 12, 2021', street: 'Somestreet 25', city:  '12345 San Somewhereo', description: 'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.'},
];

function EventDetailPage(props){
  const router = useRouter(); 
  const eventId = router.query.eventId;
  
  const event = DUMMY_EVENTS.find(event => event.id === eventId);
     
  return <Fragment>
    {!event && <h2 style={{fontSize: '4rem', textAlign: 'center', marginTop: '15%'}}>No such event exists!!</h2>}
    {event && <EventDetail id={event.id} name={event.name} date={event.date} street={event.street} city={event.city} description={event.description}/>}
  </Fragment>
}

export default EventDetailPage;