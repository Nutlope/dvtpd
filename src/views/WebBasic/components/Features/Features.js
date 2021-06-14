import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader, CountUpNumber } from 'components/molecules';
import gregImg from './gregdevice.png';

const useStyles = makeStyles(theme => ({
  placementGrid: {
    maxWidth: 375,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  coverImage: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
    },
  },
}));

const Features = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <SectionHeader
                title={
                  <span>
                    Smart and impressively functional.
                    <br />
                    <Typography
                      component="span"
                      variant="inherit"
                      color="primary"
                    >
                      Let our device handle your DVT mitigation.
                    </Typography>
                  </span>
                }
                subtitle="You have a life to get to. Stop being immobilized by wearing a compression stocking in bed all day and try our DVT device if your doctor recommends it for you. Stop worrying about DVT risks or if you're moving enough. Let us handle that for you."
                align="left"
                fadeUp
                disableGutter
              />
            </Grid>
            <Grid item xs={12}>
              <div className={classes.placementGrid}>
                <div>
                  <CountUpNumber
                    end={94}
                    label="Classification accuracy"
                    textColor="primary"
                    suffix="%"
                  />
                </div>
                <div>
                  <CountUpNumber
                    end={1}
                    label="Patent Pending"
                    textColor="primary"
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          xs={12}
          md={6}
          data-aos="fade-up"
        >
          <Image src={gregImg} className={classes.coverImage} />
        </Grid>
      </Grid>
    </div>
  );
};

Features.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Features;
