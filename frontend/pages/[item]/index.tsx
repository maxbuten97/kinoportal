import { useRouter } from "next/router";
import ActorRound from "../../components/Badge/ActorRound/ActorRound";
import Quality from "../../components/Badge/Quality/Quality";
import BadgeActor from "../../components/BadgeActor/BadgeActor";
import GrayButton from "../../components/GrayButton";
import SimilarFilmsItem from "../../components/similarFilmsItem/similarFilmsItem";
import { useFilmItemQuery } from "../../redux/filmsApi";
import s from "./item.module.scss";

const Index = () => {
  const router = useRouter();
  const { data=[], error, isLoading } = useFilmItemQuery(String(router.query.id));

  if (isLoading) {
    return <div>LOADING</div>;
  }

  return (
    <div className={s.wrapper}>
      <div className={s.wrapperMain}>
        <div className={s.mainHeader}>
          <div className={s.breadcramps}>
            <span>Фильмы</span>
            <span>Триллеры</span>
          </div>
          <div className={s.mainBtn}>
            <button>бесплатно</button>
            <button>выбор Иви</button>
          </div>
        </div>

        <div className={s.main}>
          <div className={s.mainLeft}>
            <div className={s.mainLeftVideo}></div>
            <div className={s.mainBlockButton}>
              <GrayButton title="Треллер" />
              <GrayButton />
              <GrayButton />
            </div>
          </div>
          <div className={s.mainRight}>
            <h1>Остров проклятых</h1>
            <h1>(Фильм 2009)</h1>
            <div className={s.mainRightMetaData}>
              <p>2009 2 ч. 12 мин.16+</p>
              <p>СШАТриллерыДетективыДрамы</p>
              <p>FullHD Рус · Eng Рус</p>
            </div>
            <div className={s.mainRightActiros}>
              <BadgeActor title="Рейтинг Иви" />
              <BadgeActor title="Марк Руффало" />
              <BadgeActor title="Макс фон Сюдов" />
              <BadgeActor title="Мишель Уильямс" />
              <BadgeActor title="Мишель Уильямс" />
            </div>
            <div className={s.mainRightDescription}>
              Четвертая по счету работа блестящего дуэта настоящих
              профессионалов своего дела Мартина Скорсезе и Леонардо ДиКаприо,
              на этот раз в жанре мистического триллера с элементами
              психологической драмы, никого не оставит равнодушным. Америка
              середины 50-х. На удаленном от всего мира острове расположена
              специальная лечебница для особо буйных душевнобольных
              преступников. В клинике происходят странные события: при
              загадочных обстоятельствах пропала одна из пациенток. Остров
              хорошо охраняется, вокруг бескрайний океан, а катера приходят лишь
              в строго определенное время и место. Побег полностью исключен. В
              поисках разгадки на остров прибывают два судебных пристава с
              большой земли: Тедди Дениелс, страдающий необъяснимыми головными
              болями после трагической гибели жены, и его напарник Чак Оул. Даже
              на первый взгляд им становится понятно, что на острове творится
              что-то неладное. Охранники постоянно начеку, держат палец на
              спусковом крючке, а впоследствии выясняется, что руководство
              клиники скрывает страшную тайну. Для того чтобы узнать, как дальше
              будут развиваться события, рекомендуем смотреть онлайн «Остров
              проклятых». Приглашаем посмотреть фильм «Остров проклятых» в нашем
              онлайн-кинотеатре совершенно бесплатно в хорошем HD качестве.
              Приятного просмотра!
            </div>
            <div className={s.line}></div>
            <div className={s.mainRightMetaDataButtom}>
              <p>Языки</p>
              <p>Русский, Английский</p>
              <p>Субтитры</p>
              <p>Русский</p>
              <span>
                <h3>Изображение и звук.</h3> Фактическое качество зависит от
                устройства и ограничений правообладателя.
              </span>
              <div className={s.mainRightBudges}>
                <Quality title="4К" />
                <Quality title="FullHD" />
                <Quality title="HD" />
                <Quality title="1080" />
                <Quality title="720" />
                <Quality title="HDR10" />
                <Quality title="5.1" />
              </div>
            </div>
            <p>Свернуть детали</p>
            <div className={s.line}></div>
            <div className={s.mainRightRaitingIvi}>
              <div className={s.mainRightRaitingIviBadge}>8,1</div>
              <div>
                <p>Рейтинг Иви</p>
                <p>Интересный сюжет 114 513 оценок</p>
              </div>
              <button>оценить</button>
            </div>
          </div>
        </div>

        <div className={s.similarFilms}>
          <h3>С фильмом «Спящие» смотрят</h3>
          <div className={s.similarFilmsItems}>
            <SimilarFilmsItem title="Mock data" choice={true} />
            <SimilarFilmsItem title="Mock data" />
            <SimilarFilmsItem title="Mock data" />
            <SimilarFilmsItem title="Mock data" choice={true} />
            <SimilarFilmsItem title="Mock data" />
            <SimilarFilmsItem title="Mock data" choice={true} />
          </div>
        </div>

        <div className={s.actorSection}>
          <h3>Актёры и создатели</h3>
          <div className={s.actors}>
            <ActorRound title="name" role="actor" />
            <ActorRound title="name" role="actor" />
            <ActorRound title="name" role="actor" />
            <ActorRound title="name" role="actor" />
            <ActorRound title="name" role="actor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
