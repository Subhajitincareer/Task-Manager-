import PropTypes from 'prop-types';

const Countcard = ({measure}) => {
  return (
    <div>
      <div className="flex flex-wrap justify-around">
        <div className="border-2 border-gray-300 p-4 rounded-lg m-4">
            <div className="text-center text-2xl font-bold">Total Tasks</div>
            <div className="text-center text-4xl font-bold">{measure.total}</div>
        </div>
        <div className="border-2 border-gray-300 p-4 rounded-lg m-4">
            <div className="text-center text-2xl font-bold">Completed Tasks</div>
            <div className="text-center text-4xl font-bold">{measure.complete}</div>
        </div>
        <div className="border-2 border-gray-300 p-4 rounded-lg m-4">
            <div className="text-center text-2xl font-bold">Pending Tasks</div>
            <div className="text-center text-4xl font-bold">{measure.pending}</div>
        </div>
        <div className="border-2 border-gray-300 p-4 rounded-lg m-4">
            <div className="text-center text-2xl font-bold">Overdue Tasks</div>
            <div className="text-center text-4xl font-bold">{measure.overdue}</div>
        </div>  
          <div className="border-2 border-gray-300 p-4 rounded-lg m-4">
            <div className="text-center text-2xl font-bold">in-progress Tasks</div>
            <div className="text-center text-4xl font-bold">{measure.inProgress}</div>
        </div>
      </div>
  
      </div>
      
    
  )
}
Countcard.propTypes = {
  measure: PropTypes.number.isRequired,

};

export default Countcard
