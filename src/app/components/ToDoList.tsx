// Using curly braces: A window into the JavaScript world

const today = new Date();

function formateDate(date: Date) {
    return new Intl.DateTimeFormat("en-US", { weekday : "long"}).format(date);
}

export default function TodoList() {
    const name = 'Gregorio Y. Zara';
    return (
      <h1>
        {name}'s To Do List {formateDate(today)}
        </h1>
    );
  }
  