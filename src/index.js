import React from 'react';
import ReactDOM from 'react-dom';
// import { Button } from 'antd';
// import 'antd/dist/antd.less'
import './style/index.less';
import { Icon, Button } from 'antd'; // 加载 JS
// import 'antd/lib/button/style'; // 加载 less

const a1 = <div className="atc">Hello, world!</div>;
const a2 = <div>
				<Button type="primary">Primary</Button>
				<Icon type="link" />
			</div>;

//
ReactDOM.render(
	a2,
	document.getElementById('root')
);