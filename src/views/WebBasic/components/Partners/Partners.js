import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Image } from 'components/atoms';

const useStyles = makeStyles(theme => ({
  logoImg: {
    maxWidth: 120,
  },
}));

const Partners = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <Grid
        container
        justify="space-between"
        alignItems="center"
        data-aos="fade-up"
      >
        {data.map((partner, index) => (
          <Grid
            item
            container
            justify="center"
            alignItems="center"
            xs={6}
            sm={2}
            key={index}
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              className={classes.logoImg}
              lazy={false}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Partners.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Partners;
