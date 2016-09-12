import React, { PropTypes }  from 'react'
import $ from 'jquery'
import BootstrapJs from './../../style/bootstrap/js/bootstrap.min.js'

class JobModal extends React.Component {

    constructor(props) {
        super(props)
        this.postJob = this.postJob.bind(this)
        this.onTitleChange = this.onTitleChange.bind(this)
        this.onDescriptionChange = this.onDescriptionChange.bind(this)
    }

    componentWillReceiveProps(nextProps){
      const {jobPostData} = nextProps

      if(jobPostData.job_id){
        $('#job-modal').modal('hide');
      }
    }

    postJob(){
      const {action, jobPostData} = this.props
      action.postJob(jobPostData.title, jobPostData.description)
    }

    onTitleChange(event){
      const {action} = this.props
      action.jobTitleChange(event.target.value)
    }

    onDescriptionChange(event){
      const {action} = this.props
      action.jobDescriptionChange(event.target.value)
    }

    render() {
      return (
            <div className="modal fade" id="job-modal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: 'none'}}>
                <div className="modal-dialog">
                    <div className="jobmodal-container container">
                      <h1>Post A Job!</h1>
                      <br/>
                        <h4>Title</h4>
                        <div className="row" ><input type="text" className="col-xs-12" placeholder="job title..." onChange={this.onTitleChange}></input></div>
                        <h4>Description</h4>
                        <div className="row"><textarea className="col-xs-12" placeholder="job description..." onChange={this.onDescriptionChange}></textarea></div>
                        <div className="row"><div className="text-right"><button type="button" className="btn btn-primary" onClick={this.postJob}>Post</button></div></div>
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
