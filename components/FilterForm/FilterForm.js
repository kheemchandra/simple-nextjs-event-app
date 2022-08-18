import { useRef } from 'react';

import classes from './FilterForm.module.css';

function FilterEvent(props) {
  const selectedYearRef = useRef();
  const selectedMonthRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const selectedYear = selectedYearRef.current.value;
    const selectedMonth = selectedMonthRef.current.value;
    
    props.onFilter({year: selectedYear, month: selectedMonth})
  }

  return <form onSubmit={submitHandler} className={classes.filter}>
  <div>
    <label htmlFor="yearSelect">Year</label>
    <select id="yearSelect" defaultValue='2021' ref={selectedYearRef}>
      <option value="2022">2022</option>
      <option value="2021">2021</option>
      <option value="2020">2020</option>
      <option value="2019">2019</option> 
  </select>
  </div>
  <div>
    <label htmlFor="monthSelect">Month</label>
    <select id="monthSelect" ref={selectedMonthRef}>
      <option value="January">January</option>
      <option value="February">February</option>
      <option value="March">March</option>
      <option value="April">April</option>
      <option value="May">May</option>
      <option value="June">June</option>
      <option value="July">July</option>
      <option value="August">August</option>
      <option value="September">September</option>
      <option value="October">October</option>
      <option value="November">November</option>
      <option value="December">December</option>
  </select>
  </div>
  <button>Find Events</button>
</form>
}

export default FilterEvent;