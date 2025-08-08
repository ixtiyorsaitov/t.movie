import React, { Dispatch, SetStateAction } from "react";
import { Content } from "./types";

const ForgotPassword = ({
  changeContent,
}: {
  changeContent: Dispatch<SetStateAction<Content>>;
}) => {
  return <div>ForgotPassword</div>;
};

export default ForgotPassword;
