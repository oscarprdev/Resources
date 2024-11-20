import { persistentAtom } from '@nanostores/persistent';
import { map } from 'nanostores';
import type { ResourceCategory } from '~/data';

interface FiltersStore {
	page: number;
	categories: ResourceCategory[];
	moreItems: boolean;
	searchValue: string;
	showPagination: boolean;
}

export const NUM_RESOURCES_PER_PAGE = 8;

export const DEFAULT_FILTERS_STORE: FiltersStore = {
	page: 0,
	categories: [],
	moreItems: true,
	searchValue: '',
	showPagination: true,
};

export const favsStore = persistentAtom<string[]>('favsStore', [], {
	encode: JSON.stringify,
	decode: JSON.parse,
});

export const filtersStore = map<FiltersStore>(DEFAULT_FILTERS_STORE);
