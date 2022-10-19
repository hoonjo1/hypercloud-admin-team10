import React, { useState, useEffect } from 'react';
import Dashboard from 'components/Dashboard';
import { TopBreadCrumb } from 'components/TopBreadCrumb';
import contents from 'api/contents';
import { Modal } from 'components/Modal';

interface Type {
  author: string;
  category: string;
  title: string;
  body: string;
  id: string;
}

export const XrBusiness = () => {
  const [toggle, setToggle] = useState(false);
  const [idData, setIdData] = useState('');
  const handleModal = (id: string) => {
    setToggle(!toggle);
    setIdData(id);
  };
  const openModal = () => {
    setToggle(!toggle);
  };

  const [businessData, setBusinessData] = useState<Type[]>([]);
  useEffect(() => {
    contents.getXrBusiness().then(data => {
      setBusinessData(data);
    });
  }, []);

  return (
    <Dashboard>
      <div className="p-5 w-4/5 overflow-x-auto relative shadow-md sm:rounded-lg">
        <TopBreadCrumb title="XR-Business" />
        <div className="block w-full px-2 py-8 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          XR-Business HyperCloud
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            하이퍼클라우드의 XR Cloud SDK는 구현된 AR/VR 모듈 기능들을 빠르게
            구축할 수 있는 기술입니다. 하이퍼클라우드의 XR Cloud 솔루션은 작은
            실내 공간을 시작으로 백화점과 같은 복합 문화시설 나아가 스마트 도시,
            그 끝은 시공간의 경계 없는 디지털 트윈 인프라 구축을 최종 목표로
            합니다.
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
            {businessData.length != 0 &&
              businessData.map(content => (
                <tr
                  key={content.id}
                  className="bg-white text-gray-900 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="py-4 px-6">{content.category}</td>
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {content.title}
                  </th>
                  <td className="py-4 px-6">{content.author}</td>
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => {
                        handleModal(content.id);
                      }}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      type="button"
                      data-modal-toggle="defaultModal"
                    >
                      전체 보기
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {toggle && <Modal idData={idData} openModal={openModal} />}
      </div>
    </Dashboard>
  );
};
