import React, { Fragment } from 'react'
import mySpinner from '../../images/spinner.gif'

const Spinner = () =>
    <Fragment>
        <img className="spinner" src={mySpinner} alt="Loading"/>
    </Fragment>

export default Spinner