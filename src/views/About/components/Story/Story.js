import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(() => ({
  image: {
    maxWidth: 420,
  },
}));

const Twopara = () => {
  return (
    <div>
      <p>
        Over 900,000 people annually are affected by Deep Vein Thrombosis (DVT),
        a serious condition that occurs when a blood clot forms in a vein,
        typically in the lower extremity. Out of those 900,00 people, 20% die,
        and this number continues to rise with the presence of a global pandemic
        that exacerbates the situation for surgical patients subjected to long
        periods of immobilization. Because of the large influx of hospitalized
        patients, preventative devices on the market are being used more
        frequently to minimize the risk of DVT. Unfortunately, there are
        challenges with current solutions with regards to design and patient
        compliance. Despite existing efforts to increase blood flow through
        compression, devices today have immobilized patients and proven to be
        less effective. Thus, their reliability can be improved through a device
        designed to alleviate these issues while increasing patient compliance.
      </p>
      <br></br>
      <p>
        DVT-PD’s objective is to provide an unobtrusive and affordable option
        that mitigates the risk of DVT for sedated patients before, after, and
        during surgery. Findings indicate a need for a wearable device designed
        to sense the user’s dynamic or static movements and actuate to promote
        blood flow in the lower legs. A developed control system broken down
        into 3 classes - sensing, classifying, and actuating - will be utilized
        to collect muscle activity data that will be input into a machine
        learning model to be processed, which will prompt the device to actuate,
        effectively reducing the risks of DVT.
      </p>
    </div>
  );
};
const Story = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid
        container
        justify="space-between"
        spacing={isMd ? 4 : 2}
        direction={isMd ? 'row' : 'column-reverse'}
      >
        <Grid
          item
          container
          alignItems="center"
          justify="flex-start"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <div>
            <SectionHeader
              title="Background"
              subtitle={<Twopara />}
              align="left"
              disableGutter
              subtitleProps={{
                color: 'textPrimary',
                variant: 'body1',
              }}
            />
          </div>
        </Grid>
        <Grid
          item
          container
          justify={isMd ? 'flex-end' : 'flex-start'}
          alignItems="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <Image
            src="https://assets.maccarianagency.com/the-front/illustrations/working-on-sofa.svg"
            alt="Our story"
            className={classes.image}
          />
        </Grid>
      </Grid>
    </div>
  );
};

Story.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Story;
