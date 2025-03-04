
const Tasklist = ({tasks}) => {
  return (
    <div>
       <ul>
        {tasks.map((tasks, index) => (
          <li key={index} className="border-b-2 border-gray-300 p-4">
            <div className="flex justify-between">
              <div>  <div>
                <p>{tasks.priority}</p>
                <p>{tasks.status}</p>
              </div></div>
              <div><p>{tasks.description}</p></div>
              <div>
                {tasks.title}
              </div>
            
            
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tasklist;
