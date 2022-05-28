import { ApiItem } from "@app/core/apiItem";

export interface Model extends ApiItem {
  '@id': string;
  '@type': string;
  category: Category;
  createdAt: string;
  updatedAt: string;
  id: String;
  name: string;
  overview: string;
  pricePerDay: number;
  fuelType: string;
  seatingCapacity: number;
  image: string;
  gearSystem: string;
  maker: Maker;
  vehicles: Vehicle[];
}

export interface PaginationRequest {
  page: number | null;
  totalItems: number | null;
  itemsPerPage: number | null;
  order: string | null;
  maker: string | null;
  category: string | null;
}

export interface Pagination extends ApiItem {
  '@context': string;
  '@id': string;
  '@type': string;
  'hydra:member': Model[];
  'hydra:totalItems': number;
  'hydra:view': HydraView;
  "hydra:search": HydraSearch;
}

export interface Category extends ApiItem {
  '@id': string;
  '@type': string;
  name: string;
}

export interface Maker extends ApiItem {
  '@id': string;
  '@type': string;
  name: string;
}

export interface Vehicle extends ApiItem {
  '@id': string;
  '@type': string;
  name: string;
  availabilityFlag: boolean;
  plateNumber: string;
}

export interface HydraView extends ApiItem {
  '@id': string;
  '@type': string;
  "hydra:first": string;
  "hydra:last": string;
  "hydra:next": string;
}

export interface HydraSearch {
  "hydra:mapping": hydraMapping;
}

export interface hydraMapping {
  "variable": string;
  "property": string;
}



