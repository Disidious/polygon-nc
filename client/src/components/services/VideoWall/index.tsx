import style from './style.module.css';

type Props = {
  title: string;
  description: string;
  image: string;
};

/** Data Show's video wall: text beside the photo shown on a framed screen with a stand. */
function VideoWall({ title, description, image }: Props) {
  return (
    <div className={style.wall}>
      <div>
        <h2 className={style.title}>{title}</h2>
        <div className={style.bar} />
        <p className={style.text}>{description}</p>
      </div>
      <div>
        <div className={style.screen} style={{ backgroundImage: `url(${image})` }} role="img" aria-label={title} />
        <div className={style.stand} />
      </div>
    </div>
  );
}

export default VideoWall;
