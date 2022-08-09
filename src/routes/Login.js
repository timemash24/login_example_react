import { useState } from 'react';
import './LoginRegister.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="loginregister">
      <form>
        <div>
          <input
            name="email"
            type="email"
            placeholder="이메일"
            value={email}
            onChange={onEmailHandler}
            className="loginregister__input"
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={onPasswordHandler}
            className="loginregister__input"
          />
        </div>
        <div>
          <button
            type="submit"
            onSubmit={onSubmit}
            className="loginregister__btn"
          >
            로그인
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
