interface TaxonomyItem {
  id: number;
  name: string;
}

export interface TaxonomiesType {
  genre: TaxonomyItem[];
  transfer_status: TaxonomyItem;
  age_restriction: TaxonomyItem;
}

export interface MangaType {
  className?: string;
  name: string;
  id: number;
  english_name: string;
  description: string;
  image: string;
  rating_user: boolean;
  taxonomies: TaxonomiesType;
}


export interface ChapterType {
  number: number;
  title: string;
  created_at: string;
}

export interface PageOfChapterType {
  url: string;
}

export interface PageOfChapterType {
  image: string
  order: number
}

export interface PagesOfChapterType {
  id: number
  title: string
  number: number
  images: PageOfChapterType[]
}