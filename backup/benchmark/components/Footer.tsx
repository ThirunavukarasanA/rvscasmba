export default function Footer() {
  return (
    <footer className="bg-booth-bg-gray">
      {/* Disclaimer */}
      <div className="bg-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-xs text-booth-light-gray font-trade-gothic-light">
            The University of Chicago Booth School of Business is registered with the Hong Kong Education Bureau. 
            Registration number: 262955. It is a matter of discretion for individual employers to recognize any 
            qualification to which this course may lead.
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Horizontal line separator */}
        <div className="border-t-2 border-booth-maroon mb-12"></div>

        {/* Top Section - 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo and University Name */}
          <div>
            <div className="font-trade-gothic-bold text-booth-maroon text-xl mb-4">
              CHICAGO BOOTH
            </div>
            <p className="text-booth-dark-gray font-trade-gothic-light text-sm">
              THE UNIVERSITY OF CHICAGO BOOTH SCHOOL OF BUSINESS
            </p>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h3 className="font-trade-gothic-bold text-booth-maroon mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light">Why Booth</a></li>
              <li><a href="#" className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light">Degree Programs</a></li>
              <li><a href="#" className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light">Executive Education</a></li>
              <li><a href="#" className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light">Faculty & Insights</a></li>
            </ul>
          </div>

          {/* Column 3: Links without heading */}
          <div>
            <ul className="space-y-2">
              <li><a href="#" className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light">Alumni</a></li>
              <li><a href="#" className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light">Events</a></li>
              <li><a href="#" className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light">Recruiting</a></li>
              <li><a href="#" className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light">Admissions</a></li>
            </ul>
          </div>

          {/* Column 4: Links without heading */}
          <div>
            <ul className="space-y-2">
              <li><a href="#" className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light">About</a></li>
              <li><a href="#" className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light">Careers at Booth</a></li>
              <li><a href="#" className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light">Media Relations</a></li>
              <li><a href="#" className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light">Chicago Booth Magazine</a></li>
              <li><a href="#" className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light">Chicago Booth Review</a></li>
            </ul>
          </div>
        </div>

        {/* Three Buttons Row */}
        <div className="flex flex-wrap gap-4 mb-12">
          <button className="border-2 border-booth-maroon bg-white text-booth-maroon px-4 py-2 font-trade-gothic-bold uppercase hover:bg-booth-maroon hover:text-white transition text-sm">
            REQUEST INFORMATION
          </button>
          <button className="border-2 border-booth-maroon bg-white text-booth-maroon px-4 py-2 font-trade-gothic-bold uppercase hover:bg-booth-maroon hover:text-white transition text-sm">
            APPLY
          </button>
          <button className="border-2 border-booth-maroon bg-white text-booth-maroon px-4 py-2 font-trade-gothic-bold uppercase hover:bg-booth-maroon hover:text-white transition text-sm inline-flex items-center gap-1">
            GIVE
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </button>
        </div>

        {/* Middle Section 1: Other Offerings */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-trade-gothic-bold text-booth-maroon mb-4">Other Offerings</h3>
          </div>
          <div>
            <button className="border-2 border-booth-maroon bg-white text-booth-maroon px-4 py-2 font-trade-gothic-bold uppercase hover:bg-booth-maroon hover:text-white transition text-sm w-full">
              UNDERGRADUATES
            </button>
          </div>
          <div>
            <button className="border-2 border-booth-maroon bg-white text-booth-maroon px-4 py-2 font-trade-gothic-bold uppercase hover:bg-booth-maroon hover:text-white transition text-sm w-full">
              TAKING CLASSES
            </button>
          </div>
          <div>
            <button className="border-2 border-booth-maroon bg-white text-booth-maroon px-4 py-2 font-trade-gothic-bold uppercase hover:bg-booth-maroon hover:text-white transition text-sm w-full">
              ALL OTHER OFFERINGS
            </button>
          </div>
        </div>

        {/* Horizontal line separator */}
        <div className="border-t-2 border-booth-maroon mb-12"></div>

        {/* Middle Section 2: Global Locations */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1 */}
          <div>
            <h3 className="font-trade-gothic-bold text-booth-maroon mb-4">Global Locations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light">Harper Center</a></li>
              <li><a href="#" className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light">Gleacher Center</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <ul className="space-y-2 mt-10">
              <li><a href="#" className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light">Executive MBA Chicago</a></li>
              <li><a href="#" className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light">Executive MBA London</a></li>
              <li><a href="#" className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light">Executive MBA Hong Kong</a></li>
            </ul>
          </div>

          {/* Columns 3-4 spanning */}
          <div className="md:col-span-2">
            <h3 className="font-trade-gothic-bold text-booth-maroon mb-4">Executive Education Global Locations</h3>
          </div>
        </div>

        {/* Bottom Section 1: Follow and Contact */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Follow */}
          <div>
            <h3 className="font-trade-gothic-bold text-booth-maroon mb-4">Follow</h3>
            <div className="flex gap-3 flex-wrap">
              {/* Facebook */}
              <a href="#" className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs" aria-label="Facebook">f</a>
              {/* Instagram */}
              <a href="#" className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center text-white" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* X (Twitter) */}
              <a href="#" className="w-8 h-8 bg-black rounded flex items-center justify-center text-white font-bold" aria-label="X">X</a>
              {/* YouTube */}
              <a href="#" className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center text-white font-bold text-xs" aria-label="LinkedIn">in</a>
              {/* TikTok */}
              <a href="#" className="w-8 h-8 bg-black rounded flex items-center justify-center text-white" aria-label="TikTok">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              {/* Weibo */}
              <a href="#" className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-white font-bold text-xs" aria-label="Weibo">微</a>
              {/* WeChat */}
              <a href="#" className="w-8 h-8 bg-green-500 rounded flex items-center justify-center text-white" aria-label="WeChat">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.042-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.598-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 3.867c-1.693 1.354-3.692 1.677-5.243 1.98-.12.02-.24.04-.36.058-.398.06-.79.12-1.17.3-.57.27-1.01.69-1.31 1.25-.3.56-.42 1.18-.35 1.8.08.71.4 1.38.9 1.91.51.52 1.17.85 1.88.93.56.06 1.13.02 1.68-.12.55-.14 1.06-.38 1.51-.7.26-.18.54-.32.84-.42.25-.09.52-.14.79-.17 1.08-.1 2.15-.32 3.15-.7 1.57-.59 2.89-1.66 3.72-3.1.83-1.44 1.12-3.08.84-4.67-.28-1.59-1.08-3.02-2.28-4.11zm.19 2.01c.15.26.27.53.36.81.09.28.15.57.18.86.03.29.03.59 0 .88-.05.58-.2 1.15-.43 1.68-.23.53-.54 1.02-.92 1.45-.38.43-.83.79-1.33 1.07-.5.28-1.04.48-1.6.59-.56.11-1.13.13-1.69.07-.56-.06-1.11-.2-1.63-.41a5.37 5.37 0 0 1-1.35-.95 5.44 5.44 0 0 1-1-1.33 5.5 5.5 0 0 1-.54-1.65c-.06-.56-.04-1.13.07-1.69.11-.56.31-1.1.59-1.6.28-.5.64-.95 1.07-1.33.43-.38.92-.69 1.45-.92.53-.23 1.1-.38 1.68-.43.29-.03.59-.03.88 0 .29.03.58.09.86.18.28.09.55.21.81.36.26.15.5.33.72.53.22.2.42.42.59.66.17.24.31.5.42.77.11.27.19.55.24.84.05.29.07.59.05.88-.02.29-.07.58-.15.86zm2.59 1.48c.28 1.59-.08 3.18-.95 4.52-.87 1.34-2.15 2.35-3.62 2.96-1.47.61-3.07.79-4.64.52-1.57-.27-3.02-1.02-4.15-2.15-1.13-1.13-1.88-2.58-2.15-4.15-.27-1.57-.09-3.17.52-4.64.61-1.47 1.62-2.75 2.96-3.62 1.34-.87 2.93-1.23 4.52-.95 1.59.28 3.02 1.08 4.11 2.28 1.09 1.2 1.89 2.69 2.17 4.28.14.79.18 1.59.12 2.38-.06.79-.22 1.57-.46 2.32-.24.75-.56 1.47-.95 2.14-.39.67-.85 1.29-1.37 1.85-.52.56-1.09 1.06-1.7 1.49-.61.43-1.26.79-1.94 1.07-.68.28-1.38.48-2.09.59-.71.11-1.43.14-2.14.09-.71-.05-1.41-.18-2.09-.39-.68-.21-1.33-.5-1.94-.87-.61-.37-1.18-.81-1.7-1.32-.52-.51-.96-1.09-1.32-1.7-.36-.61-.66-1.26-.87-1.94-.21-.68-.34-1.38-.39-2.09-.05-.71-.02-1.43.09-2.14.11-.71.31-1.41.59-2.09.28-.68.64-1.33 1.07-1.94.43-.61.93-1.18 1.49-1.7.56-.52 1.18-.98 1.85-1.37.67-.39 1.39-.71 2.14-.95.75-.24 1.53-.4 2.32-.46.79-.06 1.59-.02 2.38.12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Columns 2-4: Contact Info */}
          <div className="md:col-span-3">
            <p className="font-trade-gothic-bold text-booth-maroon mb-2">
              The University of Chicago Booth School of Business
            </p>
            <p className="text-booth-dark-gray font-trade-gothic-light mb-1">
              5807 S. Woodlawn Ave.
            </p>
            <p className="text-booth-dark-gray font-trade-gothic-light mb-1">
              Chicago, IL 60637 USA
            </p>
            <p className="text-booth-dark-gray font-trade-gothic-light mb-4">
              Phone: 773.702.7743
            </p>
            <button className="border-2 border-booth-maroon bg-white text-booth-maroon px-4 py-2 font-trade-gothic-bold uppercase hover:bg-booth-maroon hover:text-white transition text-sm">
              CONTACT
            </button>
          </div>
        </div>

        {/* Bottom Section 2: Legal and Copyright */}
        <div className="border-t border-gray-300 pt-6">
          <div className="flex flex-wrap gap-4 items-center text-sm">
            <a href="#" className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light inline-flex items-center gap-1">
              The University of Chicago
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a href="#" className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light">Intranet</a>
            <a href="#" className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light">Privacy Notice</a>
            <a href="#" className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light inline-flex items-center gap-1">
              Accessibility
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a href="#" className="text-booth-dark-gray hover:text-booth-maroon font-trade-gothic-light">Website Feedback</a>
            <span className="text-booth-dark-gray font-trade-gothic-light">© 2004-2025 The University of Chicago Booth School of Business</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
