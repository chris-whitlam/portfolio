import preloadAll from 'jest-next-dynamic';
import { render } from '@testing-library/react';

import Layout from './Layout';

describe('Components -> Templates -> Layout', () => {
  beforeAll(async () => {
    await preloadAll();
  });

  it('should render component correctly', () => {
    const { getByTestId } = render(
      <Layout>
        <div data-test-id="my-content" />
      </Layout>
    );

    expect(getByTestId('header')).toBeInTheDocument();
    expect(getByTestId('main-content')).toBeInTheDocument();
    expect(getByTestId('my-content')).toBeInTheDocument();
    expect(getByTestId('footer')).toBeInTheDocument();
  });
});
