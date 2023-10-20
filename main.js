const app = Vue.createApp({
    data(){
        return{
            cart:0,
            product:'Socks',
            description: ' this socks are really comfortable',
            image: './assets/images/socks_green.jpg',
            url:'www.google.it',
            inventory: 0,
            onSale:false,
            details:['50% cotton', '30% wool', '20% polyester'],
            variants:[
                {id:2234, color:'green', size:'small', image: './assets/images/socks_green.jpg'},
                {id:2235, color:'blue', size:'medium', image: './assets/images/socks_blue.jpg'}
            ],
            sizes:['extra-small', 'small', 'medium', 'large', 'extra-large', 'XXLARGE']
        }
    },
    methods:{
        addToCart(){
           this.cart +=1 
        },
        removeItem(){
            if(this.cart != 0){
                this.cart -=1
            }
         },
        updateImage(variantImage){
            this.image = variantImage
        }

    }
})

