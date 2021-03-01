import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./App.css";

const schema = yup.object().shape({
	name: yup.string().required("Please enter your name"),
	email: yup.string().required("Please enter an email address").email("Please enter a valid email address"),
	message: yup.string().required("Please enter your message").min(10, "The message must be at least 10 characters"),
});

function App() {
	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	function onSubmit(data) {
		console.log(data);
	}

	console.log(errors);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input name="name" ref={register} />
			{errors.name && <span>{errors.name.message}</span>}

			<input name="email" ref={register} />
			{errors.email && <span>{errors.email.message}</span>}

			<textarea name="message" ref={register}></textarea>
			{errors.message && <span>{errors.message.message}</span>}

			<button>Send</button>
		</form>
	);
}

export default App;
