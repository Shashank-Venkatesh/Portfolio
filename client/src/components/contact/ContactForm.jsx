import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import Button from '../common/Button';

const initialValues = { name: '', email: '', message: '' };

/**
 * Validates a single field, returning an error message or empty string.
 */
function validateField(name, value) {
  if (name === 'name') {
    return value.trim().length > 1 ? '' : 'Please enter your name.';
  }
  if (name === 'email') {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Enter a valid email address.';
  }
  if (name === 'message') {
    return value.trim().length > 9 ? '' : 'Tell me a little more about your project.';
  }
  return '';
}

/**
 * Contact form: Name, Email, Message. Validates on blur/submit and
 * shows an inline success state. Wire `onSubmit`/an API route in to
 * actually deliver messages -- this component only handles UI state.
 */
export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | sent

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = Object.fromEntries(
      Object.entries(values).map(([key, value]) => [key, validateField(key, value)])
    );
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;

    setStatus('submitting');
    // Replace with a real submission (API route, email service, etc.)
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus('sent');
    setValues(initialValues);
  };

  const fieldClasses =
    'w-full border-0 border-b border-[var(--color-border-subtle)] bg-transparent py-3 text-sm text-[var(--color-ink-primary)] placeholder:text-[var(--color-ink-tertiary)] focus:border-[var(--color-ink-secondary)] focus:outline-none transition-colors';

  if (status === 'sent') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-start gap-3 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-8"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-signal-dim)] text-[var(--color-signal)]">
          <FiCheck className="h-5 w-5" />
        </span>
        <h3 className="text-lg font-bold text-[var(--color-ink-primary)]">Message sent.</h3>
        <p className="text-sm text-[var(--color-ink-secondary)]">
          Thanks for reaching out &mdash; I'll get back to you shortly.
        </p>
        <Button variant="secondary" size="sm" onClick={() => setStatus('idle')}>
          Send another
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <div>
        <label
          htmlFor="name"
          className="font-mono text-[10px] uppercase tracking-[var(--tracking-label)] text-[var(--color-ink-tertiary)]"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="John Doe"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={fieldClasses}
        />
        {errors.name && (
          <p id="name-error" className="mt-1.5 text-xs text-red-400">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="font-mono text-[10px] uppercase tracking-[var(--tracking-label)] text-[var(--color-ink-tertiary)]"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="john@example.com"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={fieldClasses}
        />
        {errors.email && (
          <p id="email-error" className="mt-1.5 text-xs text-red-400">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="font-mono text-[10px] uppercase tracking-[var(--tracking-label)] text-[var(--color-ink-tertiary)]"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell me about your project..."
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`${fieldClasses} resize-none`}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      <Button type="submit" icon={FiArrowRight} className="mt-2 w-fit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </Button>
    </form>
  );
}
