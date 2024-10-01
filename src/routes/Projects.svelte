<script lang="ts">
	const BADGE_STYLES: Record<string, string> = {
		Swift: 'bg-[#EF4F3A]',
		Flutter: 'bg-[#25AAF2]',
		Python: 'bg-[#386C9C]',
		Django: 'bg-[#183D30]',
		Svelte: 'bg-[#FF3F18]',
		Java: 'bg-[#3467A5]'
	};
	let projects = [
		{
			name: 'MultiController',
			desc: 'macOS app for ToonTown multiboxing',
			link: 'https://www.ttmulti.com',
			badges: ['Swift', 'Svelte']
		},
		{
			name: 'SummNews',
			desc: 'News mobile application made in 24 hours for YorkU Hacks 2018',
			link: 'https://github.com/AdamZed/SummNews',
			badges: ['Flutter']
		},
		{
			name: 'YURoomie',
			desc: "University roommate finder website created for YorkU's Steacie Library Hackfest 2018",
			link: 'https://github.com/michaelroudnitski/yuroomie',
			badges: ['Python', 'Django']
		},
		{
			name: 'BIOPix',
			desc: 'Tool used to draw over pictures with freehand, lines, angles, and more',
			link: 'https://github.com/AdamZed/BIOpix',
			badges: ['Java']
		}
	];
</script>

<div class="my-20 bg-[#242c3b] pb-20">
	<div class="mx-52 pt-6">
		<div class="flex justify-center">
			<h2 class="my-4 w-64 border-b-2 border-primary text-center text-2xl font-bold text-neutral">
				Projects
			</h2>
		</div>
		<div class="flex flex-wrap justify-around gap-5">
			{#each projects as proj}
				<div
					class="card card-bordered max-w-xs basis-full bg-base-300 p-10 shadow-xl hover:bg-base-200"
				>
					<h2 class="card-title">{proj.name}</h2>
					<div>
						{#each proj.badges as badge}
							<span class="badge ml-1 {BADGE_STYLES[badge]} text-black">{badge}</span>
						{/each}
					</div>

					<p class="card-body">{proj.desc}</p>
					<div class="card-actions justify-end">
						<a
							target="_blank"
							href={proj.link}
							class="btn btn-primary btn-sm py-2 hover:btn-secondary">See More</a
						>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
