const deg: number = 6;
const hr = <HTMLElement>document.querySelector('#hr');
const sc = <HTMLElement>document.querySelector('#sc');
const mn = <HTMLElement>document.querySelector('#mn');

setInterval(() => {
    const day: Date = new Date();
    const hh: number = day.getHours() * 30;
    const mm: number = day.getMinutes() * deg;
    const ss: number = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    const timeToShow: string= day.toLocaleTimeString();

    console.log(timeToShow);
},(1000))
