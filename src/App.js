import React from 'react';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import Search from './components/users/search/Search' 
import './App.css';
import Axios from 'axios';


class App extends React.Component {
    state = {
      users: [],
      loading: false
    }

    searchUsersProps = async text => {
      this.setState({ loading: true })
      const res = await Axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      this.setState({ users : res.data.items, loading: false })
    }

  render() {
    return (
      <div className="App">
        <Navbar logo="Github Finder by DEVELOPERJAHID.COM" />
        <Search searchUsers={ this.searchUsersProps } />
        <Users loading={this.state.loading} users={this.state.users} />
      </div>
    );
  }
}

export default App
