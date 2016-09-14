import React from 'react'
import ClassNames from 'classnames'
import {Link} from 'react-router'

class JobDetail extends React.Component {
    constructor(props) {
        super(props)
        //
        // const {action} = this.props
        // action.getJobDetail(id)
    }

    getJobFromList(jobId){
      const {searchData} = this.props
      let job = null

      for(var i = 0; i < searchData.searchResult.length; i++){
        var tempJob = searchData.searchResult[i]
        if(tempJob.job_id === jobId){
          job = tempJob
          break
        }
      }

      return job
    }

    render() {
        const {id} = this.props.params
        const job = this.getJobFromList(id)


        return (
            <div className="thumbnail">
                <img className="img-responsive" src="http://placehold.it/800x300" alt=""/>
                <div className="caption-full">
                    <h4 className="pull-right">$24.99</h4>
                    <h4>
                        <a href="#">{job.title}</a>
                    </h4>
                    <p>{job.description}</p>
                </div>
                <div className="ratings">
                    <p className="pull-right">3 reviews</p>
                    <p>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star-empty"></span>
                        4.0 stars
                    </p>
                </div>
            </div>
        )
    }
}

export default JobDetail
