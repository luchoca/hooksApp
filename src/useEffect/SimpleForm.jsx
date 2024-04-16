import { useState } from "react";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "luchoca",
    email: "luciano@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="UserName"
        name="username"
        value={username}
        onChange={onInputChange()}
      />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="luciano@gmail.com"
        name="email"
        value={email}
      />
    </>
  );
};
