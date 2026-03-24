import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-purple-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* 🔹 Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {/* Logo + About */}
          <div>
            <img
              src="/next.svg"
              alt="Logo"
              className="h-10 w-30 mb-4"
            />
            <p className="text-sm text-gray-400">
              SendGrow helps businesses create, automate, and optimize email campaigns effortlessly.
            </p>
          </div>

          {/* Links 1 */}
          <div>
            <h3 className="text-black font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#">Features</Link></li>
              <li><Link href="#">Integrations</Link></li>
              <li><Link href="#">Pricing</Link></li>
              <li><Link href="#">Updates</Link></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h3 className="text-black font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-black font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">

              <a href="#" className="hover:text-blue">
                Facebook
              </a>

              <a href="#" className="hover:text-blue">
                Instagram
              </a>

              <a href="#" className="hover:text-blue">
                LinkedIn
              </a>

            </div>
          </div>

        </div>

        {/* 🔹 Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">

          <p>
            © {new Date().getFullYear()} SendGrow. All rights reserved.
          </p>

          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms & Conditions</Link>
          </div>

        </div>

      </div>

      <div style={{ display: "none" }} id="demo-popup">
        <div className="p-6 max-w-md">
          <h2 className="text-xl font-bold mb-3">Book a Demo</h2>

          <input className="w-full border p-2 mb-3" placeholder="Name" />
          <input className="w-full border p-2 mb-3" placeholder="Email" />

          <button className="w-full bg-black text-white py-2">
            Submit
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;