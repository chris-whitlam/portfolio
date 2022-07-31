import { FC } from "react";

import { Box, Theme, Grid, Typography, Collapse } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { Button, SectionHeading, TextArea, TextField } from "@atoms";
import useSubmitContactForm from "./hooks/useSubmitContactForm";
import React from "react";
import { useFormik } from "formik";

import * as Yup from 'yup';
import { theme } from "@styles";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      width: '80%',
    },
  },
  form: {
    display: 'grid',
    gridGap: theme.spacing(2),
    gridTemplateColumns: 'repeat(1, 1fr)',
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
    minWidth: '100%',
    marginTop: `-${theme.spacing(2)}`
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    marginTop: theme.spacing(2),
    boxSizing: 'content-box',
    width: 'fit-content',
    paddingX: theme.spacing(4)
  },
  errorMessage: {
    textAlign: 'right',
    color: theme.palette.danger.main
  },
  successMessage: {
    textAlign: 'center',
    color: theme.palette.primary.main,
    fontSize: '1.5em',
    marginRight: theme.spacing(1)
  }
}), { name: 'ContactForm' });

const schema = Yup.object({
  name: Yup.string()
    .min(3, "Please enter a name of at least 3 characters")
    .max(30, "Please enter a name less than 30 characters")
    .required('Your name is required'),
  email: Yup.string()
    .email('Please enter a valid email')
    .max(50, "Please enter an email less than 50 characters")
    .required('An email is required'),
  message: Yup.string()
    .required('A message is required')
    .max(200, "Please enter a message less than 200 characters")
});

const ContactForm: FC = () => {
  const styles = useStyles();
  const [submit, { loading, data, error }] = useSubmitContactForm();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: schema,
    onSubmit: submit,
  });

  return (
    <form className={styles.container} onSubmit={formik.handleSubmit}>
      <SectionHeading>Contact me</SectionHeading>
      <Grid container columns={{ xs: 1, md: 4 }} spacing={'20px'}>
        <Grid item xs={4} md={2}>
          <TextField
            label="Name"
            name="name"
            placeholder="Jane Doe"
            onChange={formik.handleChange}
            value={formik.values.name}
            error={formik.errors.name}
            sx={{
              gridColumn: 'span 4',
              gridRow: 'span 1'
            }}
          />
        </Grid>
        <Grid item xs={4} md={2}>
          <TextField
            label="Your email"
            name="email"
            placeholder="jane.doe@example.com"
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.errors.email}
            sx={{
              gridColumn: 'span 4',
              gridRow: 'span 1'
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextArea
            placeholder="Enter your message here"
            name="message"
            onChange={formik.handleChange}
            value={formik.values.message}
            error={formik.errors.message}
            sx={{
              gridColumn: 'span 4',
              gridRow: 'span 1'
            }}
          />
        </Grid>
        {error &&
          <Grid item xs={4}>
            <Typography variant="body2" className={styles.errorMessage}>{error}</Typography>
          </Grid>
        }

        <Grid item xs={4} >
          <Collapse in={!!data}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography variant="body2" className={styles.successMessage}>Message sent</Typography>
              <CheckCircleIcon color='primary' />
            </Box>
          </Collapse >
        </Grid>

        <Grid item xs={4}>
          <Box className={styles.buttonsContainer} sx={{ gridColumn: 'span 4' }}>
            <Button
              className={styles.button}
              endIcon={<SendIcon />}
              type="submit"
              isLoading={loading}
            >
              Send
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  )
}

export default ContactForm;