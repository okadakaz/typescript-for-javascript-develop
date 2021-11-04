export {};

type MyExclude = 
 | (string extends string | number ? never : string)
 | (number extends string | number ? never : number)
 | (DebugType extends string | number ? never : DebugType)
 ;
type DebugType = () => void;
type SomeTypes = string | number | DebugType;

// Exclude
type FunctionType = Exclude<SomeTypes, string | number>;
type MyFunctionType = MyExclude;

// Extract
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

// NonNullable
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;

