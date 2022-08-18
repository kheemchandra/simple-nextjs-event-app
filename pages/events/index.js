import { useState, useEffect, Fragment } from "react";
import { useRouter } from "next/router";

import EventList from "../../components/Events/EventList";
import FilterEvent from '../../components/FilterForm/FilterForm';
import FilterHead from "../../components/FilterHead/FilterHead";

const DUMMY_EVENTS = [
  {id: 'e1', name: 'Networking for introverts', date: 'May 30, 2021', street: 'New Wall Street 5', city: '98765 New Work', description: 'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.'},
  {id: 'e2', name: 'Networking for extroverts', date: 'April 10, 2022', street: 'My Street 12', city:  '10115 Broke City' , description: 'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.'},
  {id: 'e3', name: 'Programming for everyone', date: 'May 12, 2021', street: 'Somestreet 25', city:  '12345 San Somewhereo', description: 'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.'},
];


function EventsPage(){console.log('RENDERING');
  const [events, setEvents] = useState(DUMMY_EVENTS);
  const [showFilteredEvents, setShowFilteredEvents] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const router = useRouter();  

  const showAllHandler = () => { 
    setShowAll(true);
  }

  const filterHandler = (filterObj) => { 
    router.push({
      pathname: '/events',
      query: {
        year: filterObj.year,
        month: filterObj.month
      }
    })
  }
  
  useEffect(() => {
    const { year, month } = router.query;
    if(year){ 
      const filteredEvents = DUMMY_EVENTS.filter(event => {
        const dateArr = event.date.split(' ');
        return dateArr[0] === month && dateArr[2] === year; 
      }); 
      if(showAll){
        setEvents(filteredEvents);        
      }else{
        setEvents(filteredEvents.slice(0, 1));        
      }
      setShowFilteredEvents(true);
    }else{
      setShowFilteredEvents(false);
      setEvents(DUMMY_EVENTS);
      setShowAll(false);
    }
  }, [router.query, showAll]);

  return <Fragment>
    {showFilteredEvents && <FilterHead month={router.query.month} year={router.query.year} showAll={showAll} onShowAll={showAllHandler} count={events.length}/>}
    {!showFilteredEvents && <FilterEvent onFilter={filterHandler}/>}
    <EventList events={events} />
  </Fragment>
}

export default EventsPage;