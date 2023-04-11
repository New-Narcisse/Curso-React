export const ShowReset = ({ reset }) => {
  return (
    <button
      className="btn btn-outlin-primary"
      onClick={() => {
        reset();
      }}
    >
      Reset
    </button>
  );
};
