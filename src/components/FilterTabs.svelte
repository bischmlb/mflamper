<script lang="ts">
    import { onMount } from "svelte";

    export let tabs: { value: string; count: number }[] = [];

    let active = "all";

    function setFilter(value: string) {
        active = value;
        const cards = document.querySelectorAll<HTMLElement>(".lamp-card");
        cards.forEach((card) => {
            const variant = card.dataset.variant ?? "";
            const visible = value === "all" || variant === value;
            card.style.display = visible ? "" : "none";
        });
    }

    onMount(() => setFilter("all"));
</script>

<div class="flex flex-wrap gap-2 mb-10">
    <!-- All tab -->
    <button
        on:click={() => setFilter("all")}
        class="relative px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 {active ===
        'all'
            ? 'bg-brass text-cream border-transparent shadow-lg shadow-brass/25'
            : 'bg-warm-white border-brass/20 text-mid hover:border-brass/50 hover:text-charcoal'}"
    >
        Alle
        <span
            class="ml-1.5 text-xs {active === 'all'
                ? 'text-cream/70'
                : 'text-mid/50'}"
        >
            {tabs.reduce((sum, t) => sum + t.count, 0)}
        </span>
    </button>

    {#each tabs as tab}
        <button
            on:click={() => setFilter(tab.value)}
            class="relative px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 {active ===
            tab.value
                ? 'bg-brass text-cream border-transparent shadow-lg shadow-brass/25'
                : 'bg-warm-white border-brass/20 text-mid hover:border-brass/50 hover:text-charcoal'}"
        >
            {tab.value}
            <span
                class="ml-1.5 text-xs {active === tab.value
                    ? 'text-cream/70'
                    : 'text-mid/50'}"
            >
                {tab.count}
            </span>
        </button>
    {/each}
</div>
