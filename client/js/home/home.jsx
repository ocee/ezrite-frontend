import 'babel-polyfill'
import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import Header from './../common/header.jsx'
import LoginModal from './../common/login_modal.jsx'

import Footer from './../common/footer.jsx'
import SearchAction from './../action/search_action'


class Home extends React.Component {
    render() {
      const {reducer, action} = this.props
      return (
          <div>
                <LoginModal reducer={reducer} action={action}/>
                <Header reducer={reducer} action={action}/>
                  {React.cloneElement(this.props.children, {action, reducer})}
                <Footer reducer={reducer} action={action}/>
          </div>
        )
    }
}

Home.propTypes = {
  reducer: PropTypes.object.isRequired,
  action: PropTypes.object.isRequired
}

function mapStateToProps(state){
  return{
    reducer: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: new SearchAction(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
