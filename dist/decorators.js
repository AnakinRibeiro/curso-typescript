"use strict";
// @Component
// @Selector
// @useState("qasdda")
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Factory
// function Logger(prefix: string) {
//     return (target: any) => {
//         console.log(`${prefix} - ${target}`)
//     }
// }
// @Logger("awesome")
// class Foo {}
// // CLASS DECORATOR
// function setAPIVersion(apiVersion: string) {
//     return (constructor: any) => {
//         return class extends constructor {
//             version = apiVersion
//         }
//     }
// }
// // decorator que vai anotar a versão da API
// @setAPIVersion("1.0.0")
// class API {}
// console.log(new API());
// PROPERTY DECORATOR
// function minLength(length: number) {
//     return (target: any, key: string) => {
//         // val = interestelar
//         let val = target[key]
//         const getter = () => val;
//         const setter = (value: string) => {
//             if(value.length < length) {
//                 console.log(`Error: você não pode criar ${key} com tamanho menor que ${length}.`)
//             } else {
//                 val = value
//             }
//         }
//         Object.defineProperty(target, key, {
//             get: getter,
//             set: setter,
//         })
//     }
// }
// class Movie {
//     // validação - se for menor que 5 - ERRO
//     @minLength(50)
//     title: string;
//     constructor(t: string) {
//         this.title = t;
//     }
// }
// const movie = new Movie("Interestelar");
// console.log(movie.title);
// METHOD DECORATOR
function delay(ms) {
    return function (target, key, descriptor) {
        // console.log(target)
        // console.log(key)
        // console.log(descriptor)
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log("Esperando " + ms + "...");
            setTimeout(function () {
                originalMethod.apply(_this, args);
            }, ms);
            return descriptor;
        };
    };
}
var Greeter = /** @class */ (function () {
    function Greeter(g) {
        this.greeting = g;
    }
    // esperar um tempo e rodar o método (ms)
    Greeter.prototype.greet = function () {
        console.log("Hello! " + this.greeting);
    };
    __decorate([
        delay(2000)
    ], Greeter.prototype, "greet", null);
    return Greeter;
}());
var pessoa = new Greeter("pessoa");
pessoa.greet();
// Parameter decorator
// Acessor decorator
