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

export type StructuredData =
  | SchemaThing
  | SchemaPerson
  | SchemaWebPage
  | SchemaWebSite
  | SchemaItemList;

export const SITE_DOMAIN = 'https://iamtommetcalfe.com';

export const DEFAULT_PERSON: SchemaPerson = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Tom Stirrop-Metcalfe',
  jobTitle: 'Engineering Function Manager',
  description:
    'Engineering leader focused on sustainable delivery, healthy teams, and systems that scale quietly.',
  image: `${SITE_DOMAIN}/assets/images/tom-stirrop-metcalfe-obi.jpeg`,
  url: SITE_DOMAIN,
  sameAs: ['https://github.com/iamtommetcalfe', 'https://www.linkedin.com/in/tomstirropmetcalfe/'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Birmingham',
    addressCountry: 'United Kingdom',
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
  title: 'Homepage | Tom Stirrop-Metcalfe | Engineering Leader',
  description:
    'I build calm, capable, fast-moving engineering teams. I focus on measurable impact, strong systems, and sustainable delivery.',
  canonicalUrl: SITE_DOMAIN,
  structuredData: [
    DEFAULT_PERSON,
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Homepage | Tom Stirrop-Metcalfe | Engineering Leader',
      description:
        'I build calm, fast-moving engineering teams. We focus on measurable impact, strong systems, and sustainable delivery.',
      url: SITE_DOMAIN,
      author: { '@type': 'Person', name: 'Tom Stirrop-Metcalfe' },
      inLanguage: 'en-GB',
      isPartOf: DEFAULT_WEBSITE,
    } as SchemaWebPage,
  ],
};

export const PROJECTS_SEO_CONFIG = {
  title: 'Projects | Tom Stirrop-Metcalfe | Engineering Leader',
  description:
    "Explore Tom Stirrop-Metcalfe's public GitHub projects, including ENCOM Smart Home, Amiqus ATS Demo, and Vue Pokédex.",
  canonicalUrl: `${SITE_DOMAIN}/projects/`,
  structuredData: [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Projects - Tom Stirrop-Metcalfe | Software Engineering Manager',
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
