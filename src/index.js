import React from 'react';
import ReactDOM from 'react-dom';
// import { Button } from 'antd';
// import 'antd/dist/antd.less'
// import './style/index.less';
import Button from 'antd/lib/button'; // 加载 JS
import 'antd/lib/button/style'; // 加载 less

const a1 = <div className="container">Hello, world!</div>;
const a2 = <div><Button type="primary">Primary</Button></div>;

//
ReactDOM.render(
	a2,
	document.getElementById('root')
);