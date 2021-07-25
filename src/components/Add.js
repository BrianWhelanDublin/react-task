import { useState } from "react";

const Add = () => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  return (
    <form className="add-form">
      <div className="form-control">
        <label htmlFor="task">Task</label>
        <input
          type="text"
          name="task"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="day">Day</label>
        <input
          type="text"
          name="day"
          placeholder="Add Date"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="reminder">Reminder</label>
        <input
          type="checkbox"
          name="reminder"
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
  );
};

export default Add;
