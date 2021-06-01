export const getCardsFromQuery = (groups, groupName, limit) => {
	const group = groups.find((group, idx) => group.name === groupName);
	const cards = group.cards;

	if (limit) {
		return cards.slice(0, limit);
	}

	if (group.cards.length === 1) {
		return group.cards[0];
	}

	return cards;
};

export const getElementFromQuery = (group, element) => {
	return group.find((group) => group.name === element);
};
