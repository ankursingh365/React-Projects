function TodoItem1() {
  let todoName = "BUY MILK";
  let todoDate = "02/05/2024";

  return (
    <div class="container text-center">
      <div class="row kg-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
