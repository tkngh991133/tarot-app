export type Theme = "love" | "work" | "general" | "relationship" | "money";

export const THEME_LABEL: Record<Theme, string> = {
  love: "恋愛",
  work: "仕事",
  general: "総合",
  relationship: "人間関係",
  money: "お金",
};

export type Occupation =
  | "employee"
  | "self_employed"
  | "executive"
  | "civil_servant"
  | "student"
  | "part_time"
  | "homemaker"
  | "other";

export const OCCUPATION_LABEL: Record<Occupation, string> = {
  employee: "会社員",
  self_employed: "自営業・フリーランス",
  executive: "経営者・役員",
  civil_servant: "公務員",
  student: "学生",
  part_time: "パート・アルバイト",
  homemaker: "専業主婦・主夫",
  other: "その他",
};

export type Gender = "female" | "male" | "other" | "no_answer";

export const GENDER_LABEL: Record<Gender, string> = {
  female: "女性",
  male: "男性",
  other: "その他",
  no_answer: "回答しない",
};

export type FortuneInput = {
  birthYear: number;
  birthMonth: number;
  birthDay: number;
  gender: Gender;
  occupation: Occupation;
  theme: Theme;
  question: string;
};

export type DrawnCard = {
  id: number;
  nameJa: string;
  nameEn: string;
  reversed: boolean;
  position: "past" | "present" | "future";
};
