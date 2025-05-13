import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import App  from './App';
import {PhotoViewer} from './PhotoViewer/PhotoViewer'
import {ImageSelector, brokenImages, imageUrls} from './ImageSelector/ImageSelector'


test('renders Hello world text', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/Photo Viewer/i);
  expect(textElement).toBeVisible();
});