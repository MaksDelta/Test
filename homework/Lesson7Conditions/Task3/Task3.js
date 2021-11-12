const nam = prompt('Введіть своє імя')

const admin = 'Igor'
const secondAdmin = 'Sergiy'
const patient = 'Pasha'
const nurse = 'Olya'
const secondNurse = 'Oksana'
const badBoy = 'Maks'

if (nam === admin) {
    console.log('привіт адмін Ігор');
} else if (nam === secondAdmin){
    console.log('привіт адмін Сергій');
} else if (nam === patient) {
    console.log('привіт хворий Паша');
} else if (nam === nurse) {
    console.log('вітання вам Оля');
} else if (nam === secondNurse) {
    console.log('вітиння вам Оксана');
} else if (nam === badBoy) {
    console.log('!!!побити!!!');
} else {
    console.log ('Посторонім вхід заборонено, коронавірус')
}