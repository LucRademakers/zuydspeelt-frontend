import React from 'react';
import { render } from '@testing-library/react';
import Footer from '@/components/Footer';

test('Controleren of er geen errors zijn bij het renderen', () => {
  render(<Footer />);
});

test('Controleren of de juiste content wordt gerenderd', () => {
    const { getByText, getByAltText } = render(<Footer />);
    
    expect(getByText('Contact us on: +31 (0)45 400 60 60 or visit our social media.')).toBeTruthy();
    
    const instagramImage = getByAltText('Instagram');
    expect(instagramImage).toBeTruthy();
    expect(instagramImage.src).toContain('Instagram.png');
    
    const facebookImage = getByAltText('Facebook');
    expect(facebookImage).toBeTruthy();
    expect(facebookImage.src).toContain('Facebook.png');
    
    expect(getByText('© 2023 ZuydSpeelt. All rights reserved. Created with the power of')).toBeTruthy();
    
    const devOpsImage = getByAltText('DevOps');
    expect(devOpsImage).toBeTruthy();
    expect(devOpsImage.src).toContain('/DevOps.png');
  });