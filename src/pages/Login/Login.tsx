import React from "react";
import CustomButton from "../../components/CustomButton";
import { Container, Form, Input, LoginBox, Title } from "./styles";

const Login = () => {
  return (
    <Container>
      <LoginBox>
        <Title>Frota 2.0</Title>
        <Form>
          <div className="form-group">
            <label htmlFor="username">Usuário</label>
            <Input type="text" id="username" placeholder="Digite seu usuário" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <Input
              type="password"
              id="password"
              placeholder="Digite sua senha"
            />
          </div>
          <CustomButton type="submit" buttonTitle="Entrar" />
        </Form>
      </LoginBox>
    </Container>
  );
};

export default Login;
