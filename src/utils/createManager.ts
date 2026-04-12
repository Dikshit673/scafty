export class Manager {
  private manager: Record<string, string[]> = {};
  private key: string;

  constructor(key: string) {
    this.key = key;
    this.manager[key] = [];
  }

  get() {
    return this.manager[this.key] ?? [];
  }
  add(str: string) {
    this.get().push(str);
  }
  remove(str: string) {
    const arr = this.get();
    const index = arr.indexOf(str);
    if (index !== -1) {
      arr.splice(index, 1);
    }
  }
}
export const createManager = (key: string) => new Manager(key);
