const Square = ({ value, onClickHandler }) => {
  return (
    <>
      <div
        onClick={onClickHandler}
        className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg text-center"
      >
        {value}
      </div>
    </>
  );
};

export default Square;
