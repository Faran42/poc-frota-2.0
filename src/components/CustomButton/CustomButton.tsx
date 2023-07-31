import React from "react";
import { Button } from "./styles";
import { CustomButtonProps } from '../../interfaces'

const CustomButton = ({ buttonTitle, ...rest}: CustomButtonProps) => {
  return <Button {...rest}>{buttonTitle}</Button>;
};

export default CustomButton;
