import '@testing-library/jest-dom/extend-expect';
import fetchMock from 'jest-fetch-mock';
import { configure } from '@testing-library/react';
import React from 'react';

fetchMock.enableMocks();
configure({ testIdAttribute: 'data-test-id' });
// whatever else you need in here

global.React = React;
