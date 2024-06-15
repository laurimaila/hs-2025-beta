export function getProductionYear() {
	const today = new Date()
	const currentYear = today.getFullYear()
	const currentMonth = today.getMonth()

	// Produktiovuosi kesäkuu-toukokuu
	const productionYear = currentMonth >= 5 ? currentYear + 1 : currentYear
	return productionYear
}
