import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Grid,
  ListItem,
  ListItemAvatar,
  Typography,
  TextField,
  Button,
  colors,
} from '@material-ui/core';
import { SectionHeader, IconAlternate, TypedText } from 'components/molecules';
import { CardProduct } from 'components/organisms';
import contactImage from './contact.png';

const FKTextField = withStyles({
  root: {
    '& .MuiInput-underline:before': {
      borderBottom: `1px solid ${colors.blueGrey[50]}`,
    },
    '& .MuiInput-underline:after': {
      borderBottom: `1px solid ${colors.indigo[200]}`,
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottom: `1px solid ${colors.indigo[200]}`,
    },
  },
})(TextField);

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
    paddingTop: '100px',
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
          justify="flex-start"
          alignItems="center"
          xs={12}
          md={6}
          data-aos="fade-up"
        >
          <CardProduct
            className={classes.cardProduct}
            withShadow
            liftUp
            mediaContent={
              <img
                src={contactImage}
                width="400"
                height="250"
                alt="Contact cover"
                className={classes.formCover}
                lazy={false}
              />
            }
            cardContent={
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <FKTextField
                    placeholder="Full Name"
                    label="Full Name *"
                    size="medium"
                    name="fullname"
                    fullWidth
                    type="text"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FKTextField
                    placeholder="Email"
                    label="Email *"
                    size="medium"
                    name="email"
                    fullWidth
                    type="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FKTextField
                    placeholder="Industry"
                    label="Industry"
                    size="medium"
                    name="industry"
                    fullWidth
                    type="text"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                  >
                    Contact us
                  </Button>
                </Grid>
              </Grid>
            }
          />
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          justify="flex-end"
          xs={12}
          md={6}
          data-aos="fade-up"
        >
          <Grid item>
            <SectionHeader
              title={
                <>
                  <span>
                    The first DVT prevention device
                    <br />
                    <Typography
                      color="primary"
                      variant="inherit"
                      component="span"
                    >
                      that is&nbsp;
                    </Typography>
                  </span>
                  <TypedText
                    component="span"
                    variant="h4"
                    color="primary"
                    className={classes.typed}
                    typedProps={{
                      strings: [
                        'wearable',
                        'smart',
                        'non-obtrusive.',
                        'comfortable.',
                        'highly compliant',
                      ],
                      typeSpeed: 80,
                      loop: true,
                    }}
                  />
                </>
              }
              subtitle="The device features a comprehensive control system broken down into sensing (accelerometer collecting spatial data), processing (ML model to predict patient's activity & actuation algorithm), & actuation (neuromuscular stimulation to get blood flow pumping activated by the actuation algorithm) effectively reducing the risks of DVT."
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
                        color={colors.blue}
                      />
                    </ListItemAvatar>
                    <Typography variant="subtitle1" color="primary" noWrap>
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
