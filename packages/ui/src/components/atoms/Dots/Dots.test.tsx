import { Dots } from '@atoms';
import { render as rtlRender } from '@testing-library/react';
import { DotsProps } from './Dots';

const render = (props: DotsProps) =>
  rtlRender(<Dots data-test-id="dots" {...props} />);

describe('Components -> Atoms -> Dots', () => {
  it('should render component', () => {
    const currentIndex = 1;
    const { getByTestId } = render({ totalDots: 3, currentIndex });

    expect(getByTestId('dots')).toBeInTheDocument();
    expect(getByTestId(`dot-${currentIndex}`)).toHaveAttribute(
      'aria-current',
      'true'
    );
  });
});
