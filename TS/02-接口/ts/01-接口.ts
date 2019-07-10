interface labeValue {
    label: string;
}

function printLabel(labelObj: labeValue) {
    console.log(labelObj.label);
}

let obj = {size: 10, label: "size 10 Object"};
printLabel(obj);
