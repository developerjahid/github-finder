import React from 'react'
import { CardDeck } from 'reactstrap';
import Useritem from './Useritem'
import Spinner from '../layout/Spinner/Spinner'
import Proptypes from 'prop-types'

const Users = ({ users, loading }) => {
    if(loading) {
        return <Spinner />
    } else {
        return(
          <div className="mycard container text-center">
            <CardDeck>
                {users.map(user => (
                    <Useritem key={user.id} user={user} />
                ))}
            </CardDeck>
        </div>   
        ) 
    }    
}

Users.propTypes = {
    users: Proptypes.array.isRequired,
    loading: Proptypes.bool.isRequired
}

export default Users
