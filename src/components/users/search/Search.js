import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class Search extends Component {
    state = {
        text: ''
    }

    handleChange = (e) => {
        this.setState({
            [ e.target.name ]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.searchUsers(this.state.text)
        this.setState({ text: '' })
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit } className="input-group searchbox">
                <input onChange={ this.handleChange } value={ this.state.text } name="text" className="form-control" placeholder="Search the Users" /> 
                <div className="input-group-append">
                    <button className="btn btn-secondary" type="Submit">
                        <FontAwesomeIcon icon={ faSearch} />
                    </button>
                </div>
            </form>
        )
    }
}

export default Search
