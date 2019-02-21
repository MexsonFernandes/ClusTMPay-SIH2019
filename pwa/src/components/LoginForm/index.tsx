import "./scss/index.scss";

import * as React from "react";

import { Button, Form, TextField } from "..";
import { maybe } from "../../core/utils";
import { UserContext } from "../User/context";
import { TypedTokenAuthMutation } from "../User/queries";
import { TokenAuth, TokenAuth_tokenCreate_user } from "../User/types/TokenAuth";

const performLogin = (
  login: (token: string, user: TokenAuth_tokenCreate_user) => void,
  data: TokenAuth
) => {
  const successfull = !data.tokenCreate.errors.length;

  if (successfull) {
    login(data.tokenCreate.token, data.tokenCreate.user);
  }
};

const LoginForm: React.FC = () => (
  <div className="login-form">
    <UserContext.Consumer>
      {({ login }) => (
        <TypedTokenAuthMutation onCompleted={data => performLogin(login, data)}>
          {(tokenCreate, { data, loading }) => {
            return (
              <Form
                errors={maybe(() => data.tokenCreate.errors, [])}
                onSubmit={(evt, { email, password }) => {
                  evt.preventDefault();
                  tokenCreate({ variables: { email, password } });
                }}
              >
                <TextField
                  name="email"
                  autoComplete="email"
                  label="Email Address"
                  type="email"
                  required
                />
                <TextField
                  name="password"
                  autoComplete="password"
                  label="Password"
                  type="password"
                  required
                />
                <div className="login-form__button">
                  <Button type="submit" {...loading && { disabled: true }}>
                    {loading ? "Loading" : "Sign in"}
                  </Button>
                </div>
              </Form>
            );
          }}
        </TypedTokenAuthMutation>
      )}
    </UserContext.Consumer>
  </div>
);

export default LoginForm;
