export interface SearchFilters {
  location?: string;
  propertyId?: string;
  landType?: string;
  maxBudget?: number;
}

export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  area: string;
  imageUrl: string;
}

export interface SearchResponse {
  data: Property[];
  total: number;
}
