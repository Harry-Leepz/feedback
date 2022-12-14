const Card = ({ children, reverse }) => {
  // conditionally adding css classes
  return <div className={`card ${reverse && "reverse"}`}>{children}</div>;
};

export default Card;
