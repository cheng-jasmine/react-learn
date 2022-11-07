import React, { Component } from 'react'
import { withRouter } from "react-router-dom"

class RouteGuard extends Component {
    componentDidMount() {
        // 添加一个监听器
        this.unListen = this.props.history.listen((location, action) => {
            if (this.props.onChange) {
                const preLocation = this.props.location
                this.props.onChange(preLocation, location, action, this.unListen)
            }
        })

        // 设置阻塞
        this.props.history.block("真的要跳转页面吗？")
    }
    componentWillUnmount() {
        // 卸载监听器
        this.unListen()
    }

    render() {
        return this.props.children
    }
}

export default withRouter(RouteGuard)