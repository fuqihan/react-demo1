import React from 'react'
import {hashHistory} from 'react-router'

import './login.css'
class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {}
    }

    onSub(e) {
        console.log(this.refs.name.value, this.refs.psd.value)
        if (this.refs.name.value.length > 6 && this.refs.psd.value.length > 6) {
            alert('登陆成功');
            let name = this.refs.name.value;
            hashHistory.push({pathname: '/', state: {name}})
        } else {
            alert('登陆失败');
            this.refs.name.value = '';
            this.refs.psd.value = '';
        }
    }

    componentWillMount() {
        alert("欢迎进入登录页")
    }

    render() {
        return (
            <div>
                <form action="">
                    账号 <input type="text" ref="name"/><br/>
                    密码 <input type="password" ref="psd"/><br/>
                    <button onClick={this.onSub.bind(this)}>登录</button>
                </form>
            </div>
        )
    }
}
export default Login