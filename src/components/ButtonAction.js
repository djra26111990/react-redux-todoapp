export const ButtonAction = ({ children, ...props }) => {
  return (
    <>
      <button type="button" onClick={props.onClick}>
        {children}
      </button>
    </>
  );
};
