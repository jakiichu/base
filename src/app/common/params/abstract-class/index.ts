abstract class CryptData {
    private readonly key: number

    protected constructor(key: number) {
        this.key = key;
    }

    protected _crypt(item: string): string {

        return this._baseCrypt(item, true);
    }

    protected _decrypt(item: string): string {
        return this._baseCrypt(item, false);
    }

    protected _baseCrypt(item: string, crypt: boolean): string {
        let result = "";
        for (let i = 0; i < item.length; i++) {
            const charCode: number = item.charCodeAt(i),
                decryptedChar: string = crypt ? String.fromCharCode(charCode + this.key) : String.fromCharCode(charCode - this.key)
            result += decryptedChar;
        }
        return result;
    }
}

export {CryptData}
