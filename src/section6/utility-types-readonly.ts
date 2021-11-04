export {};

type Profile = {
    name: string;
    age: number;
}

const me: Profile = {
    name: 'John',
    age: 39
}

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
    name: 'Ted',
    age: 33
};

// friend.age++;

type YomitoriSenyo<T> = {
    readonly [P in keyof T] : T[P];
}

type YomitoriSenyoProfile = YomitoriSenyo<Profile>;