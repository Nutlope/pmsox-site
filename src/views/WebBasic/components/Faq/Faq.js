import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles(theme => ({
  listItemAvatar: {
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(1),
    alignSelf: 'flex-start',
  },
}));

const Faq = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  let history = useHistory();

  function handleClick() {
    history.push('/contact-page');
  }

  return (
    <div className={className} {...rest}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <SectionHeader
            className={classes.listItemAvatar}
            title="Start Today For a Great SOX testing experience."
            subtitle="Get a wonderfully detailed dashboard with daily updates on your SOX Testing project progress and an amazing turnaround testing time."
            align="center"
            ctaGroup={[
              <Button
                color="primary"
                variant="contained"
                size="large"
                onClick={handleClick}
              >
                Contact us now
              </Button>,
            ]}
            disableGutter
            data-aos="fade-up"
          />
        </Grid>
      </Grid>
    </div>
  );
};

Faq.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Faq;
