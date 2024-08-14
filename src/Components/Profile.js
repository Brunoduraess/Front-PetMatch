// styles
import Button from './Button';

// dependencies
import { motion } from 'framer-motion';
import { useForm } from "react-hook-form";

// assets
import loggedUser from '../assets/logged-user.png';

const Profile = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange'
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);

  return (
    <motion.section className='message' initial={{ width: 0 }} animate={{ width: "auto", transition: { duration: 0.5 } }} exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}>
      {
        <>
          <p>Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem.</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="image" id='userPic' src={loggedUser} alt="Usuário logado" />

            <label htmlFor="name">Nome</label>
            <input id='name' type="text" {...register("name", { required: 'É necessário informar seu nome', maxLength: { value: 40, message: 'O número máximo de caracteres é 40' } })} 
            placeholder='Insira seu nome completo' value={user.name} />
            {errors.name && <p className="error">{errors.name.message}</p>}

            <label htmlFor="phone">Telefone</label>
            <input type="tel" id='phone' {...register('phone', { required: 'Informe um número de telefone', pattern: /\(?[1-9]{2}\)?\s?9?[0-9]{8}/ })} 
            placeholder='Insira seu telefone e/ou whatsapp' value={user.phoneNumber} />
            {errors.phone && <p className="error">{errors.phone.message || 'Por favor, verifique o número digitado'}</p>}

            <label htmlFor="address">Endereço</label>
            <input type="text" id='address' {...register('address', { required: 'Informe o endereço em que você mora' })} placeholder='Informe o endereço em que você mora' 
            value={user.address} />

            <label htmlFor="about">Sobre</label>
            <textarea spellCheck='false' name="about" id="about" cols="30" rows="8" placeholder='Escreva sua mensagem.' 
            value={user.about}></textarea>

            <Button type='submit' children='Salvar' />
          </form>
        </>
      }
    </motion.section>
  );
};

export default Profile;

