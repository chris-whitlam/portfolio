import { ArrowLink } from '@atoms';
import { render as rtlRender } from '@testing-library/react';

const render = () =>
  rtlRender(
    <ArrowLink data-test-id="arrow-link" href="https://chriswhitlam.dev">
      View All
    </ArrowLink>
  );

describe('Components -> Atoms -> Arrow Link', () => {
  it('should render component', () => {
    const { getByTestId } = render();

    expect(getByTestId('arrow-link')).toBeInTheDocument();
  });
});
