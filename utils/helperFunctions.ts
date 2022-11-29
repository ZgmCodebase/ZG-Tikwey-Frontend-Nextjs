export const utilFuncs = {
    getLocale(window: any) {
        return typeof window !== "undefined"?
            window.navigator.languages &&
            window.navigator.languages.length
            ? navigator.languages[0]
            : navigator.language: undefined;
    },

    createEllipse(numChar: number, str: string): string {
        return str.length <= numChar
            ? str
            : str.slice(0, numChar + 1).concat("...");
    },
};
