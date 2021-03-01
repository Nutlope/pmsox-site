import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { colors, Divider } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import { About, Contact, Faq, Features, Hero, Services } from './components';

import { services, services2, props, faq } from './data';

const useStyles = makeStyles(theme => ({
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  shape: {
    background: theme.palette.alternate.main,
    borderBottomRightRadius: '100%',
    borderBottom: `1px solid ${colors.grey[200]}`,
  },
}));

const WebBasic = () => {
  const classes = useStyles();

  return (
    <div>
      <Section className={classes.pagePaddingTop}>
        <Hero />
      </Section>
      <Section className={classes.sectionNoPaddingTop}>
        <Services data={services} />
      </Section>
      <Divider />
      <SectionAlternate>
        <Contact data={props} />
      </SectionAlternate>
      <div className={classes.shape}>
        <Section className={classes.sectionNoPaddingTop}>
          <About data={services2} />
        </Section>
      </div>
      <Section>
        <Features />
      </Section>
      <Divider />
      <SectionAlternate className={classes.sectionNoPaddingTop}>
        <Faq data={faq} />
      </SectionAlternate>
    </div>
  );
};

export default WebBasic;
