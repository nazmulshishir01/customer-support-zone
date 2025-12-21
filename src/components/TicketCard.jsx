import { CiCalendarDate } from "react-icons/ci";

function Badge({ children, type = "open" }) {
  // DaisyUI badge shape, colors via Tailwind utilities
  const colors = {
    open: "bg-[#B9F8CF] text-[#0B5E06]",
    "in-progress": "bg-[#F8F3B9] text-[#9C7700]",
    closed: "bg-[#E5E7EB] text-[#374151]",
  };

  return (
    <span
      className={`badge ${colors[type] || "badge-ghost"} 
                  text-xs flex items-center gap-1 text-[16px] font-medium`}
    >
      <span
        className={`w-2.5 h-2.5 rounded-full ${
          type === "open"
            ? "bg-[#02A53B]"
            : type === "in-progress"
            ? "bg-[#FEBB0C]"
            : "bg-gray-500"
        }`}
      />
      {children}
    </span>
  );
}

function Priority({ level }) {
  const c =
    level === "high"
      ? "text-high-priority"
      : level === "medium"
      ? "text-medium-priority"
      : "text-low-priority";

  return (
    <span className={`font-semibold uppercase ${c}`}>{level} priority</span>
  );
}

export default function TicketCard({ ticket, onAddToProgress }) {
  const { id, title, description, customer, priority, status, createdAt } =
    ticket;
  const date = new Date(createdAt).toLocaleDateString();

  return (
    <div
      className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition cursor-pointer rounded-md"
      onClick={() => onAddToProgress(ticket)}
    >
      <div className="card-body gap-2">
        <div className="flex items-start justify-between gap-3">
          <h3 className="card-title leading-6 text-base md:text-sm">{title}</h3>
          <Badge type={status}>
            {status === "in-progress"
              ? "In-Progress"
              : status === "closed"
              ? "Closed"
              : "Open"}
          </Badge>
        </div>

        <p className="text-xs opacity-80 leading-relaxed">{description}</p>

        <div className="flex flex-wrap items-center gap-3 text-xs justify-between">
          <div className="flex gap-3">
            <span className="text-gray-500">#{id}</span>
            <Priority level={priority} />
          </div>

          <div className="flex gap-3 ml-auto items-center">
            <span className="text-gray-500">{customer}</span>

            <div className="flex items-center gap-1">
              <CiCalendarDate size={16} className="text-gray-500" />
              <span className="text-gray-500">{date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
