import style from './style.module.css';

type Client = {
  img: string;
  name: string;
}

type Props = {
  clients: Client[];
}

function ClientItems(props: Props) {
  const { clients } = props

  const renderItem = (client: Client, key: number) => (
    <div key={key} className={style.clientsContent}>
      <div className={style.hex}>
        <img src={client.img} alt={client.name} />
      </div>
      <div className={style.clientsText}>
        <h1>
          {client.name}
        </h1>
      </div>
    </div>
  )

	return (
    <div className={style.clientsContainer}>
      {clients.map((client, idx) => renderItem(client, idx))}
    </div>
	);
}

export default ClientItems;
