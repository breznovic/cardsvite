import {v1} from 'uuid'

export type ApartmentsType = {
    id: string
    apartmentPhoto: string
    address: string
    space: number
    monthPrice: number
}

export type ApartmentType = ApartmentsType[]

let apartments: ApartmentType = [
    {
        id: v1(),
        apartmentPhoto: 'https://housinganywhere.imgix.net/room/1843362/4bd18135-808f-48f9-8d21-3f92ac314475.jpg?ixlib=react-9.2.0&auto=format&fit=clip&w=1946',
        address: 'Carrer de la França Xica',
        space: 55,
        monthPrice: 1200
    }, {
        id: v1(),
        apartmentPhoto: 'https://housinganywhere.imgix.net/room/1549456/e09ae2f4-1ae5-4b25-8774-c2095c08fab8.jpg?ixlib=react-9.2.0&auto=format&fit=clip&w=1946',
        address: 'Carrer de Villarroel',
        space: 80,
        monthPrice: 1250
    }, {
        id: v1(),
        apartmentPhoto: 'https://housinganywhere.imgix.net/room/1440694/435883ea-23d6-11e9-b4af-42010af00004.jpg?ixlib=react-9.2.0&auto=format&fit=clip&w=1946',
        address: 'Carrer de les Moles',
        space: 60,
        monthPrice: 1400
    }, {
        id: v1(),
        apartmentPhoto: 'https://housinganywhere.imgix.net/room/1661332/81975670-169f-4a08-a550-c22976f463c9.jpg?ixlib=react-9.2.0&auto=format&fit=clip&w=1946',
        address: 'Carrer de les Pedreres',
        space: 41,
        monthPrice: 850
    }, {
        id: v1(),
        apartmentPhoto: 'https://housinganywhere.imgix.net/room/1684782/a07b70e8-1329-4f20-9d28-d6e4d10d9ecc.jpg?ixlib=react-9.2.0&auto=format&fit=clip&w=1946',
        address: 'Carrer de Sevilla',
        space: 35,
        monthPrice: 1300
    },

]

export default apartments