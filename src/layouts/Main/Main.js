import { Divider, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Footer, Sidebar, Topbar } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
}));

const Main = ({ children, themeToggler, themeMode }) => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const pages = {
    landings: {
      title: 'Home',
      id: 'landing-pages',
      href: '/',
      children: {
        services: {
          groupTitle: 'Services',
          pages: [
            {
              title: 'Job Listing',
              href: '/job-listing',
            },
          ],
        },
        apps: {
          groupTitle: 'Apps',
          pages: [
            {
              title: 'Desktop App',
              href: '/desktop-app',
            },
          ],
        },
        web: {
          groupTitle: 'Web',
          pages: [
            {
              title: 'Basic',
              href: '/web-basic',
            },
          ],
        },
      },
    },
    pages: {
      title: 'About Us',
      id: 'supported-pages',
      href: '/about',
      children: {
        career: {
          groupTitle: 'Career',
          pages: [
            {
              title: 'Listing',
              href: '/career-listing',
            },
          ],
        },
        helpCenter: {
          groupTitle: 'Help center',
          pages: [
            {
              title: 'Overview',
              href: '/help-center',
            },
          ],
        },
        company: {
          groupTitle: 'Company',
          pages: [
            {
              title: 'About (Cover)',
              href: '/about-side-cover',
            },
          ],
        },
        contact: {
          groupTitle: 'Contact',
          pages: [
            {
              title: 'Sidebar Map',
              href: '/contact-sidebar-map',
            },
          ],
        },
        blog: {
          groupTitle: 'Blog',
          pages: [
            {
              title: 'Newsroom',
              href: '/blog-newsroom',
            },
          ],
        },
        portfolio: {
          groupTitle: 'Portfolio',
          pages: [
            {
              title: 'Basic',
              href: '/portfolio-page',
            },
          ],
        },
      },
    },
    testers: {
      title: 'For Testers',
      id: 'testers-pages',
      href: 'https://pmsox.breezy.hr/?',
    },
    pricing: {
      title: 'Business Model',
      id: 'pricing',
      // href: 'https://pmsox-pricing.vercel.app/',
      href: 'https://www.youtube.com/watch?v=XHQx4ajvxYk',
    },
    account: {
      title: 'Contact Us',
      id: 'account',
      href: '/contact-page',
      children: {
        settings: {
          groupTitle: 'Settings',
          pages: [
            {
              title: 'General',
              href: '/account/?pid=general',
            },
          ],
        },
        signup: {
          groupTitle: 'Sign up',
          pages: [
            {
              title: 'Simple',
              href: '/signup-simple',
            },
          ],
        },
        signin: {
          groupTitle: 'Sign in',
          pages: [
            {
              title: 'Simple',
              href: '/signin-simple',
            },
          ],
        },
        password: {
          groupTitle: 'Password reset',
          pages: [
            {
              title: 'Simple',
              href: '/password-reset-simple',
            },
          ],
        },
        error: {
          groupTitle: 'Error',
          pages: [
            {
              title: 'Simple',
              href: '/not-found',
            },
          ],
        },
      },
    },
  };

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      <Topbar
        onSidebarOpen={handleSidebarOpen}
        pages={pages}
        themeMode={themeMode}
        themeToggler={themeToggler}
      />
      {/* Sidebar for small screens */}
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        pages={pages}
      />
      <main>
        <Divider />
        {children}
      </main>
      <Footer pages={pages} />
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
};

export default Main;
