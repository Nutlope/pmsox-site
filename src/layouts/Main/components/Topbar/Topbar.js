import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar, List, ListItem, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import logo_dark from './Logo_transparent.png';

const useStyles = makeStyles(theme => ({
  flexGrow: {
    flexGrow: 1,
  },
  navigationContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toolbar: {
    zIndex: 999,
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 8),
    },
  },
  navLink: {
    '&:hover': {
      color: theme.palette.primary.dark,
    },
    color: '#2d3748',
    fontSize: '1rem',
    fontFamily: 'Lato',
    fontWeight: 400,
    lineHeight: 1.5,
  },
  listItem: {
    cursor: 'pointer',
  },
  listItemActive: {
    '&> .menu-item': {
      color: theme.palette.primary.dark,
    },
  },
  listItemText: {
    flex: '0 0 auto',
    marginRight: theme.spacing(2),
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    color: 'red',
  },
  listItemButton: {
    whiteSpace: 'nowrap',
  },
  listItemIcon: {
    minWidth: 'auto',
  },
  popover: {
    padding: theme.spacing(4),
    border: theme.spacing(2),
    boxShadow: '0 0.5rem 2rem 2px rgba(116, 123, 144, 0.09)',
    minWidth: 350,
    marginTop: theme.spacing(2),
  },
  iconButton: {
    marginLeft: theme.spacing(2),
    padding: 0,
    '&:hover': {
      background: 'transparent',
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
    color: theme.palette.primary.dark,
  },
  logoContainer: {
    width: 100,
    height: 28,
    [theme.breakpoints.up('md')]: {
      width: 120,
      height: 32,
    },
  },
  logoImage: {
    width: '120px',
    height: '120px',
    marginTop: '-42px',
  },
  menu: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuItem: {
    marginRight: theme.spacing(5),
    '&:last-child': {
      marginRight: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
  },
}));

const Topbar = ({
  themeMode,
  themeToggler,
  onSidebarOpen,
  pages,
  className,
  ...rest
}) => {
  const classes = useStyles();

  const landings = pages.landings;
  const supportedPages = pages.pages;
  const account = pages.account;

  return (
    <Toolbar disableGutters className={classes.toolbar} {...rest}>
      <div className={classes.logoContainer}>
        <a href="/" title="thefront">
          <Image
            className={classes.logoImage}
            src={logo_dark}
            alt="logo"
            lazy={false}
          />
        </a>
      </div>
      <div className={classes.flexGrow} />
      <List disablePadding className={classes.navigationContainer}>
        {[landings, supportedPages, account].map((page, i) => (
          <div key={page.id}>
            <ListItem
              aria-describedby={page.id}
              className={clsx(classes.listItem)}
            >
              <Typography
                variant="body1"
                color="textPrimary"
                className={clsx(classes.listItemText, 'menu-item')}
              >
                <a href={page.href} className={classes.navLink}>
                  {page.title}
                </a>
              </Typography>
            </ListItem>
          </div>
        ))}
      </List>
    </Toolbar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object.isRequired,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
};

export default Topbar;
