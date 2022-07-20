import { FC, useState, useCallback, ForwardedRef } from "react";

import { Box, Theme, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SendIcon from '@mui/icons-material/Send';

import { Button, SectionHeading, TextArea, TextField } from "@atoms";
import useSubmitContactForm from "./hooks/useSubmitContactForm";
import React from "react";

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
  }
}), { name: 'ContactForm' });

const ContactForm = React.forwardRef((props, ref: ForwardedRef<HTMLInputElement>) => {
  const styles = useStyles();
  const [submit, { loading }] = useSubmitContactForm();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = useCallback(
    () => {
      const body = {
        name,
        email,
        message
      }
      submit(body)
    },
    [name, email, message, submit]
  );

  return (
    <Box className={styles.container}>
      <SectionHeading>Contact me</SectionHeading>
      <Grid container columns={{ xs: 1, md: 4 }} spacing={'20px'}>
        <Grid item xs={4} md={2}>
          <TextField
            ref={ref}
            label="Name"
            name="name"
            placeholder="Jane Doe"
            onChange={(event) => setName(event.target.value)}
            value={name}
            sx={{
              gridColumn: 'span 4',
              gridRow: 'span 1'
            }}
          />
        </Grid>
        <Grid item xs={4} md={2}>
          <TextField

            label="Email"
            name="email"
            placeholder="jane.doe@example.com"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
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
            onChange={(event) => setMessage(event.target.value)}
            value={message}
            sx={{
              gridColumn: 'span 4',
              gridRow: 'span 1'
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Box className={styles.buttonsContainer} sx={{ gridColumn: 'span 4' }}>
            <Button
              className={styles.button}
              endIcon={<SendIcon />}
              onClick={handleSubmit}
              isLoading={loading}
            >
              Send
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box >
  )
})

export default ContactForm;