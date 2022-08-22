import '@testing-library/jest-dom/extend-expect';
import fetchMock from 'jest-fetch-mock';
import { configure } from '@testing-library/react';
import React from 'react';

fetchMock.enableMocks();
configure({ testIdAttribute: 'data-test-id' });

jest.mock('@molecules', () => ({
  ...jest.requireActual('@molecules'),
  LazyLoader: ({ children }: any) => children
}));

global.React = React;
