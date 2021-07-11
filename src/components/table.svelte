<script lang="ts">
	import type { WritingLog } from '$types/writing.log.type';

	export let logs : WritingLog[];

	//TODO: move to utils date thingy, probably
	function getDateString(date:Date): string {
		if (date == null) return;

		const month: number = date.getMonth() + 1;
		const monthString: string = (month < 10 ? '0' : '') + month;

		const day: number = date.getDate();
		const dayString: string = (day < 10 ? '0' : '') + day;

		return `${date.getFullYear()}-${monthString}-${dayString}`;
	}
</script>

<table>
	<thead>
		<tr>
			<th>Day</th>
			<th>Session Word Count</th>
			<th>Notes</th>
		</tr>
	</thead>
	<tbody>
		{#each logs as log}
			<tr >
				<td>{getDateString(log.date)}</td>
				<td>{log.wordCount}</td>
				<td>{log.description}</td>
			</tr>
		{/each}
	</tbody>
</table>
