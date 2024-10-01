<script>
	import Projects from './Projects.svelte';
</script>

<svelte:head>
	<title>Adam Zanon</title>
</svelte:head>

<div class="mx-10 mt-20 border-t-2 border-secondary pt-2 lg:mx-52 lg:mt-48 lg:pt-6">
	<h1 class="font-mono text-3xl font-bold text-primary">Adam Zanon</h1>
	<div>
		<a target="_blank" href="https://www.github.com/AdamZed">
			<span class="icon-[mingcute--github-line] size-7 text-neutral hover:text-secondary" />
		</a>
		<a target="_blank" href="https://www.linkedin.com/in/adam-zanon/">
			<span class="icon-[mingcute--linkedin-line] size-7 text-neutral hover:text-secondary" />
		</a>
	</div>
</div>

<Projects />

<div class="footer mb-2 flex justify-center text-center text-neutral">
	© 2024 Adam Zanon<a target="_blank" href="https://www.github.com/AdamZed/adamzanon.com">
		<span class="icon-[mingcute--github-fill] size-5 text-neutral hover:text-secondary" />
	</a>
</div>
