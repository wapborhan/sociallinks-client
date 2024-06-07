const Loading = () => {
  return (
    <>
      <div
        className="spinner-border spinner-border-xl text-success"
        role="status"
        style={{ width: "5rem", height: "5rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </>
  );
};

export default Loading;
