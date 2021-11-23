let carInfo = [

    {
        id:'bmw115d_123',
        model : 'bmw 116d',
        year:2014,
        color:'white',
        servicesRecord :[
            {
                id:'bmw115d_123_1',
                date:'20.20.2016',
                km:'12233',
                price :1000,
                explanation :[
                                {
                                    id:'bmw115d_123_1_1',
                                    process :'oil change',
                                    price:300
                                },
                                {
                                    id:'bmw115d_123_1_2',
                                    process :'filter change',
                                    price:400
                                },
                                {
                                    id:'bmw115d_123_1_3',
                                    process :'brake change',
                                    price:300
                                }
                            ]
            },
            {
                id:'bmw115d_123_2',
                date:'20.20.2018',
                km:'15233',
                price :1700,
                explanation :[
                    {
                        id:'bmw115d_123_2_1',
                        process :'oil change',
                        price:400
                    },
                    {
                        id:'bmw115d_123_2_2',
                        process :'filter change',
                        price:400
                    },
                    {
                        id:'bmw115d_123_2_3',
                        process :'brake change',
                        price:400
                    },
                    {
                        id:'bmw115d_123_2_3',
                        process :'balata change',
                        price:500
                    }
                ]
            }
        ]
    },
    {
        id:'bmw118i_123',
        model : 'bmw 118i',
        year:2014,
        color:'white',
        servicesRecord :[
            {
                id:'bmw118i_123_1',
                date:'20.20.2016',
                km:'12233',
                price :1000,
                explanation :[
                                {
                                    id:'bmw118i_123_1_1',
                                    process :'oil change',
                                    price:300
                                },
                                {
                                    id:'bmw118i_123_1_2',
                                    process :'filter change',
                                    price:400
                                },
                                {
                                    id:'bmw118i_123_1_3',
                                    process :'brake change',
                                    price:300
                                }
                            ]
            },
            {
                id:'bmw118i_123_2',
                date:'20.20.2018',
                km:'15233',
                price :1700,
                explanation :[
                    {
                        id:'bmw118i_123_2_1',
                        process :'oil change',
                        price:400
                    },
                    {
                        id:'bmw118i_123_2_2',
                        process :'filter change',
                        price:400
                    },
                    {
                        id:'bmw118i_123_2_3',
                        process :'brake change',
                        price:400
                    },
                    {
                        id:'bmw118i_123_2_3',
                        process :'balata change',
                        price:500
                    }
                ]
            }
        ]
    }
]

console.log(carInfo[0]);
console.log(carInfo[0].id);
console.log(carInfo[0].model);
console.log(carInfo[0].servicesRecord);
console.log(carInfo[0].servicesRecord[0]);
console.log(carInfo[0].servicesRecord[0].km);
console.log(carInfo[0].servicesRecord[0].explanation);
console.log(carInfo[0].servicesRecord[0].explanation[1]);
console.log(carInfo[0].servicesRecord[0].explanation[1].price);






console.log(carInfo[1]);

