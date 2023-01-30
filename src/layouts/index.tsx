import { ProLayout, PageContainer, ProCard } from '@ant-design/pro-components';
import { SmileFilled } from '@ant-design/icons';
import React from 'react';
import { Link, Outlet } from '@umijs/max';
const menus = {
  path: '/',
  routes: [
    {
      path: '/useAntdTable',
      name: 'useAntdTable',
      icon: <SmileFilled />,
    },
    {
      path: '/home',
      key: '/home',
      name: 'Home',
      icon: <SmileFilled />,
    },
    {
      path: '/table',
      name: 'Table',
      icon: <SmileFilled />,
    },
    {
      path: '/test',
      name: 'Test',
      icon: <SmileFilled />,
    },
  ],
};

const layout: React.FC = () => {
  return (
    <ProLayout
      title="hello umi"
      route={menus}
      defaultSelectedKeys={['/home']}
      menuItemRender={(item, dom) => {
        console.log(item, dom);
        return <Link to={item.path ?? '/'}>{dom}</Link>;
      }}
    >
      <PageContainer>
        <ProCard
          style={{
            height: '100vh',
            minHeight: 800,
          }}
        >
          <Outlet />
        </ProCard>
      </PageContainer>
    </ProLayout>
  );
};
export default layout;
