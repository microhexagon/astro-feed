export type TeamMember = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  image: string;
  github: string;
  isTeacher?: boolean;
};

export type NavbarProps = {
  title: string;
  link: string;
};
