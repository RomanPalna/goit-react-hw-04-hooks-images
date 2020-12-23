const Button = ({ fetchImages }) => {
  return (
    <button type="button" onClick={fetchImages} className="Button">
      Load more...
    </button>
  );
};

export default Button;
