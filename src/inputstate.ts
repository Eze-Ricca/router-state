type Data = {
  input: string;
};

const inputState = {
  data: {} as Data,
  listener: [] as Function[],
  getState() {
    return this.data;
  },
  setState(newstate: Data): void {
    this.data = newstate;
    // Ejecutar todos los callbacks
    this.listener.forEach((callback) => callback());
  },
  suscribe(callback: Function) {
    this.listener.push(callback);
  },
};
export { inputState };
