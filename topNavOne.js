import React, { Component } from 'react';
import {Col,Row} from 'antd';

class App extends Component {
  render() {
    return (
      <div id="topNavOne" >
		 <Row  >
		  <Col span={4}><img style={{width:30,height:30}} src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3885194494,1528330350&fm=21&gp=0.jpg" /></Col>
		  <Col span={16}>
			<nav className="nav " >
			<ul id="xx" >
			
			<li><a href="#">Illustration</a></li>
			<li><a href="#">Web Design</a></li>
				<li className="current"><a href="#xx">Portfolio</a></li>
			<li><a href="#">Print Media</a></li>
			<li><a href="#">Graphic Design</a></li>
			</ul>
		</nav>
		<div className="egeg"  >
			<ul><li>33r</li><li>33r</li><li>33r</li></ul>
		</div>
		  </Col>
		  <Col span={4}>col-12</Col>
		</Row>
    
	  </div>
    );
  }
}

export default App;
