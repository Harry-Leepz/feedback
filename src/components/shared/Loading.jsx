import loading from "../assets/giphy.gif";

const Loading = () => {
  return (
    <img
      src={loading}
      alt='loading spinner gif'
      style={{ width: "100px", margin: "auto", display: "block" }}
    />
  );
};

export default Loading;
