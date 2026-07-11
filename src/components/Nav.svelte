<script lang="ts">
    import cn from "classnames";
    import { LampCeiling } from "lucide-svelte";
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
        "fixed inset-x-0 mx-auto max-w-[calc(100vw-0.5rem)] w-full z-50 transition-all duration-500",
        isScrolled ? "py-8" : "py-4",
    )}
>
    <div
        class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center"
    >
        <a
            href="/"
            class={cn(
                "transition-all duration-500 flex flex-col leading-none",
                isScrolled ? "opacity-0 pointer-events-none" : "opacity-100",
            )}
        >
            <span class="font-din text-2xl text-brass font-normal"
                >Morfar's</span
            >
            <span
                class="text-[10px] uppercase tracking-[0.3em] text-mid font-light mt-0.5"
                >Lamper</span
            >
        </a>

        <button
            class={cn(
                "ml-auto focus:outline-none text-charcoal transition-all duration-500 p-3 rounded-full",
                isScrolled ? "backdrop-blur-xs bg-cream/85" : "",
            )}
            onclick={() => (isMenuOpen = !isMenuOpen)}
            aria-label="Toggle menu"
        >
            {#if isMenuOpen}
                <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                >
                    <line x1="6" y1="6" x2="22" y2="22" />
                    <line x1="22" y1="6" x2="6" y2="22" />
                </svg>
            {:else}
                <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                >
                    <line x1="4" y1="9" x2="24" y2="9" />
                    <line x1="4" y1="15" x2="19" y2="15" />
                    <line x1="4" y1="21" x2="24" y2="21" />
                </svg>
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
                Hjem
            </a>
            <a
                href="/about"
                aria-current={path === "/about"}
                onclick={() => (isMenuOpen = false)}
            >
                Om os
            </a>
        </nav>

        <div class="mt-auto text-sm text-mid">
            <div class="flex items-center gap-1">
                <span class="text-brass text-base">©</span> Morfar's Lamper
            </div>
        </div>
    </aside>
{/if}
