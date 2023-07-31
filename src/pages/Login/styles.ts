import styled from "styled-components";

import background from "../../commom/images/bg-login.jpg";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const LoginBox = styled.div`
  background-color: #fff;
  max-width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
`;

export const Form = styled.form`
  .form-group {
    text-align: left;
    margin-bottom: 10px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #ddd;
`;
