import { useState } from 'react';

const OPCIONES = [
  'Diagnóstico de claridad operativa',
  'Liberación del tiempo del dueño',
  'Sistema de gestión vivo',
  'Rituales de gestión',
  'Mentoría estratégica',
  'No sé todavía, quiero una charla',
];

export default function ContactoForm() {
  const [form, setForm] = useState({
    nombre: '',
    empresa: '',
    email: '',
    servicio: '',
    mensaje: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.nombre.trim()) e.nombre = 'El nombre es requerido.';
    if (!form.email.trim()) {
      e.email = 'El email es requerido.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Email inválido.';
    }
    if (!form.servicio) e.servicio = 'Seleccioná una opción.';
    if (!form.mensaje.trim()) e.mensaje = 'El mensaje es requerido.';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    // Simulate send (no real endpoint yet)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const inputClass =
    'w-full bg-cream-mid border rounded-sm font-sans font-light text-espresso text-sm px-4 py-3 outline-none focus:border-accent transition-colors duration-200 placeholder:text-[rgba(33,12,4,0.40)]';

  const inputStyle = { border: '1px solid rgba(211,153,69,0.35)' };

  const errorClass = 'text-red-400 text-xs mt-1 font-sans';

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4 py-12">
        <div className="w-12 h-12 border border-accent flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-accent"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl font-light text-espresso">
          Mensaje enviado.
        </h3>
        <p className="font-sans text-sm font-light" style={{color: 'var(--dark-mid)'}}>
          Gracias por escribirme. Voy a revisar tu situación y te contacto en las próximas 24–48 horas.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      {/* Nombre + Empresa */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre *"
            value={form.nombre}
            onChange={handleChange}
            className={inputClass}
            style={inputStyle}
          />
          {errors.nombre && <p className={errorClass}>{errors.nombre}</p>}
        </div>
        <div>
          <input
            type="text"
            name="empresa"
            placeholder="Empresa"
            value={form.empresa}
            onChange={handleChange}
            className={inputClass}
            style={inputStyle}
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email *"
          value={form.email}
          onChange={handleChange}
          className={inputClass}
          style={inputStyle}
        />
        {errors.email && <p className={errorClass}>{errors.email}</p>}
      </div>

      {/* Servicio */}
      <div>
        <select
          name="servicio"
          value={form.servicio}
          onChange={handleChange}
          className={`${inputClass} appearance-none cursor-pointer`}
          style={{...inputStyle, color: form.servicio ? 'var(--espresso)' : 'rgba(33,12,4,0.40)'}}
        >
          <option value="" disabled>
            ¿Qué necesitás? *
          </option>
          {OPCIONES.map((op) => (
            <option key={op} value={op} className="bg-cream text-espresso">
              {op}
            </option>
          ))}
        </select>
        {errors.servicio && <p className={errorClass}>{errors.servicio}</p>}
      </div>

      {/* Mensaje */}
      <div>
        <textarea
          name="mensaje"
          placeholder="Contame brevemente qué está pasando en tu empresa *"
          rows={5}
          value={form.mensaje}
          onChange={handleChange}
          className={`${inputClass} resize-none`}          style={inputStyle}        />
        {errors.mensaje && <p className={errorClass}>{errors.mensaje}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-3 px-8 py-3 bg-gold-dark text-cream font-sans text-sm font-bold tracking-[0.1em] rounded-sm hover:bg-accent transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? 'Enviando...' : 'Enviar mensaje'}
        {!loading && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        )}
      </button>
    </form>
  );
}
