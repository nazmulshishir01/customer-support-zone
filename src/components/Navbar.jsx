export default function Navbar() {
  return (
    <div className="bg-[#FFFFFF] shadow-sm sticky top-0 z-20">
      <div className="navbar container mx-auto px-8">
        <div className="flex-1">
          <a className="text-lg md:text-xl font-semibold">CS — Ticket System</a>
        </div>

        {/* Right side */}
        <div className="flex-none flex items-center gap-2 flex-nowrap">
          <ul className="menu menu-horizontal px-1 hidden md:flex text-sm">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Changelog</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Download</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>

          <button
            className="btn btn-sm md:btn-sm text-white border-0
                       bg-gradient-to-r from-[#632EE3] to-[#9F62F2]
                       hover:opacity-90 transition rounded-md whitespace-nowrap"
          >
            + New Ticket
          </button>
        </div>
      </div>
    </div>
  );
}
