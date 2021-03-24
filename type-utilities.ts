type Todo = {
    title: string;
    description: string;
    completed: boolean;
}

// READONLY

const todo: Readonly <Todo> = {
    title: "Assistir Dark De novo",
    description: "Relembrar os detalhes",
    completed: false
};

console.log(todo);

// todo.completed = true;

// PARTIAL
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate }
}

const todo2: Todo = updateTodo(todo, { completed: true })

console.log(todo2);

// PICK
type TodoPreview = Pick<Todo, "title" | "completed">

const todo3: TodoPreview = {
    title: "Fechar Ghost of Tsushima",
    completed: false
}

// OMIT
type TodoPreview2 = Omit<Todo, "description">
const todo4: TodoPreview = {
    title: "Fechar Ghost of Tsushima",
    completed: false
}