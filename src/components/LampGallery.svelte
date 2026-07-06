<script lang="ts">
    export let images: string[] = [];

    let active = 0;

    const prev = () => (active = (active - 1 + images.length) % images.length);
    const next = () => (active = (active + 1) % images.length);

    const goTo = (i: number) => (active = i);
</script>

<div class="flex flex-col gap-4">
    <!-- Main image -->
    <div class="relative overflow-hidden rounded-2xl bg-warm-white aspect-square group">
        {#each images as src, i}
            <img
                {src}
                alt="Lamp"
                class="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 {i === active
                    ? 'opacity-100'
                    : 'opacity-0'}"
            />
        {/each}

        {#if images.length > 1}
            <!-- Arrows -->
            <button
                on:click={prev}
                class="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cream/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-cream shadow-md"
            >
                <svg class="w-4 h-4 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                on:click={next}
                class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cream/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-cream shadow-md"
            >
                <svg class="w-4 h-4 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <!-- Counter -->
            <div class="absolute bottom-3 right-3 bg-charcoal/50 backdrop-blur-sm text-cream text-xs px-2.5 py-1 rounded-full">
                {active + 1} / {images.length}
            </div>
        {/if}
    </div>

    <!-- Thumbnails -->
    {#if images.length > 1}
        <div class="flex gap-2 overflow-x-auto pb-1">
            {#each images as src, i}
                <button
                    on:click={() => goTo(i)}
                    class="shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-200 {i === active
                        ? 'border-brass opacity-100'
                        : 'border-transparent opacity-50 hover:opacity-80'}"
                >
                    <img {src} alt="thumbnail {i + 1}" class="w-full h-full object-cover object-center" />
                </button>
            {/each}
        </div>
    {/if}
</div>
