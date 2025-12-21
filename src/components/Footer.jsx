export default function Footer() {
  return (
    <footer className="mt-12 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-6 gap-4">
        <div className="md:col-span-2 space-y-2">
          <h3 className="font-semibold text-lg">CS — Ticket System</h3>
          <p className="opacity-70 text-sm">
            Lorem Ipsum is simply dummy text of the <br /> printing and
            typesetting industry. Lorem <br /> Ipsum has been the industry's
            standard <br /> dummy text ever since the 1500s, when an <br /> unknown
            printer took a galley of type and <br /> scrambled it to make a type
            specimen book.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a className="link link-hover">About Us</a></li>
            <li><a className="link link-hover">Our Mission</a></li>
            <li><a className="link link-hover">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a className="link link-hover">Products & Services</a></li>
            <li><a className="link link-hover">Customer Stories</a></li>
            <li><a className="link link-hover">Download Apps</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Information</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a className="link link-hover">Privacy Policy</a></li>
            <li><a className="link link-hover">Terms & Conditions</a></li>
            <li><a className="link link-hover">Join Us</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}