const size = {
	mobileS: '0px',
	mobileM: '375px',
	mobileL: '425px',
	tablet: '768px',
	tabletL: '1024px',
	laptop: '1200px',
	desktop: '1440px',
	desktopM: '1600px',
	desktopL: '2300px'
};

export const device = {
	mobileS: `(min-width: ${size.mobileS})`,
	mobileM: `(min-width: ${size.mobileM})`,
	mobileL: `(min-width: ${size.mobileL})`,
	tablet: `(min-width: ${size.tablet})`,
	tabletL: `(min-width: ${size.tabletL})`,
	laptop: `(min-width: ${size.laptop})`,
	desktop: `(min-width: ${size.desktop})`,
	desktopM: `(min-width: ${size.desktopM})`,
	desktopL: `(min-width: ${size.desktopL})`
};