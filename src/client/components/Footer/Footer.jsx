import React from 'react';

var footer = {
  position: 'absolute',
  right: 0,
  bottom: 0,
  left: 0,
  padding: '1rem',
  backgroundColor: '#efefef',
  textAlign: 'center',
  height: '100px',
};

const Footer = () => (
  <div style={footer}>
    <div className="container">
      Copyright &copy 2017 Keystone React Template
    </div>
  </div>
);

export default Footer;
