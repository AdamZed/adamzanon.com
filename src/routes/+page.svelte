<script>
	import Projects from './Projects.svelte';
</script>

<svelte:head>
	<title>Adam Zanon</title>
</svelte:head>

<div class="mx-10 mt-20 border-t-2 border-secondary pt-2 lg:mx-52 lg:mt-48 lg:pt-6">
	<h1 class="font-mono text-3xl font-bold text-primary">Adam Zanon</h1>
	<div>
		<a aria-label="github link" target="_blank" href="https://www.github.com/AdamZed">
			<span class="icon-[mingcute--github-line] size-7 text-neutral hover:text-secondary"></span>
		</a>
		<a aria-label="linkedin link" target="_blank" href="https://www.linkedin.com/in/adam-zanon/">
			<span class="icon-[mingcute--linkedin-line] size-7 text-neutral hover:text-secondary"></span>
		</a>
	</div>
</div>

<Projects />

<footer class="footer footer-center rounded-t p-10">
	<p class="flex text-neutral">
		© 2024 Adam Zanon <a
			aria-label="project source link"
			target="_blank"
			href="https://www.github.com/AdamZed/adamzanon.com"
		>
			<span class="icon-[mingcute--github-fill] size-4 text-neutral hover:text-secondary"></span>
		</a>
	</p>
</footer>
