export default function ExecutionEnginePage(){
    return(
        <div className ="min-h-screen bg-black text-white p-6">
            <div className="max-w-xl mx-auto mt-10">
            <h1 className="text-3xl font-bold">Execution Engine</h1>
            <p className ="text-gray-400-mt-2">
                Measure your real execution.
            </p>
            <div className="mt-8 p-4 border border-gray-700 rounded-xl">
  <input
    type="text"
    placeholder="Task (e.g. DSA practice)"
    className="w-full p-2 bg-black border border-gray-700 rounded-md mb-4"
  />

  <input
    type="number"
    placeholder="Planned Time (minutes)"
    className="w-full p-2 bg-black border border-gray-700 rounded-md mb-4"
  />
  <button className="w-full bg-green-500 text-black py-2 rounded-md font-semibold">
    Start Session
  </button>
</div>
        </div>  
        </div>
    )
}