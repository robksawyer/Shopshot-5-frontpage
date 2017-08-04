import React, {Component} from 'react';
// import 'semantic-ui-css/dist/semantic.min.css';

import { Link } from 'react-router';
import { Container, Menu, Button, Icon, Image } from 'semantic-ui-react';

const style = {
  h1: {
    marginTop: '3em',
  },
  h2: {
    margin: '4em 0em 2em',
  },
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  },
  last: {
    marginBottom: '300px',
  },
}

const Navigation = () => (
  <Container>
    <Menu inverted pointing secondary size='large'>
      <Menu.Item as='a' active>Home</Menu.Item>
      <Menu.Item as='a'>Work</Menu.Item>
      <Menu.Item as='a'>Company</Menu.Item>
      <Menu.Item as='a'>Careers</Menu.Item>
      <Link to='/users' className="item">Users</Link>
      <Menu.Item position='right'>
        <Button as='a' inverted>Log in</Button>
        <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
      </Menu.Item>
    </Menu>
  </Container>
);

export default Navigation;
