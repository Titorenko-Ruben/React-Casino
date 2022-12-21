const year = String(new Date().getFullYear()).substr(2)

export function cardValidation(cardInfo) {
	if (
		cardInfo.number === '' ||
		cardInfo.number.match(/[a-zA-Zа-яА-Я]/) ||
		cardInfo.number.length < 19 ||
		cardInfo.number.length > 20
	) {
		return true
	} else if (
		cardInfo.month === '' ||
		cardInfo.year === '' ||
		cardInfo.month.match(/[a-zA-Zа-яА-Я]/) ||
		cardInfo.year.match(/[a-zA-Zа-яА-Я]/) ||
		cardInfo.month > 12 ||
		cardInfo.year > year ||
		cardInfo.month < 0 ||
		cardInfo.year < 0
	) {
		return true
	} else if (cardInfo.holder.match(/[0-9\\.,:]/) || cardInfo.holder === '') {
		return true
	} else if (cardInfo.cvv.match(/[a-zA-Zа-яА-Я]/) || cardInfo.cvv.length < 2) {
		return true
	} else {
		return false
	}
}
