import React from "react";

import DropDownWidget from "../DropDownWidget/DropDownWidget";
import Button from "@components/ui-kit/Button";
import Icon from "@components/ui-kit/IconComponent/Icon";

import s from "./DropDownContentTV.module.scss";

export interface IGenreTV {
  id: string;
  name: string;
  url: string;
}

const genreTv: IGenreTV[] = [
  {
    id: "1",
    name: "ТВ-каналы",
    url: "/tvplus",
  },
  { id: "2", name: "Развлекательное", url: "/razvlekatelnoe" },
  { id: "3", name: "Дети", url: "/deti" },
  { id: "4", name: "Спортивное ТВ", url: "/sport" },
  { id: "5", name: "Документальное", url: "/documentalnoe" },
];

const DropDownContentTV = () => {
  return (
    <div className={s.content}>
      <div className={s.side_content}>
        <div className={s.list_item}>
          <div className={s.title}>ТВ онлайн</div>
          {genreTv.map((genre) => {
            return (
              <div className={s.item} key={genre.id}>
                {genre.name}
              </div>
            );
          })}
        </div>
        <Button className={s.side_content_btn} text="Телепрограмма" />
      </div>
      <div className={s.main_content}>
        <div className={s.main_content_popular}></div>
        <div className={s.main_content_Widget_block}>
          <DropDownWidget />
          <Button
            className={s.tv}
            title={<Icon name="tv" />}
            text="Смотреть на Smart TV"
          />
        </div>
      </div>
    </div>
  );
};

export default DropDownContentTV;