import style from './style.module.css';

/** Pale-blue title band at the top of inner pages. */
function PageHead({ title }: { title: string }) {
  return (
    <section className={style.head}>
      <div className={style.inner}>
        <h1 className={style.title}>{title}</h1>
        <div className={style.bar} />
      </div>
    </section>
  );
}

export default PageHead;
