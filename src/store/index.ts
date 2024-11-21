import { persistentAtom } from '@nanostores/persistent';
import { map } from 'nanostores';
import type { ResourceCategory } from '~/data';

interface FiltersStore {
	page: number;
	categories: ResourceCategory[];
	moreItems: boolean;
	searchValue: string;
	layout: 'grid' | 'list';
}

export const DEFAULT_FILTERS_STORE: FiltersStore = {
	page: 0,
	categories: [],
	moreItems: true,
	searchValue: '',
	layout: 'grid',
};

export const favsStore = persistentAtom<string[]>('favsStore', [], {
	encode: JSON.stringify,
	decode: JSON.parse,
});

export const filtersStore = map<FiltersStore>(DEFAULT_FILTERS_STORE);
