// const host= 'http://localhost:9000'
const host="https://todo-iota-dusky-82.vercel.app"

const SummeryApi={

    signup:{
        url: `${host}/signup`,
        method : 'post'
    },

    login:{
        url: `${host}/login`,
        method : 'post'
    },
    add:{
        url: `${host}/add`,
        method: "post"
    },
    show:{
        url: `${host}/show`,
        method : "get"
    },

    delete:{
        url: `${host}/delete`,
        method : "delete"
    },

    update:{
        url: `${host}/update`,
        method: "post"
    }

}


export default SummeryApi