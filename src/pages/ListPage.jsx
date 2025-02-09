import { Space, Table, Tag } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';

import MainLayout from '../components/layouts/MainLayout';
import fetcher from '../lib/fetcher';

const columns = [
  {
    title: '번호',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '제목',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '생성일',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (createdAt) => {
      const time = new Date(createdAt);
      return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`;
    },
  },
  {
    title: '액션',
    dataIndex: 'id',
    key: 'action',
    render: (id) => {
      return (
        <button
          onClick={() => {
            console.log('삭제 ' + id);
          }}
        >
          삭제
        </button>
      );
    },
  },
];

const ListPage = () => {
  const [page, setPage] = useState(1);
  const { data, error } = useSWR('/surveys', fetcher);
  const navigate = useNavigate();

  if (error) return 'error';
  if (!data) return 'loading...';

  return (
    <MainLayout selectedKeys={['list']}>
      <Table
        onChange={(pagination) => {
          console.log('pagination', pagination);
          setPage(pagination.current);
        }}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              console.log('onClick!', record, rowIndex);
              navigate(`/builder/${record.id}`);
            },
          };
        }}
        columns={columns}
        dataSource={data.map((item) => ({ ...item, key: item.id }))}
        pagination={{ total: data.length, current: page, pageSize: 20 }}
      />
    </MainLayout>
  );
};

export default ListPage;
