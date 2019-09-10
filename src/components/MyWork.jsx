import React, { Component } from 'react'
import {Collapsible, CollapsibleItem, Icon, Col, ProgressBar} from 'react-materialize';

export default class MyWork extends Component {

    constructor(props) {
        super(props);
        this.state = {
          items: [],
          isLoading: true
        };
      }
    
    componentDidMount() {
        fetch("https://api.github.com/users/juunnn/repos?sort=updated")
        .then(response => response.json())
        .then(data => this.setState({ items: data, isLoading: false }));
    }

    render() {
        const { items, isLoading } = this.state;
        if (isLoading) {
            return(
            <Col s={12}>
                <ProgressBar/>
            </Col>);
        }
        
        return (
            <div className={'container'}>
                <Collapsible popout>
                {items.map((item, idx) => (
                    <CollapsibleItem header={this.renameRepo(item.name)} key={idx}>
                        Created at {item.created_at}.format('MM/DD/YYYY h:mm a');<br/>
                        {item.description}
                        <br />
                        <a href={item.html_url}><Icon> call_made </Icon></a>
                    </CollapsibleItem>
                ))}
                </Collapsible>
            </div>
        )
    }

    renameRepo(reponame){
        var url = 'https://github.com/juunnn/'.concat(reponame);
        reponame = reponame.toUpperCase();
        reponame = reponame.replace(/-/g,' ');
        return (<h4> {reponame} <a href={url}><Icon> call_made</Icon></a> </h4>);
    }
}
