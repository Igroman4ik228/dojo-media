import type { ImageMetadata } from 'astro';

export interface ProjectCardProps {
	title: string;
	href: string;
	tags: string[];
	image: ImageMetadata;
	alt: string;
}
