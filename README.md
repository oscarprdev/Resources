## Personal Portfolio

![image](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![image](https://img.shields.io/badge/Astro-20232A?style=for-the-badge&logo=astro&logoColor=e16227)

![resources](https://github.com/user-attachments/assets/50077f1e-a6d4-4198-9141-db295d10ba8b)


## Description

Resources web where web developers can find their favourites resources and bookmark for later.

## Stack

- Frontend
  - Typescript
  - Astro
  - Css
 
 ## Contributing

 Anyone is free to add their own resources thorough a PR. 

 The schema of every resource is:

 ```typescript
  export interface Resource {
  	id: string;
  	title: string;
  	description: string;
  	url: string;
  	categories: ResourceCategory[];
  	color: string;
  	favicon?: string;
  }

  enum ResourceCategory {
  	Frontend = 'frontend',
  	Backend = 'backend',
  	Framework = 'framework',
  	UiLibrary = 'ui library',
  	IconsLibrary = 'icons library',
  	Infrastructure = 'infrastructure',
  	Database = 'database',
  	Utilities = 'utilities',
  	Accessibility = 'accessibility',
  	Repositories = 'repositories',
  	Blogs = 'blogs',
  }
```

