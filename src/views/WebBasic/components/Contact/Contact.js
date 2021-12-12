import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  ListItem,
  ListItemAvatar,
  Typography,
  colors,
} from '@material-ui/core';
import { SectionHeader, IconAlternate, TypedText } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  typed: {
    fontWeight: 'bold',
  },
  listItemAvatar: {
    minWidth: 28,
  },
  formCover: {
    objectFit: 'cover',
    borderBottomLeftRadius: '40%',
  },
  cardProduct: {
    [theme.breakpoints.up('md')]: {
      maxWidth: 400,
    },
  },
}));

const Contact = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <Grid container spacing={4}>
        <Grid
          item
          container
          alignItems="center"
          justify="flex-end"
          xs={12}
          data-aos="fade-up"
        >
          <Grid item>
            <SectionHeader
              label="we get testing done"
              title={
                <>
                  <span>
                    The first marketplace
                    <br />
                    <Typography
                      color="secondary"
                      variant="inherit"
                      component="span"
                    >
                      ever created for&nbsp;
                    </Typography>
                    <TypedText
                      component="span"
                      variant="h4"
                      color="secondary"
                      className={classes.typed}
                      typedProps={{
                        strings: [
                          'SOX compliance.',
                          'crowdtesting.',
                          'testing.',
                        ],
                        typeSpeed: 80,
                        loop: true,
                      }}
                    />
                  </span>
                </>
              }
              subtitle="Using pmSOX for your SOX testing needs means never worrying about meeting a SOX deadline. Our platform, talented testers and robust process will make the testing phase a pleasant experience."
              align="left"
              disableGutter
            />
            <Grid container spacing={0}>
              {data.map((item, index) => (
                <Grid item xs={6} key={index} data-aos="fade-up">
                  <ListItem disableGutters>
                    <ListItemAvatar className={classes.listItemAvatar}>
                      <IconAlternate
                        size="extraSmall"
                        shape="circle"
                        fontIconClass="fas fa-check"
                        color={colors.deepOrange}
                      />
                    </ListItemAvatar>
                    <Typography variant="subtitle1" color="secondary" noWrap>
                      {item}
                    </Typography>
                  </ListItem>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Contact.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Data to render
   */
  data: PropTypes.array.isRequired,
};

export default Contact;
