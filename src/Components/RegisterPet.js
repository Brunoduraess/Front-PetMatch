// components
import Button from "./Button";

// dependencies / hooks
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const RegisterPet = () => {
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

    const onSubmit = (data) => {
        console.log(data)
        // console.log("nome: " + data.name);
        // navigate("/login");
    };

    const [images, setImages] = useState([]);

    const handleImageChange = (event) => {
        const selectedFiles = Array.from(event.target.files);

        if (images.length + selectedFiles.length > 5) {
            alert("Você pode selecionar no máximo 5 imagens.");
            return;
        }

        setImages((prevImages) => [...prevImages, ...selectedFiles]);
    };

    const handleRemoveImage = (index) => {
        setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    };

    return (
        <motion.section
            className="register"
            initial={{ width: 0 }}
            animate={{ width: "auto", transition: { duration: 0.5 } }}
            exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
        >
            <img src="logo-purple.svg" alt="" />
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

            <label htmlFor="telefone">Telefone</label>
            <input
                id="telefone"
                type="text"
                {...register("telefone", {
                    required: "É necessário informar um telefone válido",
                    // pattern:
                    //     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
                placeholder="Escolha seu melhor telefone"
            />
            {errors.telefone && (
                <p className="error">
                    {errors.telefone.message || "Por favor, verifique o telefone"}
                </p>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="petname">Nome do animal</label>
                <input
                    id="petname"
                    type="text"
                    {...register("petname", {
                        // required: "É necessário informar seu nome",
                        maxLength: {
                            value: 25,
                            message: "O número máximo de caracteres é 25",
                        },
                    })}
                    placeholder="Digite o nome do animal. Caso não saiba, deixe em branco."
                />
                {/* {errors.petname && <p className="error">{errors.petname.message}</p>} */}

                <label htmlFor="raca">Raça do animal</label>
                <input
                    id="raca"
                    type="text"
                    {...register("raca", {
                        // required: "É necessário informar um endereço de email",
                        pattern:
                            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                    placeholder="Digite a raça do animal. Caso não saiba, deixe em branco."
                />
                {/* {errors.raca && (
                    <p className="error">
                        {errors.raca.message || "Por favor, verifique a raça digitada"}
                    </p>
                )} */}

                <label htmlFor="idade">Idade do animal</label>
                <input
                    id="idade"
                    type="text"
                    {...register("idade", {
                        // required: "É necessário informar um endereço de email",
                        pattern:
                            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                    placeholder="Digite a idade do animal Caso não saiba, deixe em branco."
                />
{/* 
                {errors.idade && (
                    <p className="error">
                        {errors.idade.message || "Por favor, verifique a idade digitada"}
                    </p>
                )} */}

                <label htmlFor="porte">Porte do animal</label>
                <select
                    id="porte"
                    {...register("porte", {
                        required: "É necessário selecionar o porte do animal",
                    })}
                >
                    <option value="">Selecione o porte</option>
                    <option value="pequeno">Pequeno</option>
                    <option value="medio">Médio</option>
                    <option value="grande">Grande</option>
                </select>

                {errors.porte && (
                    <p className="error">
                        {errors.porte.message || "Por favor, verifique o porte escolhido"}
                    </p>
                )}

                <label htmlFor="images">Imagens do animal</label>
                <input
                    id="images"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                />


                <Button type="submit" children="Cadastrar Pet" />
            </form>
        </motion.section>
    );
};

export default RegisterPet;
