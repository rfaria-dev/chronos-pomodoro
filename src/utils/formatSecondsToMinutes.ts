const formatSecondsToMinutes = (seconds: number): string => {
	const minutes = Math.floor(seconds / 60)
		.toString()
		.padStart(2, "0");
	const secondsMod = Math.round(seconds % 60)
		.toString()
		.padStart(2, "0");

	return `${minutes}:${secondsMod}`;
};

export { formatSecondsToMinutes };
