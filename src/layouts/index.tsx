import { ProLayout, PageContainer, ProCard } from '@ant-design/pro-components';
import { SmileFilled } from '@ant-design/icons';
import React from 'react';
import { Link } from '@umijs/max';
import Access from '@/pages/Access';
const menus = {
  path: '/',
  routes: [
    {
      path: '/access',
      name: 'Access',
      icon: <SmileFilled />,
      component: '@/pages/Access',
    },
    {
      path: '/home',
      key: '/home',
      name: 'Home',
      icon: <SmileFilled />,
      component: <Access />,
    },
    {
      path: '/table',
      name: 'Table',
      icon: <SmileFilled />,
      component: '@/pages/Access',
    },
    {
      path: '/test',
      name: 'Test',
      icon: <SmileFilled />,
      component: '@/pages/Access',
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
          // title='123412'
          style={{
            height: '100vh',
            minHeight: 800,
          }}
        >
          {' '}
          {menus.routes[1].component}{' '}
        </ProCard>
      </PageContainer>
    </ProLayout>
  );
};
export default layout;
