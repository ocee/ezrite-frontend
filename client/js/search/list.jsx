import React from 'react'
import ClassNames from 'classnames'

class List extends React.Component {
    render() {
      const {data} = this.props
        return (
          <li className="row list-item">

            <div className="col-md-7">
                <a href="#">
                    <img className="img-responsive" src="http://www.michaelbtaylorlaw.com/images/contract-being-signed.jpg" alt=""/>
                </a>
            </div>
            <div className="col-md-5">
                <h3>{data.title}</h3>
                <h4>Subheading</h4>
                <p>{data.description}</p>
                <a className="btn btn-primary" href="#">View Project <span className="glyphicon glyphicon-chevron-right"></span></a>
            </div>
        </li>
        )
    }
}

export default List
