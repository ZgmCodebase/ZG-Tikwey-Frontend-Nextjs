export const utilFuncs = {
    getLocale(browserWindow: any) {
        return typeof browserWindow !== "undefined"
            ? browserWindow.navigator.languages &&
              browserWindow.navigator.languages.length
                ? navigator.languages[0]
                : navigator.language
            : undefined;
    },

    createEllipse(numChar: number, str: string): string {
        return str.length <= numChar
            ? str
            : str.slice(0, numChar + 1).concat("...");
    },
};
