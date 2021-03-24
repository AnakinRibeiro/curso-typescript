// @Component
// @Selector
// @useState("qasdda")

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

function delay(ms: number) {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        // console.log(target)
        // console.log(key)
        // console.log(descriptor)
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any) {
            console.log(`Esperando ${ms}...`);
            setTimeout(() => {
                originalMethod.apply(this, args)
            }, ms);

            return descriptor;
        }
    }
}

class Greeter {
    greeting: string;

    constructor(g: string) {
        this.greeting = g
    }

    // esperar um tempo e rodar o método (ms)
    @delay(2000)
    greet() {
        console.log(`Hello! ${this.greeting}`)
    }
}

const pessoa = new Greeter("pessoa");
pessoa.greet();

// Parameter decorator
// Acessor decorator