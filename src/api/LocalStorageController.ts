export class LocalStorageController {
  static setItem<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static getItem<T>(key: string): undefined | T {
    const item = localStorage.getItem(key);
    if (!item) return undefined;

    return JSON.parse(item);
  }

  static removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
