abstract class UserAccount {
    // public
    public name: string;
    protected age: number

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age; 
    }

    logDeatails(): void {
        console.log(`Tha player ${this.name} is ${this.age} years old`);
    }
}

class CharAccount extends UserAccount {
    // private
    private nickname: string;
    // readonly
    level: number;

    constructor(name: string, age: number, nickname: string, level: number) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }

    get  getLevel() {
        console.log("-----GET-----")
        return this.level;
    }

    set setLevel(level: number) {
        this.level = level
    }

    logChartDetails(): void {
        console.log(`The player ${this.name} is ${this.age} and has the char ${this.nickname} at the level ${this.level}`);
    }
}

// const will = new UserAccount("Willian", 30);
// console.log(will);
// will.logDeatails();

const john = new CharAccount("John", 45, "johnmaster", 80);
// john.nickname = "willjusten";
console.log(john);
john.logDeatails();
john.logChartDetails();

john.setLevel = 499;

console.log(john.getLevel);