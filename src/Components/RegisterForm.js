// components
import Button from "./Button";
import InputMask from 'react-input-mask';

// dependencies / hooks
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// Importa a função registerUser
import { registerUser } from "../Services/Http";

const RegisterForm = () => {
	const navigate = useNavigate();
	const [visiblePassword, setVisiblePassword] = useState({
		password: false,
		passwordRetry: false,
	});

	const handlePasswordType = (passwordInput) => {
		setVisiblePassword({
			...visiblePassword,
			[passwordInput]: visiblePassword[passwordInput] ? false : true,
		});
	};

	// destructuring useForm
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		mode: "onBlur",
		reValidateMode: "onChange",
	});

	const onSubmit = async (data) => {
		try {
			const response = await registerUser(data);
			console.log('Usuário registrado com sucesso:', response);
			navigate("/login");
		} catch (error) {
			console.error('Erro ao registrar o usuário:', error);
		}
	};

	return (
		<motion.section
			className="register"
			initial={{ width: 0 }}
			animate={{ width: "auto", transition: { duration: 0.5 } }}
			exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
		>
			<img src="logo-purple.svg" alt="" />
			<p>
				Ainda não tem cadastro? <br /> Então, antes de buscar seu melhor amigo,
				precisamos de alguns dados:
			</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="name">Nome</label>
				<input
					id="name"
					type="text"
					{...register("name", {
						required: "É necessário informar seu nome",
						maxLength: {
							value: 25,
							message: "O número máximo de caracteres é 25",
						},
					})}
					placeholder="Digite seu nome completo"
				/>
				{errors.name && <p className="error">{errors.name.message}</p>}

				<label htmlFor="phoneNumber">Telefone</label>
				<InputMask
					id="phoneNumber"
					mask="(99) 99999-9999"
					{...register("phoneNumber", {
						required: "É necessário informar seu telefone",
					})}
					placeholder="Digite o seu melhor telefone"
				/>
				{errors.phoneNumber && <p className="error">{errors.phoneNumber.message}</p>}


				<label htmlFor="address">Endereço</label>
				<input
					id="address"
					type="text"
					{...register("address", {
						required: "É necessário informar seu endereço",
					})}
					placeholder="Digite o seu endereço"
				/>
				{errors.name && <p className="error">{errors.address.message}</p>}


				<label htmlFor="email">E-mail</label>
				<input
					id="email"
					type="email"
					{...register("email", {
						required: "É necessário informar um endereço de email",
						pattern:
							/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
					})}
					placeholder="Escolha seu melhor email"
				/>
				{errors.email && (
					<p className="error">
						{errors.email.message || "Por favor, verifique o email digitado"}
					</p>
				)}

				<label htmlFor="about">Sobre você</label>
				<input
					id="about"
					type="text"
					{...register("about", {
						maxLength: {
							value: 25,
							message: "O número máximo de caracteres é 25",
						},
					})}
					placeholder="Nos conte sobre você"
				/>

				<label htmlFor="pass-create">Senha</label>
				<span>
					<span
						onClick={() => handlePasswordType("password")}
						className="pass__view"
					></span>
					<input
						id="pass-create"
						type={visiblePassword.password ? "text" : "password"}
						{...register("password", {
							required: "Crie uma senha"
						})}
						placeholder="Crie uma senha"
					/>
				</span>
				{errors.password && (
					<p className="error">
						{errors.password.message}
					</p>
				)}

				{/* <label htmlFor="pass-confirm">Confirme sua senha</label>
        <span>
          <span
            onClick={() => handlePasswordType("passwordRetry")}
            className="pass__view"
          ></span>
          <input
            id="pass-confirm"
            type={visiblePassword.passwordRetry ? "text" : "password"}
            {...register("confirm_password", {
              required: "Repita a senha criada acima",
              validate: (value) => {
                if (watch("password") !== value) {
                  return "As senhas não batem";
                }
              },
            })}
            placeholder="Repita a senha criada acima"
          />
        </span>
        {errors.confirm_password && (
          <p className="error">{errors.confirm_password.message}</p>
        )} */}

				<Button type="submit" children="Cadastrar" />
			</form>
		</motion.section>
	);
};

export default RegisterForm;
