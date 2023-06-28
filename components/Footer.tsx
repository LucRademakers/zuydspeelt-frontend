import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#f8f8f8',
    color: '#555',
    padding: '0',
    textAlign: 'center',
    fontSize: '14px',
    borderTop: '1px solid #ddd',
    position: 'fixed',
    bottom: '0',
    left: '0', 
    width: '100%',
  };

  const contactStyle = {
    margin: '10px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const socialMediaStyle = {
    margin: '0 5px',
    display: 'inline-block',
    verticalAlign: 'middle',
  };

  const devOpsStyle = {
    display: 'inline-block',
    verticalAlign: 'middle',
    marginLeft: '10px',
  };

  return (
    <footer style={footerStyle}>
      <div style={contactStyle}>
        Contact us on: +31 (0)45 400 60 60 or visit our social media.
        <a href="https://www.instagram.com" style={socialMediaStyle}>
          <img src="instagram.png" alt="Instagram" style={{ width: '20px' }} />
        </a>
        <a href="https://www.facebook.com" style={socialMediaStyle}>
          <img src="Facebook.png" alt="Facebook" style={{ width: '20px' }} />
        </a>
      </div>
      <p>
        &copy; 2023 ZuydSpeelt. All rights reserved.{' '}
        Created with the power of
        <a href="https://moodle.zuyd.nl/course/view.php?id=8929&sectionid=408113#section-1" style={devOpsStyle}>
          <img src="/DevOps.png" alt="DevOps" style={{ width: '50px' }} />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
