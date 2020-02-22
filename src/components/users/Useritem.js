import React, { Component } from 'react'
import { Card, CardBody,CardTitle, Button } from 'reactstrap';


class Useritem extends Component {
    render() {
        const { login, avatar_url, html_url} = this.props.user;
        return (
            <Card>
                <div className="text-center">
                    <img className="c-img" src={avatar_url} alt="" />
                </div>
                <CardBody>
                    <CardTitle>{login}</CardTitle>
                    <Button className="bg-light"><a target="_blank" rel="noopener noreferrer" href={html_url}>Read More</a></Button>
                </CardBody>
            </Card>
        )
    }
}

export default Useritem
