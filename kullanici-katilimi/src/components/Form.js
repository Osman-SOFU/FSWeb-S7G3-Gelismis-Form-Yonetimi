import React from "react";

const Form = (props) => {
  const { handleChange, submitDisable, handleSubmit } = props;
  const {
    name = "",
    email = "",
    password = "",
    terms = false,
  } = props.member || {};

  return (
    <div>
      <form data-cy="test-submit" onSubmit={handleSubmit}>
        <label htmlFor="name">
          İsim Soyisim:
          <input
            id="name"
            name="name"
            onChange={handleChange}
            value={name}
            type="text"
            data-cy="test-name"
            required
          />
        </label>
        <br />
        <label htmlFor="email">
          Email:
          <input
            id="email"
            name="email"
            onChange={handleChange}
            value={email}
            type="email"
            data-cy="test-email"
            required
          />
        </label>
        <br />
        <label htmlFor="password">
          Şifre:
          <input
            id="password"
            name="password"
            onChange={handleChange}
            value={password}
            type="password"
            data-cy="test-password"
            required
          />
        </label>
        <br />
        <label htmlFor="terms">
          <input
            id="terms"
            name="terms"
            onChange={handleChange}
            checked={terms}
            type="checkbox"
            data-cy="test-terms"
          />
          Kullanım şartlarını kabul ediyorum.
        </label>
        <br />
        <input
          type="submit"
          value="Kaydet"
          disabled={submitDisable}
          data-cy="test-button"
        />
      </form>
    </div>
  );
};

export default Form;
