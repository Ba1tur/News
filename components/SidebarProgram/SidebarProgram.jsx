import { sideBarProgramContent } from "@/constants/sideBarBase";
import React from "react";
import s from "./SidebarProgram.module.scss";

const SidebarProgram = () => {
  return (
    <aside className={s.sidebar_program}>
      <h3>Программы для вас</h3>
      <div className={s.slidebar_program_field}>
        {sideBarProgramContent.map((item) => (
          <div key={item.id} className={s.slidebar_program_field_content}></div>
        ))}
      </div>
    </aside>
  );
};

export default SidebarProgram;
