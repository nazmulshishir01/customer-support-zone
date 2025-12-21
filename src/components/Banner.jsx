export default function Banner({ inProgressCount, resolvedCount }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      
      <div
        className="rounded-2xl p-8 text-white flex flex-col items-center justify-center text-center relative overflow-hidden"
        style={{
          backgroundImage:
            "url('/vector1.png'), url('/vector2.png'), linear-gradient(90deg,#632EE3 0%, #9F62F2 100%)",
          backgroundRepeat: "no-repeat, no-repeat, no-repeat",
          backgroundPosition: "left bottom, right bottom, center",
          backgroundSize: "auto 100%, auto 100%, cover",
        }}
      >
        <h3 className="text-lg font-normal mb-2">In-Progress</h3>
        <div className="text-5xl md:text-6xl font-bold">{inProgressCount}</div>
      </div>

    
      <div
        className="rounded-2xl p-8 text-white flex flex-col items-center justify-center text-center relative overflow-hidden"
        style={{
          backgroundImage:
            "url('/vector1.png'), url('/vector2.png'), linear-gradient(90deg,#54CF68 0%, #00827A 100%)",
          backgroundRepeat: "no-repeat, no-repeat, no-repeat",
          backgroundPosition: "left bottom, right bottom, center",
          backgroundSize: "auto 100%, auto 100%, cover",
        }}
      >
        <h3 className="text-lg font-normal mb-2">Resolved</h3>
        <div className="text-5xl md:text-6xl font-bold">{resolvedCount}</div>
      </div>
    </section>
  )
}
