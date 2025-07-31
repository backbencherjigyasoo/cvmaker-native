export type RootStackParamList = {
  Home: undefined;
  Form: undefined;
  "Your CV": undefined;
};

export type CVFormData = {
  personal: {
    name: string;
    email: string;
    phone: string;
    photo: string;
  };
  education: {
    level: string;
    institute: string;
    startYear: string;
    endYear: string;
    degree: string;
  }[];
  experience: {
    jobTitle: string;
    company: string;
    startYear: string;
    endYear: string;
    description: string;
  }[];
  skills: {
    groupName: string;
    items: string[];
  }[];
  projects: {
    title: string;
    description: string;
    techStack: string;
    link: string;
  }[];
  summary: string;
};
