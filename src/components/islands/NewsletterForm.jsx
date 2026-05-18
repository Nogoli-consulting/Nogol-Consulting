import { useState } from 'react';

// TODO: replace with real Web3Forms API key from client (reuse same key as ContactoForm)
const WEB3FORMS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (val) => {
    if (!val.trim()) return 'El email es requerido.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return 'Email inválido.';
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate(email);
    if (err) {
      setError(err);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: 'Nueva suscripción — Nogolí',
          email,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError('Hubo un problema. Intentá de nuevo.');
      }
    } catch {
      setError('Error de conexión. Intentá de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'w-full bg-cream border rounded-sm font-sans font-light text-espresso text-sm px-4 py-3 outline-none focus:border-accent transition-colors duration-200 placeholder:text-[rgba(33,12,4,0.40)]';

  if (submitted) {
    return (
      <p className="font-sans text-sm font-light text-center" style={{ color: 'var(--espresso)' }}>
        ¡Listo! Te avisamos con el próximo artículo.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
      <input
        type="email"
        placeholder="tu@email.com"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (error) setError('');
        }}
        className={inputClass}
        style={{ border: '1px solid rgba(211,153,69,0.35)' }}
      />
      {error && <p className="text-red-400 text-xs font-sans">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-3 font-sans text-sm font-medium tracking-wide transition-colors duration-300 disabled:opacity-60"
        style={{ background: '#240F07', color: '#FAF3E4' }}
      >
        {loading ? 'Enviando…' : 'Suscribirme'}
      </button>
    </form>
  );
}
