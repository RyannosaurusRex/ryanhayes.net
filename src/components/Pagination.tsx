import { Link } from 'gatsby';
import * as React from 'react';

export interface PaginationProps {
  currentPage: number;
  numPages: number;
}
const Pagination: React.FunctionComponent<PaginationProps> = ({ currentPage, numPages }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  return (

    <nav className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
  <div className="w-0 flex-1 flex">
    {!isFirst && (
      <Link to={prevPage} rel="prev" className="-mt-px border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm leading-5 font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400 transition ease-in-out duration-150">
        Previous
      </Link>
    )}
    <a href="#" className="-mt-px border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm leading-5 font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400 transition ease-in-out duration-150">
      <svg className="mr-3 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"/>
      </svg>
      Previous
    </a>
  </div>
  <div className="hidden md:flex">
    {Array.from({ length: numPages }, (_, i) => (
      <Link key={`pagination-number${i + 1}`} /*className={i + 1 === currentPage ? 'active' : ''}*/ to={`/${i === 0 ? '' : i + 1}`} className="-mt-px border-t-2 border-transparent pt-4 px-4 inline-flex items-center text-sm leading-5 font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400 transition ease-in-out duration-150">
        {i + 1}
      </Link>
    ))}
  </div>
  <div className="w-0 flex-1 flex justify-end">
    <a href="#" className="-mt-px border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm leading-5 font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400 transition ease-in-out duration-150">
      Next
      <svg className="ml-3 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
      </svg>
    </a>
  </div>
</nav>
    // <nav css={navCss}>
    //   <div>
    //     {!isFirst && (
    //       <Link to={prevPage} rel="prev">
    //         {/* << symbol */}
    //         {String.fromCharCode(171)}
    //       </Link>
    //     )}

    //     {Array.from({ length: numPages }, (_, i) => (
    //       <Link key={`pagination-number${i + 1}`} classNameName={i + 1 === currentPage ? 'active' : ''} to={`/${i === 0 ? '' : i + 1}`}>
    //         {i + 1}
    //       </Link>
    //     ))}

    //     {!isLast && (
    //       <Link to={nextPage} rel="next">
    //         {/* >> symbol */}
    //         {String.fromCharCode(187)}
    //       </Link>
    //     )}
    //   </div>
    // </nav>
  );
};

export default Pagination;
