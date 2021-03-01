import { useForm } from "react-hook-form";

function SimpleExample() {
	const { register, handleSubmit, errors } = useForm();

	function onSubmit(data) {
		console.log(data);
	}

	console.log(errors);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input name="firstNmame" ref={register} />

			<input name="lastName" ref={register({ required: true })} />
			{errors.lastName && <span>This field is required</span>}

			<button>Send</button>
		</form>
	);
}

export default SimpleExample;
