import React from 'react';
import AuthForm from 'components/AuthForm';
import useUserHandler from 'hooks/useUserHandler';

const Auth = () => {
  const {
    values,
    isSignUp,
    handleToggle,
    handleInput,
    handlesignUp,
    handlesignIn,
  } = useUserHandler();

  return (
    <>
      <AuthForm
        values={values}
        isSignUp={isSignUp}
        handleToggle={handleToggle}
        handleInput={handleInput}
        handlesignUp={handlesignUp}
        handlesignIn={handlesignIn}
      />
    </>
  );
};

export default Auth;
