import type { Resource } from '~/data';

export const BookmarkItem = (resource: Resource) => {
	const bookmarkListItem = document.createElement('li');
	bookmarkListItem.setAttribute('id', resource.id);
	bookmarkListItem.classList.add('bookmarks__item');
	bookmarkListItem.innerHTML = `
        <button
            class="bookmarks__item__remove-btn"
            id="remove-bookmark-${resource.id}">
            <div>x</div>
        </button>
        <a
            href="${resource.url}"
            target="_blank"
            class="bookmarks__item__link">
            <div class="bookmarks__item__link__title">
                <img class="bookmarks__item__link__title--favicon" src="${resource.favicon}" alt="resource favicon"/>
                <h4 class="bookmarks__item__link__title--text">${resource.title}</h4>
                <h5 class="bookmarks__item__link__title--categories">${resource.categories.map(category => `.${category}`).join(' ')}</h5>
            </div>
            
            <div class="bookmarks__item__link__decorator">
                <span 
                    style="background-color: ${resource.color}" 
                    class="bookmarks__item__link__decorator--square"/>
            </div>
        </a>
    `;

	return bookmarkListItem;
};
