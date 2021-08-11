import { html, css, LitElement, property } from 'lit-element';

export class LitApp extends LitElement {

  @property({ type: Array }) todos: string[] = [];

  @property({ type: String }) todoText:string = '';

  connectedCallback() {
    super.connectedCallback();
    const existingTodos = localStorage.getItem('todos');
    this.todos = JSON.parse(existingTodos as string) || [];
  }


  addTodo(event: Event) {
    event.preventDefault();
    console.log(this.todoText, event);
    this.todos = [...this.todos, this.todoText];
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  render() {
    return html`

    <ul>
      ${this.todos.map(todo => html`<li>${todo}</li>`)}
    </ul>

      <form @submit="${this.addTodo}">
        <input type="text" .value="${this.todoText}" @change=${(e: any) => this.todoText = e.target.value} />
        <input type="submit">
      </form>
    `;
  }
}
