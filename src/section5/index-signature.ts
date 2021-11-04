export {};

interface Profile {
    name: string;
    underTwenty: boolean;
    [index: string]: string | number | boolean ;
}

let profile: Profile = {name: 'John', underTwenty: false}

// how to write index signatures
// { [index: typeForIndex]: typeForValue }

profile.name = 'John';
profile.age = 43;
profile.nationalituy = 'Japan';
