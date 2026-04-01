<script>
    let state = "idle";
    let errorMessage = "";

    async function handleSubmit(e) {
        state = "submitting";
        errorMessage = "";

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch("/api/submit-contact", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) throw new Error("Kunne ikke sende beskeden");

            state = "success";
            form.reset();

            setTimeout(() => {
                state = "idle";
            }, 5000);
        } catch (error) {
            console.error(error);
            state = "error";
            errorMessage = "Der opstod en teknisk fejl. Prøv venligst igen.";
        }
    }
</script>

<div
    class="rounded-2xl overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-5"
>
    <div
        class="lg:col-span-2 p-8 md:p-12 bg-mid flex flex-col justify-between text-white"
    >
        <div>
            <h3 class="text-2xl font-medium mb-6">Kontakt os</h3>
            <p class="text-gray-300 mb-8 leading-relaxed">
                Vi sætter en ære i at svare hurtigt og præcist. Udfyld
                formularen, så vender vi tilbage inden for 24 timer på hverdage.
            </p>

            <div class="space-y-6">
                <div class="flex items-start space-x-4">
                    <svg
                        class="w-5 h-5 text-primary mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        ><path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        ></path><path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path></svg
                    >
                    <span class="text-gray-200">København Ø</span>
                </div>
                <div class="flex items-start space-x-4">
                    <svg
                        class="w-5 h-5 text-primary mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        ><path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        ></path></svg
                    >
                    <span class="text-gray-200">+45 22 10 23 24</span>
                </div>
                <div class="flex items-start space-x-4">
                    <svg
                        class="w-5 h-5 text-primary mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        ><path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        ></path></svg
                    >
                    <span class="text-gray-200">pnentreprise@outlook.dk</span>
                </div>
            </div>
        </div>

        <div class="mt-12 lg:mt-0">
            <blockquote
                class="text-white/60 italic border-l-2 border-primary pl-4"
            >
                "Vi sætter en stor ære i ordentligt håndværk og god service."
            </blockquote>
        </div>
    </div>

    <div class="lg:col-span-3 p-8 md:p-12 bg-white relative">
        {#if state === "success"}
            <div
                class="absolute inset-0 bg-white/90 z-10 flex flex-col items-center justify-center text-center p-8 animate-fade-in"
            >
                <svg
                    class="w-16 h-16 text-green-600 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    ><path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                    ></path></svg
                >
                <h3 class="text-2xl font-bold text-mid">
                    Tak for din henvendelse!
                </h3>
                <p class="text-gray-600 mt-2">
                    Vi har modtaget din besked og vender tilbage hurtigst
                    muligt.
                </p>
                <button
                    on:click={() => (state = "idle")}
                    class="hover:cursor-pointer mt-6 text-sm text-primary underline"
                    >Send en ny besked</button
                >
            </div>
        {/if}

        <form on:submit|preventDefault={handleSubmit} class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="group">
                    <label
                        for="name"
                        class="block text-sm font-medium text-mid mb-2"
                        >Navn</label
                    >
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        class="w-full bg-primary/30 border border-gray-200 rounded-lg px-4 py-3 text-mid placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200"
                    />
                </div>

                <div>
                    <label
                        for="email"
                        class="block text-sm font-medium text-mid mb-2"
                        >Email</label
                    >
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        class="w-full bg-primary/30 border border-gray-200 rounded-lg px-4 py-3 text-mid placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200"
                    />
                </div>
            </div>

            <div>
                <label
                    for="subject"
                    class="block text-sm font-medium text-mid mb-2"
                    >Hvad drejer det sig om?</label
                >
                <div class="relative">
                    <select
                        id="subject"
                        name="subject"
                        class="w-full bg-primary/30 border border-gray-200 rounded-lg px-4 py-3 text-mid appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200"
                    >
                        <option>Døre & Vinduer</option>
                        <option>Tømrer & Snedker</option>
                        <option>Skydedøre</option>
                        <option>Serviceaftaler</option>
                        <option>Andet</option>
                    </select>
                    <div
                        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 mid"
                    >
                        <svg
                            class="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            ><path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                            ></path></svg
                        >
                    </div>
                </div>
            </div>

            <div>
                <label
                    for="message"
                    class="block text-sm font-medium text-mid mb-2"
                    >Beskrivelse af opgaven</label
                >
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    class="w-full bg-primary/30 border border-gray-200 rounded-lg px-4 py-3 text-mid placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200"
                    placeholder="Fortæl os lidt om hvad du har brug for hjælp til..."
                ></textarea>
            </div>

            {#if state === "error"}
                <div class="p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                    {errorMessage}
                </div>
            {/if}

            <div class="pt-4">
                <button
                    type="submit"
                    disabled={state === "submitting"}
                    class="text-white bg-mid hover:bg-heavy shadow-lg shadow-mid/20 hover:cursor-pointer inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 gap-2"
                >
                    {#if state === "submitting"}
                        <svg
                            class="animate-spin h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            ><circle
                                class="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                stroke-width="4"
                            ></circle><path
                                class="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path></svg
                        >
                        Sender...
                    {:else}
                        Send forespørgsel
                    {/if}
                </button>
            </div>
        </form>
    </div>
</div>
