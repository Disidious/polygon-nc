import { useState, type FormEvent } from 'react';

import { fieldErrors, QUOTE_FIELDS, sendQuoteRequest, type FieldErrors, type QuoteField } from '@/api';
import type { CartLine } from '@/cart/CartProvider';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { cx } from '@/utils/cx';
import style from './style.module.css';

type FieldConfig = {
  name: QuoteField;
  label: string;
  type?: 'text' | 'email' | 'tel';
  required?: boolean;
  autoComplete: string;
  multiline?: boolean;
};

const FIELDS: FieldConfig[] = [
  { name: 'company_name', label: 'Company Name', autoComplete: 'organization' },
  { name: 'first_name', label: 'First Name', required: true, autoComplete: 'given-name' },
  { name: 'last_name', label: 'Last Name', required: true, autoComplete: 'family-name' },
  { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email' },
  // "tel", not "number": keeps "+" and leading zeros.
  { name: 'phone', label: 'Phone', type: 'tel', required: true, autoComplete: 'tel' },
  { name: 'address', label: 'Address', required: true, autoComplete: 'street-address' },
  { name: 'message', label: 'Notes', autoComplete: 'off', multiline: true },
];

const EMPTY = Object.fromEntries(QUOTE_FIELDS.map((name) => [name, ''])) as Record<QuoteField, string>;
const NO_ERRORS: FieldErrors<QuoteField> = { fields: {}, general: false };

type Props = {
  /** The cart at the moment of sending. */
  lines: CartLine[];
  onSent: () => void;
};

function QuoteForm({ lines, onSent }: Props) {
  const [values, setValues] = useState(EMPTY);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState(NO_ERRORS);

  const change = (name: QuoteField, value: string) => {
    setValues((current) => ({ ...current, [name]: value }));
    if (errors.fields[name]) setErrors((current) => ({ ...current, fields: { ...current.fields, [name]: undefined } }));
  };

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setSending(true);
    setErrors(NO_ERRORS);
    try {
      await sendQuoteRequest({ ...values, requested_products: lines });
      onSent();
    } catch (error) {
      setErrors(fieldErrors(error, QUOTE_FIELDS));
      setSending(false);
    }
  };

  return (
    <form className={style.card} onSubmit={submit}>
      <div className={style.grid}>
        {FIELDS.map((field) => {
          const error = errors.fields[field.name];
          const id = `quote-${field.name}`;
          const common = {
            id,
            name: field.name,
            value: values[field.name],
            required: field.required,
            autoComplete: field.autoComplete,
            'aria-invalid': error ? true : undefined,
            'aria-describedby': error ? `${id}-error` : undefined,
          };
          return (
            <div key={field.name} className={cx(style.field, field.multiline && style.full, error && style.invalid)}>
              <label htmlFor={id}>{field.label}{field.required && ' *'}</label>
              {field.multiline ? (
                <textarea {...common} onChange={(event) => change(field.name, event.target.value)} />
              ) : (
                <input {...common} type={field.type ?? 'text'} onChange={(event) => change(field.name, event.target.value)} />
              )}
              {error && <div id={`${id}-error`} className={style.help}>{error}</div>}
            </div>
          );
        })}
      </div>

      {errors.general && (
        <div className={style.banner} role="alert">
          <Icon name="error" size={20} />
          Couldn't send your request. Please try again.
        </div>
      )}

      <div className={style.submitRow}>
        <Button type="submit" size="lg" loading={sending} className={style.submit}>Request Quote</Button>
      </div>
    </form>
  );
}

export default QuoteForm;
