import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-500 py-2 text-center fixed bottom-0 left-0 w-full">
      <div className="flex items-center justify-center mb-2">
        Contact us on: +31 (0)45 400 60 60 or visit our social media.
        <a href="https://www.instagram.com" className="ml-2">
          <img src="instagram.png" alt="Instagram" className="w-5" />
        </a>
        <a href="https://www.facebook.com" className="ml-2">
          <img src="Facebook.png" alt="Facebook" className="w-5" />
        </a>
      </div>
      <p>
        &copy; 2023 ZuydSpeelt. All rights reserved. Created with the power of{' '}
        <a href="https://moodle.zuyd.nl/course/view.php?id=8929&sectionid=408113#section-1" className="ml-2">
          DevOps <img src="/DevOps.png" alt="DevOps" className="w-10 inline" />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
