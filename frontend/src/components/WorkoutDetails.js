const WorkDetails = ({ workout }) => {
    return(
        <div className="workout-details">
            <small>{workout._id}</small>
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p>{workout.createdAt}</p>
        </div>
    )
}

export default WorkDetails