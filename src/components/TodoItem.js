export const TodoItem = (props) => {
  return (
    <div className="container mx-auto text-center my-5 p-1">
      <table className="table-fixed w-full">
        <tbody>
          <tr>
            {!props.isComplete ? (
              <td>{props.todo}</td>
            ) : (
              <td>
                <del>{props.todo}</del>
              </td>
            )}
            <td>{props.updateButton}</td>
            <td>{props.deleteButton}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
