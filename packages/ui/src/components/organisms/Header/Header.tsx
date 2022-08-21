import { FC, useEffect, useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Collapse,
  Container,
  IconButton,
  SxProps,
  Toolbar,
  Typography,
  useMediaQuery,
  Theme,
  Slide
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NextLink from 'next/link';
import { theme } from '@styles';
import useScrollDirection, {
  ScrollDirection
} from './hooks/useScrollDirection';

interface Page {
  name: string;
  href: string;
}

interface LogoProps {
  sx?: SxProps<Theme>;
}

const Logo: FC<LogoProps> = ({ sx }) => (
  <Typography
    variant="h6"
    noWrap
    component="a"
    href="/"
    sx={{
      mr: 4,
      display: { xs: 'none', md: 'flex' },
      fontFamily: `'Bungee Hairline', cursive;`,
      fontWeight: 700,
      fontSize: '2rem',
      color: 'white',
      textDecoration: 'none',
      transition: 'all .1s ease-in-out',
      textUnderlineOffset: '0.2em',

      '&:hover': {
        textDecoration: 'none'
      },
      ...sx
    }}
  >
    Chris Whitlam
  </Typography>
);

interface MobileNavProps {
  isOpen: boolean;
  pages: Page[];
  onClick: () => void;
}

const MobileNav: FC<MobileNavProps> = ({ pages, isOpen, onClick }) => (
  <Collapse
    orientation="vertical"
    in={isOpen}
    data-test-id="header-mobile-nav"
    aria-hidden={!isOpen}
  >
    <Container>
      {pages.map(({ name, href }) => (
        <NextLink key={name} passHref href={href}>
          <Button
            sx={{
              my: 2,
              color: 'white',
              display: 'block',
              fontFamily: `'Bungee Hairline', cursive;`,
              fontWeight: 700,
              fontSize: '1rem'
            }}
            onClick={onClick}
          >
            {name}
          </Button>
        </NextLink>
      ))}
    </Container>
  </Collapse>
);

interface DesktopNavProps {
  pages: Page[];
}

const DesktopNav: FC<DesktopNavProps> = ({ pages }) => (
  <Box
    sx={{
      flexGrow: 1,
      display: { xs: 'none', md: 'flex' },
      justifyContent: { md: 'flex-end' }
    }}
    data-test-id="header-desktop-nav"
  >
    {pages.map(({ name, href }, index) => (
      <NextLink key={name} passHref href={href}>
        <Button
          key={name}
          sx={{
            my: 2,
            ml: index === 0 ? 0 : 4,
            color: 'white',
            display: 'block',
            fontFamily: `'Bungee Hairline', cursive;`,
            fontWeight: 700,
            fontSize: 'clamp(0.8rem, 1.5vw, 1.2rem)',
            transition: 'transform .2s ease-in-out',
            textUnderlineOffset: '0.4em',

            '&:hover': {
              textDecoration: 'underline',
              transform: 'scale(1.1)'
            }
          }}
        >
          {name}
        </Button>
      </NextLink>
    ))}
  </Box>
);

const Header = () => {
  const scrollDirection = useScrollDirection();

  const [isMenuOpen, setMenuToggle] = useState(false);
  const isNotMobile = useMediaQuery(() => theme.breakpoints.up('md'));
  const pages: Page[] = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  const handleToggleMenu = () => {
    setMenuToggle((isOpen) => !isOpen);
  };

  useEffect(() => {
    if (isNotMobile) {
      setMenuToggle(false);
    }
  }, [isNotMobile]);

  const MenuToggleIcon = isMenuOpen ? CloseIcon : MenuIcon;

  return (
    <Slide
      direction="down"
      in={
        scrollDirection === ScrollDirection.NONE ||
        scrollDirection === ScrollDirection.UP
      }
    >
      <AppBar position="fixed" data-test-id="header">
        <Container maxWidth="xl" sx={{ paddingX: { xs: 0, md: 4 } }}>
          <Toolbar disableGutters>
            <Logo sx={{ display: { xs: 'none', md: 'flex' } }} />
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={handleToggleMenu}
                data-test-id="header-menu-button"
              >
                <MenuToggleIcon fontSize="inherit" />
              </IconButton>
            </Box>

            <Logo
              sx={{
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontSize: '1.7rem'
              }}
            />
            {isNotMobile && <DesktopNav pages={pages} />}
          </Toolbar>
        </Container>
        {!isNotMobile && (
          <MobileNav
            pages={pages}
            isOpen={isMenuOpen}
            onClick={handleToggleMenu}
          />
        )}
      </AppBar>
    </Slide>
  );
};

export default Header;
