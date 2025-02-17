import { createTask } from "@/utils/actions";

const TaskForm = () => {
  return (
    <form action={createTask}>
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="type here"
          name="content"
          required
        />
      </div>

      <button type="submit" className="btn btn-primary join-item">Create task</button>
    </form>
  );
};

export default TaskForm;
