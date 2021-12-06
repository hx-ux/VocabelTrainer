declare enum wordTypeEnum {
    "verb" = 0,
    "Namewort" = 1,
    "Numeric" = 2
}
interface vocabelEntry {
    wordEnglish: string | number;
    wordGerman: string | number;
    wordType: wordTypeEnum;
    isSlang: boolean;
}
declare let w1: vocabelEntry;
declare let w2: vocabelEntry;
declare let w3: vocabelEntry;
declare let testInterface: vocabelEntry[];
