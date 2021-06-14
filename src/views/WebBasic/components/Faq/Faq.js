import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';

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

  return (
    <div className={className} {...rest}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <SectionHeader
            className={classes.listItemAvatar}
            title="Interested in our device?"
            subtitle="Get in touch."
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
