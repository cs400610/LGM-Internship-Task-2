import "./Loader.css";


const Loader = ({ show }) => {
  return( 
    //   Conditional(Ternary) Operator has been used here to show the conditions.
    (show) ?
    <div className="loader"></div> : "" 
  )
}
export default Loader;