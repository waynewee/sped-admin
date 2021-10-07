interface IMongoObject {
  _id?: string;
}

export interface IHomeroom extends IMongoObject {
  name?: string;
  code?: string;
  description?: string;
  readableId?: string;
}

export type SkillPoint = Record<string, number>;

export interface IUser extends IMongoObject {
  username?: string;
  userType?: "teacher" | "student";
  password?: string;
  skillPoints?: SkillPoint[];
  updatedAt?: string;
}

export interface IBreadCrumb {
  label: string;
  href: string;
}
