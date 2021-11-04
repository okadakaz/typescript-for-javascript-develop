export {};

// Record<K, T>

type Prefectures = 'Tokyo' | 'Nagasaki' | 'Okayama';

type Covid19InfectionInfo = {
    kanji_name: string;
    confirmed_cases: number;
};

const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
    Tokyo: { kanji_name: '東京', confirmed_cases: 2000},
    Nagasaki: { kanji_name: '長崎', confirmed_cases: 210},
    Okayama: { kanji_name: '岡山', confirmed_cases: 55},
    // Shiga: { kanji_name: '滋賀', confirmed_cases: true}
}

