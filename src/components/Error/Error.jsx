import style from './Error.module.css';

const Error = ({ error }) => {
  return <p className={style.error}>{error}</p>;
};

export default Error;
