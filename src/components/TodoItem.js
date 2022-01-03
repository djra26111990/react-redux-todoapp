export const TodoItem = (props) => {
  return (
    <div style={{ padding: '4px'}}>
      <ul>
        {!props.isComplete ? (
          <li style={{ listStyle: 'none'}}>{props.todo}</li>
        ) : (
          <li style={{ listStyle: 'none'}}>
            <del>{props.todo}</del>
          </li>
        )}
        {props.deleteButton}
        {props.updateButton}
      </ul>
    </div>
  );
};
