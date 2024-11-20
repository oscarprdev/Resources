import type { Resource } from '~/data';
import { BookmarkIcon } from './BookmarkIcon';

export const ResourceCard = (resource: Resource) => {
	const resourceItem = document.createElement('article');
	resourceItem.setAttribute('id', resource.id);
	resourceItem.classList.add('card');
	/**
	 * Bookmark icon
	 */
	const bookmarkedIcon = BookmarkIcon(resource.id);

	resourceItem.innerHTML = `
		<button 
			class="card__bookmark-btn"
			id="bookmark-btn-${resource.id}">
			${bookmarkedIcon}
		</button>
		<a  
			href="${resource.url}" 
			target="_blank" 
			class="card__content">
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
		</a>
	`;

	return resourceItem;
};
