const Button = ({ id, value, onClick }) => (
  <button
    id={id}
    className="btn btn-light fs-2 h-100 w-100 d-flex justify-content-center align-items-center"
    onClick={() => onClick(value)}
  >
    {value}
  </button>
);

export default Button;
