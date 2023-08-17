export const Feedbacks = ({ onClick }) => {
  return (
    <>
      {/* <h1> Please leave feedback </h1> */}
      <button
        type="submit"
        onClick={() => {
          onClick('good');
        }}
      >
        Good
      </button>
      <button
        type="submit"
        onClick={() => {
          onClick('neutral');
        }}
      >
        Neutral
      </button>
      <button
        type="submit"
        onClick={() => {
          onClick('bad');
        }}
      >
        Bad
      </button>
    </>
  );
};
