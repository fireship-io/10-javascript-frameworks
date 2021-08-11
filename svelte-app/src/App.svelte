<script>
	import { onMount } from 'svelte';

	let todos = [];
	let todoText = '';

	onMount(() => {
		const existingTodos = localStorage.getItem('todos');
    	todos = JSON.parse(existingTodos) || [];
	});

	function addTodo() {
		todos = [...todos, todoText];
    	localStorage.setItem('todos', JSON.stringify(todos));
	}

</script>

<main>

	<ul>
		{#each todos as todo}
			<li>{todo}</li>
		{/each}
	</ul>

	<form on:submit|preventDefault={addTodo}>
	
		<input bind:value={todoText} placeholder="What needs to be done?">
		<input type="submit" value="Add todo">
	</form>

</main>
