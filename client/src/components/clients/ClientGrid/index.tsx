import type { Client } from '@/content/clients';
import style from './style.module.css';

function ClientGrid({ clients }: { clients: Client[] }) {
  return (
    <ul className={style.grid}>
      {clients.map((client) => (
        <li key={client.name} className={style.card}>
          <div className={style.hex}>
            <img src={client.logo} alt={client.name} loading="lazy" />
          </div>
          <h2 className={style.name}>{client.name}</h2>
        </li>
      ))}
    </ul>
  );
}

export default ClientGrid;
