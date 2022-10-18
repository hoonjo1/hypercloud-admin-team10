import React from 'react';
import Form from 'components/Form';
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
      <Form
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
