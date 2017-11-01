import React from 'react';

const Footer = props => (
  <footer className="footer">
    <p>
      Coded by{' '}
      <a href="https://github.com/MrNime" target="blank">
        {props.author}
      </a>
    </p>
  </footer>
);

Footer.defaultProps = {
  author: 'Nicky Meuleman',
};

export default Footer;
