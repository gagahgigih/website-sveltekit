<svelte:head>
    <title>Gagah Gigih: Tentang Kami</title>
    <meta name="description" content="Tentang Kami Gagah Gigih Studio Photo & Agency Terbaik di Pangkalan Bun" />
    <meta name="keywords" content="Foto, Studio Foto, Pangkalan Bun, Pembuatan Website, Data Analyst">
    <meta name="Gagah Gigih" content="Gagah Gigih Studio">
    <meta charset="UTF-8">
</svelte:head>
<script>
    import Icon from '@iconify/svelte';
    import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

</script>
<div class="w-screen h-screen flex flex-col items-center  p-4 bg-bg-infinite ">
    <div class="w-full md:w-1/2 ">
        <Accordion  hover="transition duration-300 ease-in-out hover:bg-primary-300 group ">
            <div class="">
                <AccordionItem open>
                    <svelte:fragment slot="lead"><Icon icon="akar-icons:person" /></svelte:fragment>
                    <svelte:fragment  slot="summary"><h2 class="text-white border-b-2 border-white font-extrabold font-caveat text-xl lg:text-3xl group-hover:text-secondary-500">Siapa Kalian?</h2></svelte:fragment>
                    <svelte:fragment slot="content"><p class="bg-blacky/50 p-4 rounded-md font-inter text-white/80 backdrop-blur-md">Gagah Gigih adalah Self Studio Photo di Pangkalan Bun yang menggabungkan seni dan teknologi. Anggota kami mulai dari photographer, Web app developer, designer graphic, sampai data analyst</p></svelte:fragment>
                </AccordionItem>
            </div>
            <div class="">
                <AccordionItem open>
                    <svelte:fragment slot="lead"><Icon icon="zondicons:portfolio" /></svelte:fragment>
                    <svelte:fragment  slot="summary"><h2 class="text-white border-b-2 border-white  font-extrabold font-caveat text-xl lg:text-3xl group-hover:text-secondary-500">Boleh liat portofolio kalian?</h2></svelte:fragment>
                    <svelte:fragment slot="content">
                        <div class="flex flex-col gap-4">
                            <div>
                                <p class="bg-blacky/50 p-4 rounded-md font-inter text-white/80 backdrop-blur-md">
                                    Boleh.. Untuk data analyst dan web development cek di
                                </p>
                            </div>
                            <div class="font-inter w-full font-md">
                                <a href="http://kisetsu.tech/" class="text-center w-full bg-tertiary-500 p-3 rounded-md font-caveat text-xl lg:text-3xl transition duration-300 ease-in-out hover:bg-tertiary-200">
                                    Kisetsu Tech - Dwis Aji </a>
                            </div>
                        </div>
                    </svelte:fragment>

                </AccordionItem>
            </div>
            <div class="">
                <AccordionItem>
                    <svelte:fragment slot="lead"><Icon icon="tabler:location-filled" /></svelte:fragment>
                    <svelte:fragment  slot="summary"><h2 class="text-white border-b-2 border-white font-extrabold font-caveat text-xl lg:text-3xl group-hover:text-secondary-500">Lokasi Kantor?</h2></svelte:fragment>
                    <svelte:fragment slot="content"><p class="bg-blacky/50 p-4 rounded-md font-inter text-white/80 backdrop-blur-md">Lokasi Studio Kami  Jalan Gerilya Kumai Hulu Kecamatan Kumai Kalimantan Tengah 74119 Indonesia</p></svelte:fragment>
                </AccordionItem>
            </div>
            <div class="">
                <AccordionItem>
                    <svelte:fragment slot="lead"><Icon icon="ph:question-fill" /></svelte:fragment>
                    <svelte:fragment  slot="summary"><h2 class="text-white border-b-2 border-white font-extrabold font-caveat text-xl lg:text-3xl group-hover:text-secondary-500">Apa yang kalian lakukan?</h2></svelte:fragment>
                    <svelte:fragment slot="content"><p class="bg-blacky/50 p-4 rounded-md font-inter text-white/80 backdrop-blur-md">Dengan tim yang bertalenta kami memberikan beberapa layanan seperti self studio, pembuatan website static dengan framework, rental kamera dan studio hingga desain social media post dan logo serta motion graphic</p></svelte:fragment>
                </AccordionItem>
            </div>
            <div class="">
                <AccordionItem>
                    <svelte:fragment slot="lead"><Icon icon="maki:college" /></svelte:fragment>
                    <svelte:fragment  slot="summary"><h2 class="text-white border-b-2 border-white font-extrabold font-caveat text-xl lg:text-3xl group-hover:text-secondary-500">Bagaimana kalian membangunnya?</h2></svelte:fragment>
                    <svelte:fragment slot="content"><p class="bg-blacky/50 p-4 rounded-md font-inter text-white/80 backdrop-blur-md">Kru kami merupakan lulusan terbaik di bidangnya dengan pengalaman di industri kreatif</p></svelte:fragment>
                </AccordionItem>
            </div>
            <div class="">
                <AccordionItem>
                    <svelte:fragment slot="lead"><Icon icon="clarity:date-solid" /></svelte:fragment>
                    <svelte:fragment  slot="summary"><h2 class="text-white border-b-2 border-white font-extrabold font-caveat text-xl lg:text-3xl group-hover:text-secondary-500">Kapan berdiri?</h2></svelte:fragment>
                    <svelte:fragment slot="content"><p class="bg-blacky/50 p-4 rounded-md font-inter text-white/80 backdrop-blur-md">Studio ini berdiri pada tahun 2023 tetapi kiprah kami di industri kreatif sudah sejak 2013 dimulai dengan Multimedia Pictures</p></svelte:fragment>
                </AccordionItem>
            </div>

        </Accordion>
    </div>
</div>
