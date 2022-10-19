import React, { useState } from 'react';
import Dashboard from './Dashboard';
import { TopBreadCrumb } from 'components/TopBreadCrumb';

export const About = () => {
  const [toggle, setToggle] = useState(false);
  const handleModal = () => {
    setToggle(!toggle);
  };

  return (
    <Dashboard>
      <div className="p-5 w-4/5 overflow-x-auto relative shadow-md sm:rounded-lg">
        <TopBreadCrumb title="About" />
        <div className="block w-full px-2 py-8 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          ABOUT HyperCloud
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            하이퍼클러우드는 모두가 XR Contents를 보다 재미있고 쉽게 접하며
            가상과 현실이 융합된 공간에서 경계감 없이 매끄럽고 스마트한 삶이기를
            바랍니다.
          </p>
        </div>

        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                카테고리
              </th>
              <th scope="col" className="py-3 px-6">
                제목
              </th>
              <th scope="col" className="py-3 px-6">
                작성자
              </th>
              <th scope="col" className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white text-gray-900 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="py-4 px-6">Sliver</td>
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17
              </th>
              <td className="py-4 px-6">Laptop</td>
              <td className="py-4 px-6 text-right">
                <button
                  onClick={handleModal}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  type="button"
                  data-modal-toggle="defaultModal"
                >
                  전체 보기
                </button>
              </td>
            </tr>
            <tr className="bg-white text-gray-900 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="py-4 px-6">Sliver</td>
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17
              </th>
              <td className="py-4 px-6">Laptop</td>
              <td className="py-4 px-6 text-right">
                <button
                  onClick={handleModal}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  type="button"
                  data-modal-toggle="defaultModal"
                >
                  전체 보기
                </button>
              </td>
            </tr>
            <tr className="bg-white text-gray-900 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="py-4 px-6">Sliver</td>
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17
              </th>
              <td className="py-4 px-6">Laptop</td>
              <td className="py-4 px-6 text-right">
                <button
                  onClick={handleModal}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  type="button"
                  data-modal-toggle="defaultModal"
                >
                  전체 보기
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        {toggle && (
          <div
            id="defaultModal"
            tabIndex={-1}
            aria-hidden="true"
            className="flex justify-center items-center bg-gray-900/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
          >
            <div className="relative right-0 p-4 w-full max-w-2xl h-full md:h-auto">
              <div className="relative top-50% left-50% bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Terms of Service
                  </h3>
                  <button
                    type="button"
                    onClick={handleModal}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="defaultModal"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>

                <div className="p-6 space-y-6">
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union
                    enacts new consumer privacy laws for its citizens, companies
                    around the world are updating their terms of service
                    agreements to comply.
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation
                    (G.D.P.R.) goes into effect on May 25 and is meant to ensure
                    a common set of data rights in the European Union. It
                    requires organizations to notify users as soon as possible
                    of high-risk data breaches that could personally affect
                    them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Dashboard>
  );
};
