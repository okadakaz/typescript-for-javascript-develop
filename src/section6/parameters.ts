export {};

const debugProfile = (name: string, age:number) => {
    console.log({name, age});
}

debugProfile('John', 39);

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ['Ted', 33];

debugProfile(...profile);

type MyParameters<T extends (...args: any) => any> = T extends (
    ...args: infer P
    ) => any 
    ? P 
    : never;
