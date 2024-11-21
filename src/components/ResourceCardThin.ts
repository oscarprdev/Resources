import type { Resource } from '~/data';
import { ResourceBookmarkBtn } from './ResourceBookmarkBtn';

export const ResourceCardThin = (resource: Resource, isBookmark?: boolean) => {
	const bookmarkListItem = document.createElement('li');
	bookmarkListItem.setAttribute('id', resource.id);
	bookmarkListItem.classList.add('card__thin');

	/**
	 * Add bookmark button
	 */
	const bookmarkBtn = ResourceBookmarkBtn(resource.id);

	/**
	 * Remove bookmark button
	 */
	const removeBookmarkBtn = document.createElement('button');
	removeBookmarkBtn.classList.add('resource-remove-btn');
	removeBookmarkBtn.id = `remove-bookmark-${resource.id}`;
	removeBookmarkBtn.innerHTML = '<div>x</div>';

	bookmarkListItem.appendChild(isBookmark ? removeBookmarkBtn : bookmarkBtn);

	/**
	 * Bookmark link
	 */
	const bookmarkLink = document.createElement('a');
	bookmarkLink.href = resource.url;
	bookmarkLink.target = '_blank';
	bookmarkLink.classList.add('card__thin__link');

	bookmarkLink.innerHTML = `
            <div class="card__thin__link__title">
                <img 
                    class="card__thin__link__title--favicon" 
                    src="${resource.favicon}" 
                    alt="resource favicon"/>
                <h4 class="card__thin__link__title--text">
                    ${resource.title}
                </h4>
                <h5 class="card__thin__link__title--categories">
                    ${resource.categories.map(category => `.${category}`).join(' ')}
                </h5>
            </div>
            
            <div class="card__thin__link__decorator">
                <span 
                    style="background-color: ${resource.color}" 
                    class="card__thin__link__decorator--square"/>
            </div>
    `;

	bookmarkListItem.appendChild(bookmarkLink);

	return bookmarkListItem;
};
