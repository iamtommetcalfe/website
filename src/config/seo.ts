export interface SchemaThing {
  '@context'?: 'https://schema.org';
  '@type': string;
}

export interface SchemaPerson extends SchemaThing {
  '@type': 'Person';
  name: string;
  jobTitle?: string;
  description?: string;
  image?: string;
  url?: string;
  sameAs?: string[];
  knowsAbout?: string[];
  address?: {
    '@type': 'PostalAddress';
    addressLocality?: string;
    addressRegion?: string;
    addressCountry?: string;
  };
  worksFor?: {
    '@type': 'Organization';
    name: string;
  };
}

export interface SchemaWebPage extends SchemaThing {
  '@type': 'WebPage';
  name: string;
  description?: string;
  url: string;
  author?: SchemaPerson | { '@type': 'Person'; name: string };
  inLanguage?: string;
  isPartOf?: SchemaWebSite;
}

export interface SchemaWebSite extends SchemaThing {
  '@type': 'WebSite';
  name: string;
  url: string;
}

export interface SchemaSoftwareSourceCode extends SchemaThing {
  '@type': 'SoftwareSourceCode';
  name: string;
  description?: string;
  codeRepository: string;
  programmingLanguage?: string;
  author?: SchemaPerson | { '@type': 'Person'; name: string };
}

export interface SchemaListItem extends SchemaThing {
  '@type': 'ListItem';
  position: number;
  item: SchemaThing;
}

export interface SchemaItemList extends SchemaThing {
  '@type': 'ItemList';
  itemListElement: SchemaListItem[];
}

export interface SchemaBlogPosting extends SchemaThing {
  '@type': 'BlogPosting';
  headline: string;
  description?: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author: SchemaPerson | { '@type': 'Person'; name: string };
  keywords?: string[];
  inLanguage?: string;
  isPartOf?: SchemaWebSite;
}

export type StructuredData =
  | SchemaThing
  | SchemaPerson
  | SchemaWebPage
  | SchemaWebSite
  | SchemaItemList
  | SchemaBlogPosting;

export const SITE_DOMAIN = 'https://iamtommetcalfe.com';

export const DEFAULT_PERSON: SchemaPerson = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Tom Stirrop-Metcalfe',
  jobTitle: 'Engineering Leader',
  description:
    "Engineering leader with 15 years' experience building high-performing teams at early-stage startups. Championing AI adoption and sustainable delivery at Amiqus.",
  image: `${SITE_DOMAIN}/assets/images/tom-stirrop-metcalfe-obi.jpeg`,
  url: SITE_DOMAIN,
  knowsAbout: [
    'Software Engineering',
    'Engineering Leadership',
    'AI Adoption',
    'LLM Tooling',
    'Startup Engineering',
    'Agile Management',
    'Scalable Systems',
    'Team Building',
    'Engineering Strategy',
    'Claude AI',
  ],
  sameAs: [
    'https://github.com/iamtommetcalfe',
    'https://www.linkedin.com/in/iamtomstirropmetcalfe/',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Birmingham',
    addressCountry: 'GB',
  },
  worksFor: { '@type': 'Organization', name: 'Amiqus' },
};

export const DEFAULT_WEBSITE: SchemaWebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Tom Stirrop-Metcalfe',
  url: SITE_DOMAIN,
};

export const HOME_SEO_CONFIG = {
  title: 'Tom Stirrop-Metcalfe | Engineering Leader & AI Advocate',
  description:
    'Engineering leader with 15 years building teams at early-stage startups. Championing AI and LLM adoption at Amiqus.',
  canonicalUrl: SITE_DOMAIN,
  structuredData: [
    DEFAULT_PERSON,
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Tom Stirrop-Metcalfe | Engineering Leader & AI Advocate',
      description:
        'Engineering leader with 15 years building teams at early-stage startups. Championing AI and LLM adoption at Amiqus.',
      url: SITE_DOMAIN,
      author: { '@type': 'Person', name: 'Tom Stirrop-Metcalfe' },
      inLanguage: 'en-GB',
      isPartOf: DEFAULT_WEBSITE,
    } as SchemaWebPage,
  ],
};

export const WRITING_SEO_CONFIG = {
  title: 'Writing | Tom Stirrop-Metcalfe',
  description:
    'Articles on engineering leadership, AI adoption, and the multi-hat startup EM experience.',
  canonicalUrl: `${SITE_DOMAIN}/writing/`,
  structuredData: [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Writing | Tom Stirrop-Metcalfe',
      description:
        'Articles on engineering leadership, AI adoption, and the multi-hat startup EM experience.',
      url: `${SITE_DOMAIN}/writing/`,
      author: { '@type': 'Person', name: 'Tom Stirrop-Metcalfe' },
      inLanguage: 'en-GB',
      isPartOf: DEFAULT_WEBSITE,
    } as SchemaWebPage,
  ],
};

export const PROJECTS_SEO_CONFIG = {
  title: 'Engineering Projects | Tom Stirrop-Metcalfe | Engineering Leader',
  description:
    "Explore Tom Stirrop-Metcalfe's public GitHub projects, including ENCOM Smart Home, Amiqus ATS Demo, and Vue Pokédex.",
  canonicalUrl: `${SITE_DOMAIN}/projects/`,
  structuredData: [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Engineering Projects | Tom Stirrop-Metcalfe | Engineering Leader',
      description:
        "Explore Tom Stirrop-Metcalfe's public GitHub projects, including ENCOM Smart Home, Amiqus ATS Demo, and Vue Pokédex.",
      url: `${SITE_DOMAIN}/projects/`,
      author: {
        '@type': 'Person',
        name: 'Tom Stirrop-Metcalfe',
      },
      inLanguage: 'en-GB',
      isPartOf: DEFAULT_WEBSITE,
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@type': 'SoftwareSourceCode',
              name: 'ENCOM Smart Home',
              description:
                'Encom is a modern smart home dashboard application designed to be served on your home network.',
              codeRepository: 'https://github.com/iamtommetcalfe/encom-smart-home',
              programmingLanguage: 'Vue.js',
              author: {
                '@type': 'Person',
                name: 'Tom Stirrop-Metcalfe',
              },
            } as SchemaSoftwareSourceCode,
          },
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@type': 'SoftwareSourceCode',
              name: 'Amiqus ATS Demo',
              description:
                'Explore how the Amiqus API can power applicant screening in an ATS. This demo app, built with Laravel and Vite, walks through identity checks, record handling, and integration flows.',
              codeRepository: 'https://github.com/iamtommetcalfe/amiqus-ats-demo',
              programmingLanguage: 'PHP',
              author: {
                '@type': 'Person',
                name: 'Tom Stirrop-Metcalfe',
              },
            } as SchemaSoftwareSourceCode,
          },
          {
            '@type': 'ListItem',
            position: 3,
            item: {
              '@type': 'SoftwareSourceCode',
              name: 'Vue Pokédex',
              description:
                'A modern Pokédex built with Vue 3 and TypeScript, utilizing the PokéAPI to provide detailed information on Pokémon. Explore, search, and immerse yourself in the Pokémon universe.',
              codeRepository: 'https://github.com/iamtommetcalfe/my-vue-pokedex',
              programmingLanguage: 'TypeScript',
              author: {
                '@type': 'Person',
                name: 'Tom Stirrop-Metcalfe',
              },
            } as SchemaSoftwareSourceCode,
          },
        ],
      } as SchemaItemList,
    },
  ],
};
