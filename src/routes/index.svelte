<script lang="ts">
	import PageTitle from '$components/layout/page.title.svelte';
	import Table from '$components/table.svelte';
	import InsertWritingLog from '$components/functionality/InsertWritingLog.svelte';

	import type { WritingLog } from '$types/writing.log.type';
	import type { WritingLogInsert } from '$types/writing.log.insert.type';

	let logs: WritingLog[] = [
		{ date: new Date('2021-07-09'), wordCount: 15, description: 'Scene #3' },
		{ date: new Date('2021-07-10'), wordCount: 65, description: 'Scene #4' }
	];

	const addWritingLog = (e) => {
		const received: WritingLogInsert = e.detail;
		const log: WritingLog = received.writingLog;

		if (!received.isSessionLog) {
			log.wordCount = calculateSessionWordCount(log.date, log.wordCount);
		}

		logs = [...logs, log];
	};

	const calculateSessionWordCount = (date: Date, sessionWordCount: number): number => {
		let dayWordCount: number = 0;

		logs.forEach((log) => {
			//Check if same day
			if (
				log.date.getFullYear() == date.getFullYear() &&
				log.date.getMonth() == date.getMonth() &&
				log.date.getDay() == date.getDay()
			) {
				dayWordCount = +log.wordCount;
			}
		});

		return sessionWordCount - dayWordCount;
	};
</script>

<div>
	<PageTitle title="Writing Logger" />

	<img
		src="../../resources/img/graph_wireframe.jpg"
		alt="Placeholder for graph"
		style="width:100%; height: 300px;"
	/>

	<Table {logs} />

	<div>
		<InsertWritingLog on:insertLog={addWritingLog} />
	</div>
</div>
