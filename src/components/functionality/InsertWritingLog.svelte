<script lang="ts">
	import type { WritingLogInsert } from 'src/types/writing.log.insert.type';

	import { createEventDispatcher } from 'svelte';

	let dispatch = createEventDispatcher();

	/** DATA **/
	let projects: string[] = ['Permission', 'Hotwings'];

	/** FORM VALUES **/

	/** DATE **/
	let date: string;
	let showDateError: boolean = false;

	//TODO:
	const validateDate = (e) => {
		let value: string = e.target.value;

		let timer;
		clearTimeout(timer);
		timer = setTimeout(() => {
			showDateError = true;
		}, 500);
	};

	let isSessionLog: boolean;

	let project: string;
	let wordCount: number;

	/** HANDLERS **/
	const handleInsert = () => {
		const toSend: WritingLogInsert = {
			writingLog: {
				date: new Date(date),
				wordCount: wordCount,
				description: 'Project is: ' + project
			},
			isSessionLog: isSessionLog
		};

		dispatch('insertLog', toSend);
	};

	const handlerDelete = () => {};
</script>

<form on:submit|preventDefault={handleInsert}>
	<h1>Create new log</h1>

	<!-- DATE -->
	<div>
		<label for="date">Date</label>
		<input
			type="date"
			id="date"
			bind:value={date}
			required
			on:keyup={validateDate}
			on:blur={validateDate}
		/>
		{#if showDateError}
			<label for="date" id="dateErrorMessage">Error: Date field is mandatory.</label>
		{/if}
	</div>

	<!-- PROJECTS -->
	<div>
		<label for="project">Project</label>
		<select id="project" bind:value={project} required>
			<option value="" selected>Select the project</option>
			{#each projects as project}
				<option>{project}</option>
			{/each}
		</select>
	</div>

	<!-- WORD COUNT -->
	<div>
		<label for="wordCount"
			>{#if isSessionLog}Session{:else}Day{/if} Word Count</label
		>
		<input type="number" id="wordCount" bind:value={wordCount} required />

		<input type="checkbox" id="isSessionLog" bind:checked={isSessionLog} />
		<label for="isSessionLog">It's a session log</label>
	</div>

	<!-- SUBMIT BUTTON -->
	<div>
		<input type="submit" value="Add new log" />
	</div>
</form>
