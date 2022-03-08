import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  image: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
    },
  },
}));

const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  let history = useHistory();

  function handleClick() {
    history.push('/contact-page');
  }

  return (
    <div className={className} {...rest}>
      <Grid container justify="space-between" spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={6} data-aos={'fade-up'}>
          <SectionHeader
            title={
              <span>
                Welcome to{' '}
                <Typography component="span" variant="inherit" color="primary">
                  pmSOX.
                </Typography>
                <br />
                <span>A marketplace for all your SOX testing.</span>
              </span>
            }
            subtitle="pmSOX gets Controls Testing done in a matter of hours instead of weeks."
            ctaGroup={[
              <Button
                variant="contained"
                color="secondary"
                size="large"
                // onClick={handleClick}
              >
                <a href="https://pmsox.breezy.hr/?">Open Projects</a>
              </Button>,

              <Button variant="outlined" color="primary" size="large">
                <a href="https://calendly.com/sas70/testing-30-min">
                  Book a meeting
                </a>
              </Button>,

              <Button variant="outlined" color="primary" size="large">
                <a href="https://pmsox.breezy.hr/p/4b11ee7e4acc-customer-success/apply">
                  Instant Quote
                </a>
              </Button>,
            ]}
            align={isMd ? 'left' : 'center'}
            disableGutter
            titleVariant="h3"
          />
        </Grid>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <Image
            src="https://assets.maccarianagency.com/the-front/illustrations/mind-map.svg"
            alt="Mind-map"
            className={classes.image}
          />
        </Grid>
      </Grid>
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
