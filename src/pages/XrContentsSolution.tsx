import React from 'react';
import Dashboard from './Dashboard';
import { TopBreadCrumb } from 'components/TopBreadCrumb';

export const XrContentsSolution = () => {
  return (
    <Dashboard>
      <div className="p-5 w-4/5 overflow-x-auto relative shadow-md sm:rounded-lg">
        <TopBreadCrumb title="XR-Business" category="XR Contents Solution" />
        <div className="block w-full px-2 py-8 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          기술 협업
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            하이퍼클라우드 기술 협업 소개
          </p>
        </div>
        <form className="px-1 py">
          <div className="mb-6">
            <label
              htmlFor="default-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              페이지 타이틀
            </label>
            <input
              type="text"
              id="default-input"
              disabled
              placeholder="입력"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <div className="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
              <label htmlFor="page summary" className="sr-only">
                page summary
              </label>
              <textarea
                id="comment"
                rows={15}
                className="px-0 w-full  text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="요약 글을 작성해주세요."
              ></textarea>
            </div>
            <div className="flex justify-end items-center py-2 px-3 border-t dark:border-gray-600">
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                작성
              </button>
            </div>
          </div>
        </form>
      </div>
    </Dashboard>
  );
};
