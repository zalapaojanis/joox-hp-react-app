import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import HeaderBar from '../HeaderBar/HeaderBar';
import SideBar from '../SideBar/SideBar';
import FooterBar from '../FooterBar/FooterBar';
import Sitemap from '../Sitemap/Sitemap';
import CTRL from 'react-nc';

const { Content } = Layout;

const MainLayout = props => {
  const { children } = props;
  return (
    <Layout>
      <HeaderBar />
      <Layout>
        <SideBar />
        <StyledContent collapsed={CTRL.state.collapsed}>
          {children}
          <Sitemap />
        </StyledContent>
      </Layout>
      <FooterBar />
    </Layout>
  );
}

const StyledContent = styled(Content)`
  margin: 58px 0 0 ${props => props.collapsed ? '80px' : '200px'};
  padding-bottom: 55px;
  background: #222222;
  overflow-x: hidden;
  overflow-y: auto;
`;

const MemoMainLayout = React.memo(MainLayout);

export {
  MemoMainLayout as MainLayout,
  MemoMainLayout as default,
};
