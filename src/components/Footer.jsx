import { FaYoutube, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-sm">
        <div>
          <h4 className="font-semibold mb-2">Categories</h4>
          <ul className="space-y-1">
            <li>User Interface</li>
            <li>User Experience</li>
            <li>Digital Media</li>
            <li>Lifestyle</li>
            <li>Programming</li>
            <li>Animation</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Product</h4>
          <ul className="space-y-1">
            <li>Pricing</li>
            <li>Overview</li>
            <li>Browse</li>
            <li>Accessibility</li>
            <li>Files</li>
            <li>Changelog</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Solutions</h4>
          <ul className="space-y-1">
            <li>Brainstorming</li>
            <li>Ideation</li>
            <li>Wireframing</li>
            <li>Research</li>
            <li>Design</li>
            <li>Concept</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Resources</h4>
          <ul className="space-y-1">
            <li>Help Center</li>
            <li>Blog</li>
            <li>Tutorials</li>
            <li>FAQs</li>
            <li>Community</li>
            <li>Events</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Support</h4>
          <ul className="space-y-1">
            <li>Contact Us</li>
            <li>Developers</li>
            <li>Documentation</li>
            <li>Integrations</li>
            <li>Reports</li>
            <li>Webinar</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1">
            <li>About</li>
            <li>Press</li>
            <li>Events</li>
            <li>Careers</li>
            <li>Customers</li>
            <li>Partners</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center mt-10 border-t pt-4 text-sm">
        <div className="font-bold text-blue-600 mb-2 sm:mb-0">Appy</div>
        <div className="text-gray-500 mb-2 sm:mb-0">© 2023 All rights reserved.</div>
        <div className="flex space-x-4 text-blue-600">
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
