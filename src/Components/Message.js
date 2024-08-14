// styles
import Button from './Button';

// dependencies
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from "react-hook-form";


// assets
import loggedUser from '../assets/logged-user.png';

const Message = () => {
  const location = useLocation();
  // destructuring useForm
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange'
  });

  const [isChatActive, setIsChatActive] = useState(false);

  const toggleChat = () => {
    setIsChatActive(prevState => !prevState); // Alterna o estado do chat
  };

  const closeChat = () => {
    setIsChatActive(false);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeChat();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <motion.section className='message' initial={{ width: 0 }} animate={{ width: "auto", transition: { duration: 0.5 } }} exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}>
      {
        location.pathname === '/mensagem' ? (
          <>

            <div className='message-container'>

              {/* <label htmlFor="name">Nome</label> */}
              <div className='list-message'>
                <div className='user-message' onClick={toggleChat} >
                  <div className='user-photo'><img src={loggedUser} /></div>
                  <div className='user-data'>
                    <div className='user-name'>Sereia developer</div>
                    <div className='pet'>Interesse: Gato - Garfield</div>
                  </div>
                </div>
                <div className='user-message' onClick={toggleChat} >
                  <div className='user-photo'><img src={loggedUser} /></div>
                  <div className='user-data'>
                    <div className='user-name'>Sereia developer</div>
                    <div className='pet'>Interesse: Gato - Garfield</div>
                  </div>
                </div>
                <div className='user-message' onClick={toggleChat} >
                  <div className='user-photo'><img src={loggedUser} /></div>
                  <div className='user-data'>
                    <div className='user-name'>Sereia developer</div>
                    <div className='pet'>Interesse: Gato - Garfield</div>
                  </div>
                </div>
                <div className='user-message' onClick={toggleChat} >
                  <div className='user-photo'><img src={loggedUser} /></div>
                  <div className='user-data'>
                    <div className='user-name'>Sereia developer</div>
                    <div className='pet'>Interesse: Gato - Garfield</div>
                  </div>
                </div>
                <div className='user-message' onClick={toggleChat} >
                  <div className='user-photo'><img src={loggedUser} /></div>
                  <div className='user-data'>
                    <div className='user-name'>Sereia developer</div>
                    <div className='pet'>Interesse: Gato - Garfield</div>
                  </div>
                </div>
                <div className='user-message' onClick={toggleChat} >
                  <div className='user-photo'><img src={loggedUser} /></div>
                  <div className='user-data'>
                    <div className='user-name'>Sereia developer</div>
                    <div className='pet'>Interesse: Gato - Garfield</div>
                  </div>
                </div>
                <div className='user-message' onClick={toggleChat} >
                  <div className='user-photo'><img src={loggedUser} /></div>
                  <div className='user-data'>
                    <div className='user-name'>Sereia developer</div>
                    <div className='pet'>Interesse: Gato - Garfield</div>
                  </div>
                </div>
                <div className='user-message' onClick={toggleChat} >
                  <div className='user-photo'><img src={loggedUser} /></div>
                  <div className='user-data'>
                    <div className='user-name'>Sereia developer</div>
                    <div className='pet'>Interesse: Gato - Garfield</div>
                  </div>
                </div>

              </div>

              {

                isChatActive && (

                  <div className='chat'>
                    <div className='last-message'>
                      <div className="send">
                        <div className="message-data">
                          teste
                        </div>
                      </div>
                      <div className="received">
                        <div className="message-data">
                          teste
                        </div>
                      </div>
                    </div>
                    <form className='message-form' onSubmit={handleSubmit(onSubmit)}>
                      <input id='message' type="text" {...register("message")} placeholder='Digite aqui a mensagem que deseja enviar ...' />

                      <Button type='submit' className='btn-message' />
                    </form>
                  </div>

                )
              }
            </div>
          </>
        ) : (
          <>
            {/* <p>Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem.</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input type="image" id='userPic' src={loggedUser} alt="Usuário logado" />

              <label htmlFor="name">Nome</label>
              <input id='name' type="text" {...register("name", { required: 'É necessário informar seu nome', maxLength: { value: 40, message: 'O número máximo de caracteres é 40' } })}
                placeholder='Insira seu nome completo' value='Joana Magalhães' />
              {errors.name && <p className="error">{errors.name.message}</p>}

              <label htmlFor="phone">Telefone</label>
              <input type="tel" id='phone' {...register('phone', { required: 'Informe um número de telefone', pattern: /\(?[1-9]{2}\)?\s?9?[0-9]{8}/ })}
                placeholder='Insira seu telefone e/ou whatsapp' value='98 123456789' />
              {errors.phone && <p className="error">{errors.phone.message || 'Por favor, verifique o número digitado'}</p>}

              <label htmlFor="city">Cidade</label>
              <input type="text" id='city' {...register('city', { required: 'Informe a cidade em que você mora' })} placeholder='Informe a cidade em que você mora'
                value='São Luís' />

              <label htmlFor="about">Sobre</label>
              <textarea spellCheck='false' name="about" id="about" cols="30" rows="8" placeholder='Escreva sua mensagem.'
                value='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti 
              atque corrupti quos dolores et quas molestias excepturi sint occaecati.'></textarea>

              <Button type='submit' children='Salvar' />
            </form> */}
          </>
        )
      }
    </motion.section>
  );
};

export default Message;

