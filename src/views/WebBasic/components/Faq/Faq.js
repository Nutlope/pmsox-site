import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Button,
  colors,
} from '@material-ui/core';
import { SectionHeader, IconAlternate } from 'components/molecules';

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

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container spacing={4}>
        {/* <Grid item xs={12}>
          <Grid container spacing={isMd ? 4 : 2}>
            {data.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ListItem disableGutters key={index} data-aos="fade-up">
                  <ListItemAvatar className={classes.listItemAvatar}>
                    <IconAlternate
                      size="small"
                      shape="circle"
                      fontIconClass={'fas fa-question'}
                      color={colors.amber}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.title}
                    secondary={item.text}
                    primaryTypographyProps={{
                      variant: 'h6',
                    }}
                    secondaryTypographyProps={{
                      variant: 'subtitle1',
                    }}
                  />
                </ListItem>
              </Grid>
            ))}
          </Grid>
        </Grid> */}
        <Grid item xs={12}>
          <SectionHeader
            className={classes.listItemAvatar}
            title="Book PMSOX and save your time."
            subtitle="Get a wonderfully detailed dashboard with daily updates on your SOX project and a thorough test plan by the end."
            align="center"
            ctaGroup={[
              <Button color="primary" variant="contained" size="large">
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
