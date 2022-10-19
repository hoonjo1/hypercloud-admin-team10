import React from 'react';

const SideBar = ({
  userName,
  handleLogOut,
}: {
  userName: string | null;
  handleLogOut: () => void;
}) => {
  return (
    <aside className="w-1/5" aria-label="Sidebar">
      <div className="h-screen overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
        <a
          href="https://flowbite.com/"
          className="flex items-center pl-2.5 mb-5"
        >
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            HYPER Cloud
          </span>
        </a>
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white "
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">{`${userName}`}</span>
              <span
                className="flex-1 ml-3 whitespace-nowrap"
                onClick={handleLogOut}
              >
                로그아웃
              </span>
            </a>
          </li>
        </ul>
        <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
          <li>
            <a
              href="/about"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">About</span>
            </a>
          </li>
          <li>
            <a
              href="/about-info"
              className="flex items-center p-2 text-base font-normal text-gray-400 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="flex ml-16 whitespace-nowrap">페이지 소개</span>
            </a>
          </li>
          <li>
            <a
              href="/team-info"
              className="flex items-center p-2 text-base font-normal text-gray-400 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="flex ml-16 whitespace-nowrap">팀 소개</span>
            </a>
          </li>
          <li>
            <a
              href="/history"
              className="flex items-center p-2 text-base font-normal text-gray-400 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="flex ml-16 whitespace-nowrap">회사 연혁</span>
            </a>
          </li>
          <li>
            <a
              href="/xr-business"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">XR-Business</span>
            </a>
          </li>
          <li>
            <a
              href="/xr-business-info"
              className="flex items-center p-2 text-base font-normal text-gray-400 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="flex ml-16 whitespace-nowrap">페이지 소개</span>
            </a>
          </li>
          <li>
            <a
              href="/business-area"
              className="flex items-center p-2 text-base font-normal text-gray-400 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="flex ml-16 whitespace-nowrap">기술 소개</span>
            </a>
          </li>
          <li>
            <a
              href="/xr-contents-solution"
              className="flex items-center p-2 text-base font-normal text-gray-400 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="flex ml-16 whitespace-nowrap">기술 협업</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                <path
                  fillRule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">News</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
