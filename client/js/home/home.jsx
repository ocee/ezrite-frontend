import 'babel-polyfill'
import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
// import {browserHistory } from 'react-router'

import Header from './../common/header.jsx'
import LoginModal from './../common/login_modal.jsx'
import Footer from './../common/footer.jsx'
import SearchAction from './../action/search_action'

class Home extends React.Component {
    componentWillReceiveProps(nextProps) {
      const {viewData, history, action} = this.props

      if(viewData && viewData.view && !history.isActive(viewData.view)){
        let view = viewData.view
        action.setViewState(null)
        history.push(viewData.view)
      }

    }
    render() {
        const {loginData, registrationData, userData, action} = this.props
        return (
            <div>
                <LoginModal loginData={loginData} registrationData={registrationData} userData={userData}  action={action}/>
                <Header userData={userData} action={action}/> {React.cloneElement(this.props.children, {...this.props})}
                <Footer action={action}/>
            </div>
        )
    }
}

Home.propTypes = {
    // reducer: PropTypes.object.isRequired,
    action: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {...state.SearchReducer}
}

function mapDispatchToProps(dispatch) {
    return {action: new SearchAction(dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
