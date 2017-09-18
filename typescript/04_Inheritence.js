"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var _02_class_1 = require("./02_class");
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, age, empID, employmentType, bonus) {
        if (employmentType === void 0) { employmentType = "FTE"; }
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.empID = empID;
        _this.employmentType = employmentType;
        _this.bonus = bonus;
        return _this;
    }
    return Employee;
}(_02_class_1.Person));
exports.Employee = Employee;
var emp1 = new Employee("Vishal", "Kumar", 23, 1001);
console.log(emp1);
