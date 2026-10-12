import type { ProjectCardProps } from '../ProjectCard/ProjectCard.types';
import briskly from '../../assets/images/briskly.png';
import tradeOverseas from '../../assets/images/trade-overseas.png';
import gostinyDvor from '../../assets/images/gostiny-dvor.png';

export const projects: ProjectCardProps[] = [
	{
		title: 'брискли',
		href: '#',
		tags: ['сайт', 'брендинг', 'реклама'],
		image: briskly,
		alt: 'Чёрная карточка Briskly на бордовых листьях',
	},
	{
		title: 'трейд оверсиз',
		href: '#',
		tags: ['сайт', 'стратегия', 'реклама'],
		image: tradeOverseas,
		alt: 'Грузовой корабль и портовые краны у контейнерного терминала',
	},
	{
		title: 'гостиный двор',
		href: '#',
		tags: ['сайт', 'брендинг', 'стратегия'],
		image: gostinyDvor,
		alt: 'Исторический фасад Гостиного двора с арочными окнами',
	},
];
