import styled from 'styled-components';
import { Button } from '@mantine/core';

export const Layout = styled.main`
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginBox = styled.div`
  padding: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid orange;
  border-radius: 8px;
`;

export const LoginBoxTitle = styled.h1`
  display: block;
  font-size: 14px;
  white-space: nowrap;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
`;

export const LoginButton = styled(Button)`
  background-color: aliceblue;
`;

export const SignUpButton = styled(Button)`
  background-color: antiquewhite;
`;
