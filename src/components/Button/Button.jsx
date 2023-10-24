import css from '../Button/Button.module.css';

const Button = ({ onClick }) => {
  return (
    <button className={css.Button_load} onClick={onClick}>
      Load more
    </button>
  );
};

export default Button;
