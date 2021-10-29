


let app = new Vue({
    el: '#app',
    data: {
        button: 'all',
        database: [
            {
                id: 11,
                status: 'now',
                statusText: 'Текущее ',
                date: '15,16,18 октября, 2021',
                title: 'LIMÉ FALL’21',
                text: 'Мыслями — в Париже! Основу новой коллекции LIMÉ FALL’21 составили классические осенние модели, с которыми ассоциируется парижский гардероб', 
            },
            {
                id: 9,
                status: 'next',
                statusText: 'Скоро!',
                date: '25 января, 2022',
                title: 'COLD FUSION CONVERSE',
                text: 'Converse представляет капсулу «Сold Fusion», которая состоит из двух силуэтов: Chuck Taylor All Star Lugged Winter 2.0 и Chuck 70 Explore WP.', 
            },
            {
                id: 10,
                status: 'next',
                statusText: 'Скоро!',
                date: '12 декабря - 25 января, 2021/22',
                title: `AKHMADULLINA DREAMS
FALL-WINTER 2021/22`,
                text: 'Коллекция Akhmadullina Dreams Fall-Winter 2021/22  Основа коллекции – цветовая палитра, сочетающая в себе спокойные оттенки и яркие акценты.', 
            },
            {
                id: 8,
                status: 'end',
                statusText: 'Завершенное',
                date: '16 сентября, 2021',
                title: 'SCRIBBLE PARTY',
                text: 'Мыслями — в Париже! Основу новой коллекции LIMÉ FALL’21 составили классические осенние модели, с которыми ассоциируется парижский гардероб', 
            },
            {
                id: 7,
                status: 'now',
                statusText: 'Текущее ',
                date: '20 августа  - 30 сентября, 2021',
                title: 'THE TALLBROTHERS',
                text: 'Мыслями — в Париже! Основу новой коллекции LIMÉ FALL’21 составили классические осенние модели, с которыми ассоциируется парижский гардероб', 
            },
            {
                id: 6,
                status: 'next',
                statusText: 'Скоро!',
                date: '5 сентября, 2021',
                title: 'ОСЕННИЙ ВЗРЫВ ',
                text: 'Отдыхаем вместе с RE:STORE 10% на ноутбуки Mac для студентов и преподавателей.', 
            }, 
            
        ],
        newMas: null
    },
    mounted(){
        this.newMas = this.database
    },
    methods: {
        filterCards(status){
            this.button = status;
            if(status == 'all'){
                this.newMas = this.database;
                console.log('all')
            }else{    
                this.newMas = this.database.filter((element)=>{
                    return element.status === status;
                })
            }
            

        }
    }
})