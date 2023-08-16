import style from './style.module.css';
import { ApiHandler } from '../../api_handler';

function Shop() {
  ApiHandler.getCategories()
	return (
		<div className={style.container}>
		</div>
	);
}

export default Shop;
