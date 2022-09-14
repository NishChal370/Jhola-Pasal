import { TextField, Stack } from "@mui/material";
import { GreenButton, SubTitle, Title } from "../../../styles/app";
import { SignUpForm, SignUpStack } from "../../../styles/components/home/signUp";


function SignUp() {

      return (
            <SignUpStack spacing={4}>
                  <Stack spacing={2}>
                        <Title>FOR SPECIAL OFFERS JOIN UP</Title>

                        <SubTitle>Sign up for the newsletter and receive 10% off your first order.</SubTitle>
                  </Stack>

                  <SignUpForm component='form'>
                        <TextField id="outlined-basic" label="Email" type='email' required variant="outlined" fullWidth={true} />

                        <GreenButton type='submit' sx={{width:'100%'}}>SING UP NOW</GreenButton>
                  </SignUpForm>
            </SignUpStack>
      )
}

export default SignUp