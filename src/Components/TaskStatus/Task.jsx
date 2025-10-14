export default function TaskS({ progress, completeTask, resolved }) {
  return (
    <div className="w-[350px]">
      <h1 className="text-2xl font-semibold mb-4">Task Status</h1>
      <h2 className="text-lg font-medium mb-2">In-Progress</h2>
      {progress.length === 0 && <p>No task in progress</p>}
      {progress.map((task) => (
        <div
          key={task.id}
          className="shadow-lg rounded-xl p-4 mb-3 text-center bg-white"
        >
          <h3 className="font-semibold mb-2">{task.title}</h3>
          <button
            onClick={() => completeTask(task)}
            className="btn text-white bg-[#02A53B] w-full"
          >
            Completed
          </button>
        </div>
      ))}

      <h2 className="text-2xl font-semibold mb-4 mt-4">Resolved Task</h2>
      {resolved.length === 0 && <p>No resolved task yet</p>}
      {resolved.map((i) => (
        <div
        key={i.id}
        className="shadow-lg rounded-xl p-4 mb-4 text-center bg-gray-100"
        >
         <h3 className="font-semibold">{i.title}</h3>
        
        </div>
      ))}
    </div>
  );
}
