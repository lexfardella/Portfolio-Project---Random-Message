function randomMessage(name, birthMonth, birthContinent) {
    const errorMessageArray = [];
    if (typeof name !== 'string') {
        errorMessageArray.push('Please enter a valid name.')
    } if (birthMonth !== 'January' && birthMonth !== 'February' && birthMonth !== 'March' && birthMonth !== 'April' && birthMonth !== 'May' && birthMonth !== 'June' && birthMonth !== 'July' && birthMonth !== 'August' && birthMonth !== 'September' && birthMonth !== 'October' && birthMonth !== 'November' && birthMonth !=='December') {
        errorMessageArray.push('Please enter a valid month.')
    } if (birthContinent !== 'Asia' && birthContinent !== 'Europe' && birthContinent !== 'Africa' && birthContinent !== 'North America' && birthContinent !== 'South America' && birthContinent !== 'Antarctica' && birthContinent !== 'Aceania') {
        errorMessageArray.push('Please enter a valid continent.')
    }

    const randomNumber = Math.floor(Math.random() * 3);
    const messageArray1 = [];
    if (randomNumber == 0) {
        messageArray1.push(`Hello ${name}!`)
    } if (randomNumber == 1) {
        messageArray1.push(`Hola ${name}!`)
    } if (randomNumber == 2) {
        messageArray1.push(`Bonjour ${name}!`)
    }

    const messageArray2 = [];
    if (birthMonth == 'August' || birthMonth == 'September' || birthMonth == 'October' || birthMonth == 'November' || birthMonth == 'December') {
        messageArray2.push(`You were born in a great month! Unfortunately you will leave the world in the same month you came. Be weary during every ${birthMonth}!`)
    } else {
        messageArray2.push(`Being born in ${birthMonth} is a gift. You will concieve your first child during this month - do what you will with this information.`)
    }

    const messageArray3 = [];
    if (randomNumber == 0) {
        messageArray3.push(`Also, our birthplace of ${birthContinent} will suffer immense loss when the aliens invade.`)
    } if (randomNumber == 1) {
        messageArray3.push(`Also, you will meet the love of your life back where it all started - in ${birthContinent}.`)
    } if (randomNumber == 2) {
        messageArray3.push(`Also, when you get drafted for WWIV, you will be stationed in ${birthContinent} for many, many, years.`)
    }

    const messageArray = [messageArray1 + ' ' + messageArray2 + ' ' + messageArray3];

    if (errorMessageArray == '') {
        return messageArray;
    } else {
        return errorMessageArray;
    }
}
    

console.log(randomMessage('Lex', 'August', 'Europe'));


