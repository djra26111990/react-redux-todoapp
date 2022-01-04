export const ButtonAction = ({ children, ...props }) => {
  return (
    <>
      <button className={props.className} type="button" onClick={props.onClick}>
        {children}
      </button>
    </>
  );
};
