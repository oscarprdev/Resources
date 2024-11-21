import { BookmarkIcon } from './BookmarkIcon';

export const ResourceBookmarkBtn = (resourceId: string) => {
	const bookmarkedIcon = BookmarkIcon(resourceId);

	const bookmarkButton = document.createElement('button');
	bookmarkButton.classList.add('resource-bookmark-btn');
	bookmarkButton.id = `bookmark-btn-${resourceId}`;
	bookmarkButton.innerHTML = bookmarkedIcon;

	return bookmarkButton;
};
