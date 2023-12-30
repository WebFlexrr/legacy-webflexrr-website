interface getAllServices {
  _id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  _updatedAt: Date;
}

interface ServiceProcedure {
  _key: string;
  title: string;
  image: string;
  description: string;
  step: number;
}

interface ServiceServices {
  _key: string;
  _type: string;
  description: string;
  title: string;
  image: string;
}

interface ServiceWeAreUsing {
  _key: string;
  iconName: string;
  iconImage: string;
}

interface findServiceByName {
  _id: string;
  name: string;
  description: string;
  slug: string;
  _type: string;
  image: string;
  procedure: ServiceProcedure[];
  services: ServiceServices[];
  weAreUsing: ServiceWeAreUsing[];
  _updatedAt: Date;
}

interface getAllProjects {
  id: number;
  name: string;
  slug: string;
  description: string;
  category: string;
  projectOwnership: string;
  previewSpacing: number;
  preview: string;
  projectLink: string | null;
}

interface getAllPosts {
  _id: string;
  socialMedia: string;
  socialId: string;
  link: string;
  image: string;
}

interface getAllManagementData {
  _id: string;
  name: string;
  slug: string;
  profileImage: string;
  position: string;
  linkedIn: string | null;
  twitter: string | null;
  youtube: string | null;
  instagram: string | null;
}
interface getAllFeedback {
  _id: string;
  clientName: string;
  slug: string;
  clientPosition: string;
  rating: number;
  message: string;
  image: string;
  _type: string;
}
