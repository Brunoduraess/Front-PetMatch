// dependencies
import { motion } from "framer-motion";
import { useEffect, useContext } from "react";
import { useForm } from "react-hook-form";

// components
import Button from "./Button.js";

// contexts
import { AuthContext } from "../contexts/auth.js";

// services
import { loginUser } from "../Services/Http.js";

const LoginForm = () => {
	// destructuring AuthContext
	const { login } = useContext(AuthContext);

	// destructuring useForm
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: "onBlur",
		reValidateMode: "onChange",
	});

	const onSubmit = (data) => {
		login(data.email, data.password);
		// navigate("/home");
	};

	let element = "";

	const changeType = (id) => {
		element = document.querySelector(id);
		if (element.type === "password") {
			element.setAttribute("type", "text");
		} else {
			element.setAttribute("type", "password");
		}
	};

	useEffect(() => { }, [element]);

	return (
		<motion.section
			className="register"
			initial={{ width: 0 }}
			animate={{ width: "100%", transition: { duration: 0.5 } }}
			exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
		>
			<img src="logo-purple.svg" alt="" />
			<p>Já tem conta? Faça seu login:</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="email">E-mail</label>
				<input
					id="email"
					type="email"
					{...register("email", {
						required: "É necessário informar um endereço de email",
						pattern:
							/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
					})}
					placeholder="Insira seu email"
				/>
				{errors.email && (
					<p className="error">
						{errors.email.message || "Por favor, verifique o email digitado"}
					</p>
				)}

				<label htmlFor="pass">Senha</label>
				<span>
					<span
						onClick={() => changeType("#pass")}
						className="pass__view"
					></span>
					<input
						id="pass"
						type="password"
						{...register("password", {
							required: "Insira sua senha",
						})}
						placeholder="Insira sua senha"
					/>
				</span>
				{/* {errors.password && (
					<p className="error">
						{errors.password.message ||
							"Senha incorreta"}
					</p>
				)} */}

				<a className="register__forgot" href="#">
					Esqueci minha senha
				</a>
				<Button type="submit" children="Entrar" />
				{/* <p>Ainda não tem conta?</p> */}
				<a href="/cadastro" className="register__newUser">Ainda não tem conta? Faça seu cadastro</a>
			</form>
		</motion.section>
	);
};

export default LoginForm;
