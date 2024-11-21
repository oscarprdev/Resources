import type { Resource } from '~/data';
import { ResourceBookmarkBtn } from './ResourceBookmarkBtn';

export const ResourceCard = (resource: Resource) => {
	const resourceItem = document.createElement('article');
	resourceItem.setAttribute('id', resource.id);
	resourceItem.classList.add('card');

	/**
	 * Bookmark button
	 */
	const bookmarkBtn = ResourceBookmarkBtn(resource.id);
	resourceItem.appendChild(bookmarkBtn);

	/**
	 * Bookmark link
	 */
	const bookmarkLink = document.createElement('a');
	bookmarkLink.href = resource.url;
	bookmarkLink.target = '_blank';
	bookmarkLink.classList.add('card__content');

	bookmarkLink.innerHTML = `
			<div 
				class="card__content__section card__content__section--title">
				${
					resource.favicon
						? `<img 
							class="card__content__section--title__favicon" 
							src="${resource.favicon}" 
							alt="resource favicon"/>`
						: ''
				}
				<h4 class="card__content__section--title__text">
					${resource.title}
				</h4>
			</div>
			<div 
				class="card__content__section card__content__section--category">
				<h5 class="card__content__section--category__text">
					${resource.categories.map(category => `.${category}`).join(' ')}
				</h5>
			</div>
			<div 
				class="card__content__section card__content__section--description">
				<p class="card__content__section--description__text">
					${resource.description}
				</p>
				<span 
					style="background-color: ${resource.color}"></span>
			</div>
	`;

	resourceItem.appendChild(bookmarkLink);

	return resourceItem;
};
