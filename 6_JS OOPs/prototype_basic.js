let computer = { cpu: 12 };

let lenovo = {
screen: "HD",
_proto_: computer,

};
let tomHardware = {};
console.log(`lenovo lenovo._proto_);cpu: ${lenovo._proto_.cpu}`); // 12
console.log(`tomHardware tomHardware._proto_);cpu: ${tomHardware._proto_?.cpu}`); // undefined


// Example

let AutomaticCar = {tyres: 4};

let tesla = {
    driver: "AI",
    _proto_: AutomaticCar,
};

Object.setPrototypeOf(tesla, AutomaticCar);

console.log(`tesla tyres: ${tesla._proto_.tyres}`); 

