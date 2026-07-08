<script lang="ts">
    import cn from "classnames";
    import { Menu, X, House, Lamp, LampCeiling } from "lucide-svelte";
    import { fade, fly } from "svelte/transition";

    interface Props {
        path: string;
    }

    const { path }: Props = $props();

    let y = $state(0);
    let isMenuOpen = $state(false);

    const isScrolled = $derived.by(() => y > 25);

    $effect(() => {
        if (typeof document !== "undefined") {
            document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
        }
    });

    const linkStyles = [
        "[&>a]:relative [&>a]:w-full [&>a]:whitespace-nowrap [&>a]:text-mid [&>a]:hover:text-charcoal [&>a]:transition-colors [&>a]:duration-200",

        // HOVER pill
        "[&>a[aria-current='false']]:hover:after:absolute [&>a[aria-current='false']]:hover:after:content-['']",
        "[&>a[aria-current='false']]:hover:after:-left-3 [&>a[aria-current='false']]:hover:after:-bottom-0.5",
        "[&>a[aria-current='false']]:hover:after:h-full [&>a[aria-current='false']]:hover:after:w-[calc(100%_+_1.5rem)] [&>a[aria-current='false']]:after:-z-1",
        "[&>a[aria-current='false']]:hover:after:bg-brass/10 [&>a[aria-current='false']]:hover:after:animate-nav-hover",
        "[&>a[aria-current='false']]:hover:after:rounded-full",

        // ACTIVE pill
        "[&>a[aria-current='true']]:before:absolute [&>a[aria-current='true']]:before:content-['']",
        "[&>a[aria-current='true']]:before:-left-3 [&>a[aria-current='true']]:before:-bottom-0.5",
        "[&>a[aria-current='true']]:before:h-full [&>a[aria-current='true']]:before:w-[calc(100%_+_1.5rem)]",
        "[&>a[aria-current='true']]:before:bg-brass/12",
        "[&>a[aria-current='true']]:before:transition-all [&>a[aria-current='true']]:before:duration-300",
        "[&>a[aria-current='true']]:text-charcoal [&>a[aria-current='true']]:before:rounded-full [&>a[aria-current='true']]:before:-z-1",
    ].join(" ");
</script>

<svelte:window bind:scrollY={y} />

<header
    class={cn(
        "rounded-xl fixed inset-x-0 mx-auto max-w-[calc(100vw-0.5rem)] w-full z-50 transition-all duration-500 text-lg",
        isScrolled ? "backdrop-blur-md bg-cream/85  py-1" : "py-6",
    )}
>
    <div
        class="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center"
    >
        <nav
            class={cn(
                "relative items-center hidden mx-auto md:flex gap-12 transition-colors duration-300 px-6 py-4 rounded-full font-light text-xl tracking-wide text-charcoal",
                linkStyles,
            )}
        >
            <a href="/" aria-current={path === "/"}
                ><LampCeiling class="w-5 mt-1" /></a
            >
        </nav>

        <button
            class="ml-auto md:hidden p-4 focus:outline-none text-charcoal transition-colors"
            onclick={() => (isMenuOpen = !isMenuOpen)}
            aria-label="Toggle menu"
        >
            {#if isMenuOpen}
                <X size={32} />
            {:else}
                <Menu size={32} />
            {/if}
        </button>
    </div>
</header>

{#if isMenuOpen}
    <div
        class="fixed inset-0 bg-black/20 z-60 backdrop-blur-sm"
        transition:fade={{ duration: 200 }}
        onclick={() => (isMenuOpen = false)}
        role="button"
        tabindex="0"
        onkeydown={(e) => e.key === "Escape" && (isMenuOpen = false)}
    ></div>

    <aside
        class="fixed top-0 right-0 h-full w-[75vw] md:w-1/2 bg-warm-white z-70 shadow-2xl border-l border-brass/15 flex flex-col p-8 pt-24"
        transition:fly={{ x: "100%", duration: 200, opacity: 1 }}
    >
        <nav
            class={cn(
                linkStyles,
                "flex flex-col gap-6 text-xl font-light items-center [&>a]:flex [&>a]:gap-2 [&>a]:p-2 [&>a]:transition-colors",
            )}
        >
            <a
                href="/"
                aria-current={path === "/"}
                onclick={() => (isMenuOpen = false)}
            >
                <LampCeiling class="mt-1" /> Hjem
            </a>
        </nav>

        <div class="mt-auto text-sm text-mid">
            <div class="flex items-center gap-1">
                <span class="text-brass text-base">©</span> Morfar's Lamper
            </div>
        </div>
    </aside>
{/if}
