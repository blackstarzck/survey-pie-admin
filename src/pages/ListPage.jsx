import { Button, Table } from 'antd';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useSWR from 'swr';

import MainLayout from '../components/layouts/MainLayout';
import fetcher from '../lib/fetcher';
import deleteSurvey from '../services/deleteSurvey';

const ListPage = () => {
  const [page, setPage] = useState(1);
  const { data, error, mutate } = useSWR(
    '/surveys?_sort=id&_order=desc',
    fetcher,
  );
  const navigate = useNavigate();

  const columns = useMemo(
    () => [
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
          return `${time.getFullYear()}-${
            time.getMonth() + 1
          }-${time.getDate()}`;
        },
      },
      {
        title: '액션',
        dataIndex: 'id',
        key: 'action',
        render: (id) => {
          return (
            <Button
              danger
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();

                deleteSurvey(id).then(() => mutate());
              }}
            >
              삭제
            </Button>
          );
        },
      },
    ],
    [mutate],
  );

  if (error) return 'error';
  if (!data) return 'loading...';

  return (
    <MainLayout selectedKeys={['list']}>
      <CreateButtonWrapper>
        <Button onClick={() => navigate('/builder')}>
          새로운 설문조사 생성
        </Button>
      </CreateButtonWrapper>
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

const CreateButtonWrapper = styled.div`
  text-align: right;
  margin-bottom: 20px;
`;

export default ListPage;
