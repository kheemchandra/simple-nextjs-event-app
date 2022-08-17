import classes from './FilterEvent.module.css';

function FilterEvent(props) {
  return <form className={classes.filter}>
  <div>
    <label for="year">Year</label>
    <select id="year">
      <option value="2022">2022</option>
      <option value="2021" selected>2021</option>
      <option value="2020">2020</option>
      <option value="2019">2019</option> 
  </select>
  </div>
  <div>
    <label for="month">Month</label>
    <select id="month">
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