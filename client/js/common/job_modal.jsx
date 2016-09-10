import React, { PropTypes }  from 'react'
import BootstrapJs from './../../style/bootstrap/js/bootstrap.min.js'

class JobModal extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
      return (
            <div className="modal fade" id="job-modal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: 'none'}}>
                <div className="modal-dialog">
                    <div className="jobmodal-container container">
                      <h1>Post A Job!</h1>
                      <br/>
                        <h4>Title</h4>
                        <div className="row" ><input type="text" className="col-xs-12" placeholder="job title..."></input></div>
                        <h4>Description</h4>
                        <div className="row"><textarea className="col-xs-12" placeholder="job description..."></textarea></div>
                        <div className="row"><div className="text-right"><button type="button" className="btn btn-primary dropdown-menu-right">Post</button></div></div>
                    </div>
                </div>
            </div>
        )
    }
}

JobModal.propTypes = {
  // reducer: PropTypes.object.isRequired,
  action: PropTypes.object.isRequired,
}

export default JobModal;
