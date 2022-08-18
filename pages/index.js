import EventList from "../components/Events/EventList";

const DUMMY_EVENTS = [
  {id: 'e1', name: 'Networking for introverts', date: 'May 30, 2021', street: 'New Wall Street 5', city: '98765 New Work', description: 'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.'},
  {id: 'e2', name: 'Networking for extroverts', date: 'April 10, 2022', street: 'My Street 12', city:  '10115 Broke City' , description: 'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.'}, 
];

function HomePage() {
  return <EventList events={DUMMY_EVENTS}/>  ;
}

export default HomePage;