import { Post, PostType } from "../typescript/types"

export const Colors = {
    primary: '#fa8072',
    primaryDark: '#ff7f50',
    primaryLight: '#fac898',
    secondary: '#4169e1',
    secondaryDark: '#6f8faf',
    secondaryLight: '#89cff0',
    tertiary: '#cf9fff',
    tertiaryDark: '#da70d6',
    tertiaryLight: '#e6e6fa',
    white: "#fafff0",
    defaultWhite: "#ffffff",
    black: '#343434',
    blackLight: '#36454F',
    blackDark: '#1B1212',
    gray: '#9e9e9e',
    grayDark: '#757575',
    grayLight: '#b2beb5',
    error: '#de3163',
    success: '#afe1af',
    warning: '#ffac1c',
}

// default location to Tampere, Finland where the app is developed
export const DEFAULT_LOCATION = {
    latitude: 61.4978,
    longitude: 23.761,
}

// dummy posts 
export const DUMMY_POSTS: Post[] = [
    {
        id: "1",
        createdAt: "2021-01-01T00:00:00.000Z",
        title: "HELP! Lost my dog",
        body: "I lost my dog. I'm looking for him.",
        lat: 51.5072,
        lng: 0.1275,
        city: "London",
        type: PostType.Lost,
        imgUrl: "https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
    },
    {
        id: "2",
        title: "Found a cat near my house",
        createdAt: "2019-01-01T00:00:00.000Z",
        body: "I found this cat. Contact me. Phone number: 123456789. Email address: john.doe@gmail.com",
        lat: 61.4978,
        lng: 23.761,
        city: "Tampere",
        type: PostType.Spotting,
        imgUrl: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    },
    {
        id: "3",
        title: "Lost my cat, please help me find him",
        createdAt: "2021-03-03T00:00:00.000Z",
        body: "I lost this cat. Last seen at the apartment. Phone number: 123456789. Email address: user@gmail.com",
        city: "Melbourne",
        lat: -37.8136,
        lng: 144.9631,
        type: PostType.Found,
        imgUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80",
    },
    {
        id: "4",
        title: "HELP my cat is missing",
        createdAt: "2022-04-02T00:00:00.000Z",
        body: "I lost this cat. Last seen at the apartment. Phone number: 123456789. Email address: john@doe.com",
        city: "Dubai",
        lat: 25.2048,
        lng: 55.2708,
        type: PostType.Found,
        imgUrl: "N/A"
    },
    {
        id: "5",
        title: "Lost my pet Zebra",
        createdAt: "2022-06-01T00:00:00.000Z",
        body: "I lost this this pet. Last seen in Africa. Phone number: 123456789. Email address: weridpetguy@gmail.com",
        city: "Munich",
        lat: 48.1351,
        lng: 11.5820,
        type: PostType.Lost,
        imgUrl: "https://images.unsplash.com/photo-1526095179574-86e545346ae6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80",
    },
]

export const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1610513320995-1ad4bbf25e55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"