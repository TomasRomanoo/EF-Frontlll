import {useState} from "react";


const Form = () => {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [nombreValido, setNombreValido] = useState(true);
  const [emailValido, setEmailValido] = useState(true);

  const handleChangeNombre = (event) => {
    const valor = event.target.value;
    setNombre(valor);
    const esValido = valor.length > 5 && /^[a-zA-Z]+$/.test(valor);
    setNombreValido(esValido);
  };

  const handleChangeEmail = (event) => {
    const valor = event.target.value;
    setEmail(valor);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValido(emailRegex.test(valor));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nombreValido && emailValido) {
      console.log('Datos enviados:', { nombre, email });
    } else {
      console.log('Error: campos requeridos');
    }
  };

    return (
        <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nombre">Name</label>
          <input
          type="text"
          name="nombre"
          value={nombre}
          onChange={handleChangeNombre}
          />
          {!nombreValido && <span className="error">Enter a valid name</span>}

          <label htmlFor="email">Email</label>
          <input
          type="text"
          name="email"
          value={email}
          onChange={handleChangeEmail}
          />
          {!emailValido && <span className="error">Enter a valid email</span>}

          <button type="submit">Send</button>
        </form>
        </div>
    );
};

export default Form;