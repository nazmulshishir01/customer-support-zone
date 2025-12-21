export default function ResolvedList({ resolved }) {
  return (
    <div className="space-y-3">
      <h4 className="text-lg font-semibold">Resolved Task</h4>
      {resolved.length === 0 && <p className="opacity-70 text-sm">No resolved tasks yet.</p>}
      <ul className="space-y-3">
        {resolved.map(t => (
          <li key={t.id} className="p-4 rounded-xl bg-[#E0E7FF] flex items-center justify-between gap-3">
            <span className="text-sm md:text-[18px]">{t.title}</span>
            
          </li>
        ))}
      </ul>
    </div>
  )
}
