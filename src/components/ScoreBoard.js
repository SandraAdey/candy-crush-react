const ScoreBoard = ({score}) => {
    return (
        <div className="card">
        <div className="Score-board">
            <h1>ScoreBoard</h1>
            <h2>{score}</h2>
        </div>
        </div>
    )
}

export default ScoreBoard