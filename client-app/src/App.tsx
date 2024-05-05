import React from 'react';
import { Layout, Menu, theme } from 'antd';
import FirstSection from './Pages/FirstSection';

const { Header, Footer, Content } = Layout;

const items = new Array(3).fill(null).map((_, index) => ({
  key: String(index + 1),
  label: `nav ${index + 1}`,
  
}));

const App: React.FC = () => {
  return (
    <Layout>
      <Header
        style={{
          //position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}

          items={[{
            key: '1',
            label: 'Ivana',
          }]}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      
      <Content  style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <FirstSection/>
      </Content>
      
      <Footer style={{ textAlign: 'center' }}>
        Ivana Gunjača ©{new Date().getFullYear()} Created by Sharp Agency d.o.o.
      </Footer>
    </Layout>
  );
};

export default App;