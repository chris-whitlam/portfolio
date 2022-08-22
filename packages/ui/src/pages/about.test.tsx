import { ThemeProvider } from '@mui/material';
import { theme } from '@styles';
import { render as rtlRender } from '@testing-library/react';
import { ProfileFactory } from '@test/factories';
import { RichTextContent } from '@test/types';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import createMockRouter from '@test/utils/createMockRouter';

import { getProfile } from '@graphql';
import AboutPage, { AboutPageProps, getStaticProps } from './about.page';

jest.mock('@graphql', () => ({
  getProfile: jest.fn()
}));

const defaultProps: AboutPageProps = {
  profile: ProfileFactory.build()
};

const render = (profile = ProfileFactory.build()) =>
  rtlRender(
    <ThemeProvider theme={theme}>
      <RouterContext.Provider value={createMockRouter()}>
        <AboutPage profile={profile} />
      </RouterContext.Provider>
    </ThemeProvider>
  );

describe('Pages -> About', () => {
  describe('Component', () => {
    it('should render page correctly', () => {
      const profile = ProfileFactory.build();
      const bio = profile.bio as RichTextContent;
      const { getByTestId, getAllByTestId, container } = render(profile);

      const titles = container.querySelectorAll('h3');
      const paragraph = container.querySelector('p');

      expect(getAllByTestId('page-title')[0]).toHaveTextContent('About');
      expect(getByTestId('about')).toBeInTheDocument();
      expect(titles[0]).toHaveTextContent(bio.children[0].children[0].text);
      expect(paragraph).toHaveTextContent(bio.children[1].children[0].text);
      expect(getByTestId('skills')).toBeInTheDocument();
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
