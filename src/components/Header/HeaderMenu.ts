function initializeHeaderMenu(): void {
	const header = document.querySelector<HTMLElement>('[data-site-header]');
	const toggle = header?.querySelector<HTMLButtonElement>('[data-menu-toggle]');
	const navigation = header?.querySelector<HTMLElement>('#navigation');

	if (!header || !toggle || !navigation) {
		return;
	}

	const setMenuOpen = (isOpen: boolean): void => {
		header.toggleAttribute('data-open', isOpen);
		toggle.setAttribute('aria-expanded', String(isOpen));
		toggle.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
	};

	header.setAttribute('data-menu-ready', '');
	toggle.hidden = false;

	toggle.addEventListener('click', () => {
		setMenuOpen(toggle.getAttribute('aria-expanded') !== 'true');
	});

	navigation.addEventListener('click', (event: MouseEvent) => {
		if (event.target instanceof Element && event.target.closest('a')) {
			setMenuOpen(false);
		}
	});

	document.addEventListener('keydown', (event: KeyboardEvent) => {
		if (event.key === 'Escape' && header.hasAttribute('data-open')) {
			setMenuOpen(false);
			toggle.focus();
		}
	});

	const desktopViewport = window.matchMedia('(width >= 768px)');

	desktopViewport.addEventListener('change', (event: MediaQueryListEvent) => {
		if (event.matches) {
			if (document.activeElement === toggle) {
				navigation.querySelector<HTMLAnchorElement>('a')?.focus();
			}

			setMenuOpen(false);

			return;
		}

		if (navigation.contains(document.activeElement)) {
			toggle.focus();
		}
	});
}

initializeHeaderMenu();
