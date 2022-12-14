import PropTypes from 'prop-types'

export const CounterApp2 = ({value}) => {
  return (
    <>
     <h1>CounterApp</h1>
     <h2> { value } </h2>
    </>
  )
}

CounterApp2.propType = {
    value: PropTypes.number,
}