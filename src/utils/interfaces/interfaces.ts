export interface ApiCharacterData {
  info: PaginationInfo;
  results: CharacterData[];
}

interface PaginationInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface CharacterData {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface Origin {
  name: string;
  url: string;
}

interface Location {
  name: string;
  url: string;
}

export interface CuriosityData {
  title: string;
  description: string;
}

export interface IChildren {
  children?: React.ReactNode;
}
