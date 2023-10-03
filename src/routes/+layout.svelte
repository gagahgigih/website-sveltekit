<script lang="ts">
	import '../app.postcss';
    import Analytics from "$lib/analytics.svelte"
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
    import {AppBar, AppShell, storePopup} from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

</script>


<AppShell>
    <Analytics />
    <svelte:fragment slot="pageHeader">
        <AppBar background="bg-surface-500" shadow="shadow-md" gridColumns="grid-cols-1 md:grid-cols-3" slotDefault="place-self-center" slotLead="place-self-center md:place-self-start" slotTrail="place-content-center md:place-content-end">
            <svelte:fragment   slot="lead">
                <a href="/" class="text-xl md:text-3xl lg:text-4xl 2xl:text-7xl no-underline opacity-80 text-black font-caveat">Gagah Gigih</a>
            </svelte:fragment>
            <svelte:fragment >
                <div class="flex gap-3 mx-5">
                    <a href="/" class=" text-md md:text-lg lg:text-2xl no-underline font-inter opacity-80 text-black hover:opacity-50">Home</a>
                    <a href="/about" class=" text-md md:text-lg lg:text-2xl no-underline font-inter opacity-80 text-black hover:opacity-50">About</a>
                    <a href="/gallery" class="text-md md:text-lg lg:text-2xl no-underline font-inter opacity-80 text-black hover:opacity-50">Gallery</a>
                    <a href="https://maps.app.goo.gl/n7V8BibWLAGC2LjR6" class="text-md md:text-lg lg:text-2xl no-underline font-inter opacity-80 text-black hover:opacity-50">Lokasi</a>
                </div>
            </svelte:fragment>

            <svelte:fragment slot="trail">
                    <a class="h-10 btn text-md md:text-lg lg:text-2xl rounded-full bg-gradient-to-r from-pink-700 to-teal-600 p-4 text-md no-underline font-inter opacity-80 text-white "  href="https://gg-self-studio-photo.youcanbook.me/">Booking</a>

            </svelte:fragment>
        </AppBar>
    </svelte:fragment>
    <slot />

    <svelte:fragment slot="pageFooter">
        <div class="bg-surface-500 shadow-md border-t-2 py-4">
            <div class="flex justify-center items-center w-full">
                <div class="flex flex-col justify-center items-center">
                    <div>
                        <p class="h3 text-black/80 font-caveat">Contact Us</p>
                    </div>
                    <div class="flex ">
                        <a href="mailto: cs@gagahgigih.site">
                            <img src="/svg/emails.svg" alt="email"
                                 class="hover:-translate-y-2 transition duration-300 ease-in-out bg-secondary-500/60 rounded-lg p-2 m-2 w-10"/>
                        </a>
                        <a href="https://www.instagram.com/gagah_gigih/">
                            <img src="/svg/ig.svg" alt="instagram"
                                 class="hover:-translate-y-2 transition duration-300 bg-secondary-500/60 rounded-lg p-2 m-2 w-10"/>
                        </a>
                        <a href="https://wa.me/6282137263180?text=Halo%20kak%20boleh%20bertanya%20sedikit?">
                            <img src="/svg/wa.svg" alt="whatssapp"
                                 class="hover:-translate-y-2 transition duration-300 bg-secondary-500/60 rounded-lg p-2 m-2 w-10"/>
                        </a>
                        <a href="https://www.youtube.com/MultimediaPIctures">
                            <img src="/svg/yt.svg" alt="youtube mp"
                                 class="hover:-translate-y-2 transition duration-300 bg-secondary-500/60 rounded-lg p-2 m-2 w-10"/>
                        </a>
                        <a href="https://maps.app.goo.gl/n7V8BibWLAGC2LjR6">
                            <img src="/svg/gmaps.svg" alt="maps"
                                 class="hover:-translate-y-2 transition duration-300 bg-secondary-500/60 object-fit rounded-lg p-2 m-2 w-10"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </svelte:fragment>
</AppShell>

