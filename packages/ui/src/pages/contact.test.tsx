import { ThemeProvider } from '@mui/material';
import { theme } from '@styles';
import { ProfileFactory } from '@test/factories';
import { render as rtlRender } from '@testing-library/react';
import { getProfile } from '@graphql';

import Contact, { ContactPageProps, getStaticProps } from './contact';

jest.mock('@graphql', () => ({
  getProfile: jest.fn()
}));

const defaultProps: ContactPageProps = {
  profile: ProfileFactory.build()
};

const render = (props: ContactPageProps = defaultProps) =>
  rtlRender(
    <ThemeProvider theme={theme}>
      <Contact {...props} />
    </ThemeProvider>
  );

describe('Pages -> Contact', () => {
  describe('Component', () => {
    it('should render page correctly', () => {
      const { getByTestId } = render();

      expect(getByTestId('page-title')).toBeInTheDocument();
      expect(getByTestId('page-title')).toHaveTextContent(
        "Let's get in contact"
      );
      expect(getByTestId('socials')).toBeInTheDocument();
      expect(getByTestId('contact-form')).toBeInTheDocument();
    });
  });

  describe('getStaticProps', () => {
    it('should fetch contact data correctly', async () => {
      const getProfileMock = getProfile as jest.Mock;
      getProfileMock.mockResolvedValue(defaultProps);

      const result = await getStaticProps();

      expect(result).toStrictEqual({ props: { profile: defaultProps } });
    });
  });
});
