import PropTypes from "prop-types";

export const CounterApp3 = ({value}) => {
  return (
    <>
      <h1>CounterApp</h1>
      <h2> {value} </h2>
    </>
  );
};

CounterApp3.propType = {
    value: PropTypes.number,
}
