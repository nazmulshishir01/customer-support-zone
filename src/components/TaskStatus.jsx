export default function TaskStatus({ inProgress, onComplete }) {
  return (
    <div className="space-y-3">
     
      <h4 className="text-xl font-semibold text-[24px] text-[#34485A]">Task Status</h4>
      
      {inProgress.length === 0 && (
        
        <p className="opacity-70 font-normal text-[16px]">
          Select a ticket to add to Task Status.
        </p>
      )}
      
      <ul className="space-y-3">
        {inProgress.map(t => (
          <li
            key={t.id}
            className="p-3 rounded-md bg-[#FFFFFF] flex items-center justify-between flex-col"
          >
           
            <span className="font-medium text-[18px]">{t.title}</span>
            
          
            <button
              className="btn bg-[#02A53B] text-white w-full py-3 mt-4"
              onClick={() => onComplete(t.id)}
            >
              Complete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
