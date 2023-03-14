const dayjs = require("dayjs");

function birthday(date) {
  const birthday = dayjs(date)
  const today = dayjs()

  const ageInYear = today.diff(birthday, 'year')
  const nextBirthday = birthday.add(ageInYear + 1, 'year')
  const dasyToNextBirthday = nextBirthday.diff(today, 'day')

  console.log(`Idade: ${ageInYear}`)
  console.log(`Proxímo aniversário: ${nextBirthday.format("DD/MM/YYYY")}`)
  console.log(`Dias até completar ${ageInYear + 1} anos: ${dasyToNextBirthday}`)
}

birthday("1997-04-17")