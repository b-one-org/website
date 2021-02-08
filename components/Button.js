import Link from 'next/link'

const STYLES = ['btn--primary', 'btn--outline','btn--middleblock', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

const Button = ({
  children,
  type,
  linkTo,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link href={linkTo}>
      <a className='btn-mobile'>
        <button
          className={`btn ${checkButtonStyle} ${checkButtonSize}`}
          onClick={onClick}
          type={type}
        >
          {children}
        </button>
      </a>
    </Link>
  );
};

export default Button;