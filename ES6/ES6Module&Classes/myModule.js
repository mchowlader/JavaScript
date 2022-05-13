export let text = "Welcome to module";
export const setText = txt => text = txt;

let message = "change module value name in export option"
export {message as msg};

export let values = "change module value name in inport option";