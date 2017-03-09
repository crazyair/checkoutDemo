import React from 'react';
import { List, Checkbox, Flex } from 'antd-mobile';
import './index.less';
const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;
class InvoiceCom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
    }

    handleClick(path) {
        this.props.router.push(path)
    }

    render() {
        return (
            <div>
                <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)}>
                    已阅读协议<a onClick={(e) => { e.preventDefault(); alert('打开协议'); }}>《协议链接》</a>
                </AgreeItem>
            </div>
        );
    }
}

export  default InvoiceCom;
