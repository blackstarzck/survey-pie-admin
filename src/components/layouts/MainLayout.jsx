import { Layout, Menu } from 'antd';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

const items = [
  { key: 'list', path: '/list', label: '설문조사 관리' },
  { key: 'builder', path: '/builder', label: '빌더' },
];

const MainLayout = ({ selectedKeys, children }) => {
  const navigate = useNavigate();
  const contentStyle = useMemo(() => {
    return { padding: 45 };
  }, []);

  const handleMenuClick = (item) => {
    navigate(`/${item.key}`);
    console.log('item', item);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div
          className="demo-logo-vertical"
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, .3)',
          }}
        />
        <Menu
          theme="dark"
          selectedKeys={selectedKeys}
          mode="inline"
          items={items}
          onClick={handleMenuClick}
        ></Menu>
      </Sider>
      <Layout>
        <Header />
        <Content style={contentStyle}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
