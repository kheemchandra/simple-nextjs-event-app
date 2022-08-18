import classes from './FilterHead.module.css';

function FilterHead(props) { 
  return <div className={classes['filter-head']}>
    <h3>Events in {props.month} {props.year}</h3>
    {(!props.showAll && props.count !== 0) && <button onClick={() => props.onShowAll()}>Show all events</button>}
  </div>
}

export default FilterHead;