import { render } from '@testing-library/react';
import { PageTitle, SectionHeading } from './Heading';

describe('Components -> Atoms -> Heading', () => {
  describe('Page Title', () => {
    const testId = 'page-title';

    it('should render component', () => {
      const { getByTestId } = render(
        <PageTitle data-test-id={testId}>Page Title</PageTitle>
      );

      expect(getByTestId(testId)).toBeInTheDocument();
    });
  });

  describe('Section Heading', () => {
    const testId = 'section-heading';

    it('should render component', () => {
      const { getByTestId, queryByTestId } = render(
        <SectionHeading data-test-id={testId}>Section Heading</SectionHeading>
      );

      expect(getByTestId(testId)).toBeInTheDocument();
      expect(queryByTestId('arrow-link')).not.toBeInTheDocument();
    });

    it('should render arrow link when href passed as prop', () => {
      const { getByTestId } = render(
        <SectionHeading data-test-id={testId} href="https://chriswhitlam.dev">
          Section Heading
        </SectionHeading>
      );

      expect(getByTestId(testId)).toBeInTheDocument();
      expect(getByTestId('arrow-link')).toBeInTheDocument();
    });
  });
});
