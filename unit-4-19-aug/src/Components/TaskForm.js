import React, { useState } from "react";

const TaskForm = (props) => {
	const [title, setTitle] = useState("");

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				props.handleSubmit(title);
				setTitle("");
			}}
		>
			<input
				type="text"
				value={title}
				onChange={(e) => {
					setTitle(e.target.value);
				}}
				autoFocus
				className="p-2 rounded border task-input"
				placeholder="Add something?"
			/>
		</form>
	);
};

export default TaskForm;
