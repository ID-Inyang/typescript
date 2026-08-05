var OperatingSystems;
(function (OperatingSystems) {
    OperatingSystems["linux"] = "Linux";
    OperatingSystems["windows"] = "Windows";
    OperatingSystems["mac"] = "Mac";
})(OperatingSystems || (OperatingSystems = {}));
let myOS = OperatingSystems.windows;
console.log(`My operating system is ${myOS}.`);
export {};
//# sourceMappingURL=main.js.map