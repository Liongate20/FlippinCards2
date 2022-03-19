new Vue({
    el: "#app",
    data: {
        newQuestion:'',
        newAnswer: '',
        newSubject:'',
        cards:[
            {
                question:"What year was IUPUI founded?",
                answer:"1969",
                category:"history",
                flipped:false
            },
            {
                question:"What is 2+2?",
                answer:"Fish",
                category:"math",
                flipped:false
            },{
                question:"Is mayonnaise an instrument?",
                answer:"No",
                category:"science",
                flipped:false,
            },

        ],
    },
    methods:{
        flippedCard(card,index) {

            this.cards.filter((c,i)=>{
                if(i === index)
                {
                    c.flipped = !c.flipped;
                }
            })
        },
        newCard(){

            this.cards.push({
                question:this.newQuestion,
                answer:this.newAnswer,
                category:this.newSubject,
                flipped:false,
            })

        }
    }
})