import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="bg-yellow-100 shadow py-2 border-y-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            {/* Left text */}
            <div className="text-center sm:text-left">
              <p className="text-sm font-medium text-gray-800">
                Get up to 50% off new season styles, limited time only
              </p>
            </div>

            {/* Right links */}
            <ul className="flex items-center gap-4 text-sm font-medium text-gray-800">
              <li>
                <Link to="/help-center" className="hover:underline">Help Center</Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:underline">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;



// import React from 'react'
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <header>
//       <div className='top-strip bg-yellow-100 shadow py-2 border-t-2 border-b-2 border-gray-200   '>
//         <div className='container'>
//           <div className='flex items-center justify-between'>
//             <div className='col1 w-[50%]'>
//               <p className='text-[14px] font-[500]'>Get up to 50% off new season styles, limited time only</p>
//             </div>

//             <div className='col2 flex items-center justify-end'>
//               <ul>
//                 <li className='list-none flex items-center gap-4'>
//                   <Link to="/help-center">Help Center</Link>
//                   <Link to="/contact-us"></Link>
//                   <Link to="/contact-us">Contact Us</Link> 
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
// export default Header;