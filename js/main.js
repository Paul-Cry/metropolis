
let startSlider = () => {
    $('.slider').slick({
        adaptiveHeight: true,
        slidesToShow: 4,
        centerMode: false,
        arrows: false,
        asNavFor: ".slider-big",
        focusOnSelect: true
    });

    $('.slider-big').slick({
        adaptiveHeight: true,
        slidesToShow: 1,
        centerMode: false,
        fade: true,
        asNavFor: ".slider"
    });

}

let EventsSlider = () => {
    $('.slider-events').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1255,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
}



let app = new Vue({
    el: '#app',
    data: {
        button: 'all',
        page: 'main',
        path: '',
        database: [
            {
                id: 11,
                status: 'now',
                bcg: "linear-gradient(180deg, rgba(0, 0, 0, 0) 13.54%, #000000 100%), url('./img/stock1.png')",
                statusText: 'Текущее ',
                date: '15,16,18 октября, 2021',
                title: 'LIMÉ FALL’21',
                text: 'Мыслями — в Париже! Основу новой коллекции LIMÉ FALL’21 составили классические осенние модели, с которыми ассоциируется парижский гардероб',
            },
            {
                id: 9,
                status: 'next',
                bcg: "linear-gradient(180deg, rgba(0, 0, 0, 0) 13.54%, #000000 100%), url('./img/stock2.png')",
                statusText: 'Скоро!',
                date: '25 января, 2022',
                title: 'COLD FUSION CONVERSE',
                text: 'Converse представляет капсулу «Сold Fusion», которая состоит из двух силуэтов: Chuck Taylor All Star Lugged Winter 2.0 и Chuck 70 Explore WP.',
            },
            {
                id: 10,
                status: 'next',
                bcg: "linear-gradient(180deg, rgba(0, 0, 0, 0) 13.54%, #000000 100%), url('./img/stock3.png')",
                statusText: 'Скоро!',
                date: '12 декабря - 25 января, 2021/22',
                title: `AKHMADULLINA DREAMS
FALL-WINTER 2021/22`,
                text: 'Коллекция Akhmadullina Dreams Fall-Winter 2021/22  Основа коллекции – цветовая палитра, сочетающая в себе спокойные оттенки и яркие акценты.',
            },
            {
                id: 8,
                status: 'end',
                bcg: "url('./img/f19.svg'), linear-gradient(180deg, rgba(104, 108, 196, 0.63) 0%, #000000 100%)",
                statusText: 'Завершенное',
                date: '16 сентября, 2021',
                title: 'SCRIBBLE PARTY',
                text: 'Мыслями — в Париже! Основу новой коллекции LIMÉ FALL’21 составили классические осенние модели, с которыми ассоциируется парижский гардероб',
            },
            {
                id: 7,
                status: 'now',
                bcg: "linear-gradient(180deg, rgba(0, 0, 0, 0) 13.54%, #000000 100%), url('./img/stock5.png')",
                statusText: 'Текущее ',
                date: '20 августа  - 30 сентября, 2021',
                title: 'THE TALLBROTHERS',
                text: 'Мыслями — в Париже! Основу новой коллекции LIMÉ FALL’21 составили классические осенние модели, с которыми ассоциируется парижский гардероб',
            },
            {
                id: 6,
                status: 'next',
                bcg: "linear-gradient(180deg, rgba(0, 0, 0, 0) 13.54%, #000000 100%), url('./img/stock6.png')",
                statusText: 'Скоро!',
                date: '5 сентября, 2021',
                title: 'ОСЕННИЙ ВЗРЫВ ',
                text: 'Отдыхаем вместе с RE:STORE 10% на ноутбуки Mac для студентов и преподавателей.',
            },

        ],
        slider: {
            flag: false,
            filter: 'background: rgba(0, 0, 0, 0.377);',
            images: [
                './img/events-image/Rectangle 153.jpg',
                './img/events-image/Rectangle 153.jpg',
                './img/events-image/Rectangle 153.jpg',
                './img/events-image/Rectangle 153.jpg',
                './img/events-image/Rectangle 157.png',
                './img/events-image/Rectangle 157.png',
                './img/events-image/Rectangle 157.png',
                './img/events-image/Rectangle 160.png',
                './img/events-image/Rectangle 160.png',
                './img/events-image/Rectangle 160.png',
                './img/events-image/Rectangle 155.png',
                './img/events-image/Rectangle 155.png',
                './img/events-image/Rectangle 155.png',
                './img/events-image/Rectangle 155.png',
                './img/events-image/Rectangle 155.png',
                './img/events-image/Rectangle 153.jpg',
                './img/events-image/Rectangle 155.png',
                './img/events-image/Rectangle 157.png',
                './img/events-image/Rectangle 160.png',
                './img/events-image/Rectangle 153.jpg',
                './img/events-image/Rectangle 155.png',
                './img/events-image/Rectangle 157.png',
                './img/events-image/Rectangle 160.png',
            ],
            sliderImg: [],
            display: null,
        },
        eventText: null,
        newMas: null,
        eventsNext: false, //Переменная отвечающая за opacity
    },
    created() {
        this.slider.flag = false;
    },
    mounted() {

        this.newMas = this.database
        setTimeout(() => {
            EventsSlider()
        }, 100);

    },
    methods: {
        filterCards(status) {
            this.button = status;
            if (status == 'all') {
                this.newMas = this.database;
                console.log('all')
            } else {
                this.newMas = this.database.filter((element) => {
                    return element.status === status;
                })
            }


        },
        newMasSlider(index, flag) {
            if (flag) {
                document.body.style = 'overflow: hidden;';
                this.slider.display = 'display: block;'
                this.slider.flag = true;
                this.slider.sliderImg = null;
                this.slider.sliderImg = this.slider.images.slice(index);
                this.slider.images.slice(0, index).forEach((element) => {
                    this.slider.sliderImg.push(element)
                })
                setTimeout(() => {
                    startSlider()
                }, 200);
            } else {
                this.slider.flag = false;
                document.body.style = 'overflow: visible;';


            }


        },
        Startevents(index) {
            this.eventText = this.database[index];
            this.page = 'events'
            setTimeout(() => {
                EventsSlider()
            }, 100);


        },
        CrtArrDownslider(index) {
            this.eventText = this.newMas[index];
            this.eventsNext = true;
            
            setTimeout(() => {
                window.scrollTo(0, 0);
                this.eventsNext = false
            }, 10000)

            console.log(index)
        }

    }
})




