import React, { Component } from 'react';

import { Drawer, Navigation, Content, Layout, Header} from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './component/main';

class App extends Component {
 




  render() {
    return (
    

      <div style={{height: '300px', position: 'relative'}}>
     
    <Layout fixedHeader>
        <Header title={<span><span style={{ color: '/ddd' }}></span><strong>Admin</strong></span>}>
          
        </Header>
        <Drawer title="ClusTMPay">
            <Navigation>
            <Link to="/users">users</Link>
                <Link to="/products">Products</Link>
                <Link to="/liveactivity">Live Activity</Link>
                <Link to="/">Help</Link>
            </Navigation>
        </Drawer>
        <Main/>
        <Content />
    </Layout>
</div>
  
     
    );
  }
}

export default App;
