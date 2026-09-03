export interface BrandStory {
  id: string;
  brand_id: string;
  eyebrow: string | null;
  title: string | null;
  subtitle: string | null;
  content: string | null;
  image_url: string | null;
  image_alt: string | null;
  founded_text: string | null;
  legacy_text: string | null;
  display_order: number;
  created_at: string;
  updated_at: string;
}