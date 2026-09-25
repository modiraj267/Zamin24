import { apiClient } from './apiClient';
import { SearchFilters, SearchResponse } from '../../types/search';

export const homeApi = {
  /**
   * Search for properties based on filters
   */
  searchProperties: async (filters: SearchFilters): Promise<SearchResponse> => {
    // In a real application, this would call the API:
    // return apiClient.post<SearchResponse>('/search', filters);

    // For now, simulate network delay and return empty to match requirements
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: [], total: 0 });
      }, 1500);
    });
  },
};
