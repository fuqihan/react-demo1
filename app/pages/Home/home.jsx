import React from 'react'
import {Link} from 'react-router'
import './home.css'
class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillUnmount() {
        setTimeout(() => {
            try {
                this.props.location.state.name.remove()
            } catch (e) {
                console.log('name不存在')

            }

        }, 1000)
    }

    namShow() {
        let aa = '123'
        try {
            aa = this.props.location.state.name
        } catch (e) {
            return '清前往登录页登录'
        }
        return aa

    }

    render() {
        return (
            <div>
                <div className="home">Home</div>
                {this.namShow()}
                <br/>
                <Link to="/login">login</Link>
            </div>
        )
    }
}

export default Home