let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: `"her head held high."`,
        person: `zuleiqoh zakariyah`
    },{
        quote: `"i am that girl."`,
        person:   `dtechgirl zul`
    }, {
        quote: `"i am a Billionaire."`,
        person:   `saka suliat`
    },{
        quote: `"She believed she could,so she did."`,
        person:   `Girl Boss`
    },{
        quote: `"Your only competition is your own potential."`,
        person:   `Boss Babe`
    },{
        quote: `"I am creating the life of my Dreams."`,
        person:   `Oluwanidami folakemi`
    },{
        quote: `"If i want it,it's already mine."`,
        person:   `miss zul`
    },{
        quote: `"Go girllllll..."`,
        person:   `dtg`
    },

];



btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})