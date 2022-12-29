import {
  ButtonWrapper,
  Layout,
  LoginBox,
  LoginBoxTitle,
  LoginButton,
  SignUpButton,
} from './signup.styled';

const SignupPage = () => (
  <Layout>
    <LoginBox>
      <LoginBoxTitle>Sign Up</LoginBoxTitle>
      <ButtonWrapper>
        <LoginButton>Log In</LoginButton>
        <SignUpButton>Sign Up</SignUpButton>
      </ButtonWrapper>
    </LoginBox>
  </Layout>
);

export default SignupPage;
