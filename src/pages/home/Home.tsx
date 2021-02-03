import React, { useEffect, useState } from 'react';
import Body from '../../components/body/Body';
import MobileView from '../../components/common/MobileView';
import Layout from '../../components/layout/Layout';
import Sidebar from '../../components/sidebar/Sidebar';

const Home: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  useEffect(() => {
    if (window.innerWidth < 500) setShowSidebar(false);
  }, [window.innerWidth]);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <Layout>
      <MobileView>
        {showSidebar && <Sidebar toggleSidebar={toggleSidebar} />}
      </MobileView>
      <Body toggleSidebar={toggleSidebar} />
    </Layout>
  );
};
export default Home;
