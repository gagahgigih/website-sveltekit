<script>
    import img from '$lib/images/IMG6.jpg';
    import img2 from '$lib/images/IMG5.jpg'
    import img3 from '$lib/images/IMG4.jpg';
    import {Step, Stepper} from "@skeletonlabs/skeleton";
    import Icon from '@iconify/svelte';


    let bwfilter = false;
    let secfilter = false;
    let thifilter = false;
    $: active_class = bwfilter ? 'grayscale-0 transition duration-500 ease-ini-out' :
        'blur-xl transition duration-500 ease-ini-out contrast-20';
    $: activesec = secfilter ? ' transition duration-500 ease-ini-out  invert-0' :
        ' invert transition duration-500 ease-ini-out contrast-20 hue-rotate-0';
    $: activethif = thifilter ? ' transition duration-500 ease-ini-out  saturate-200' :
        ' -saturate-50 transition duration-500 ease-ini-out contrast-20 hue-rotate-0';

</script>
<div id="self-photo" class="scroll-smooth bg-surface-500 py-6">
    <div class="w-screen flex justify-center items-center flex-col gap-4 lg:gap-8 ">
        <div class="text-2xl md:text-3xl lg:text-5xl text-center">
            <span class="font-extrabold font-inter text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-amber-400 to-70%">Kenyamanan. <span class="text-black/80">Berbagi Moment</span></span>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4 font-inter text-blacky/80 text-center ">
            <div class="w-full bg-gradient-to-tr from-red-400 to-purple-200 px-6 py-2 rounded-full transition duration-300 ease-in-out shadow-md shadow-blacky/50 hover:-translate-y-2">
                <a href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE4Mjc4NDc5MTY1MTU5NDQ1?story_media_id=3203332964641986656_61641968757&igshid=OGQ5ZDc2ODk2ZA==" class="">Lihat Harga</a>
            </div>
            <div class="w-full bg-gradient-to-tr from-blue-400 to-orange-200 px-6 py-2 rounded-full transition duration-300 ease-in-out shadow-md shadow-blacky/50 hover:-translate-y-2">
                <a href="/gallery" class="">Gallery</a>
            </div>
            <div class="w-full bg-gradient-to-tr from-lime-400 to-purple-200 px-6 py-2 rounded-full transition duration-300 ease-in-out shadow-md shadow-blacky/50 hover:-translate-y-2">
                <a href="/faq" class="">FAQ</a>
            </div>
            <div class="w-full bg-gradient-to-tr from-lime-400 to-purple-200 px-6 py-2 rounded-full transition duration-300 ease-in-out shadow-md shadow-blacky/50 hover:-translate-y-2">
                <a href="/aksesoris" class="">Aksesoris</a>
            </div>
            <div class="w-full bg-gradient-to-tr from-purple-400 to-amber-300-200 px-6 py-2 rounded-full transition duration-300 ease-in-out shadow-md shadow-blacky/50 hover:-translate-y-2">
                <a href="https://maps.app.goo.gl/n7V8BibWLAGC2LjR6" class="">Lokasi</a>
            </div>
        </div>
        <section class="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-4 px-6">
            <div class="h-[550px] shadow-xl shadow-blacky/50 rounded-md border-2 border-secondary-500 p-3 grid grid-rows-3 gap-2">
                <div class="text-center rows-span-2">
                    <span class="h4 font-inter font-md lg:text-2xl font-bold text-center">Sesi Spesial</span>
                    <h3 class="h3 font-inter font-md lg:text-2xl font-bold">Rp. 100.000</h3>
                </div>
                <div class="rows-span-2">
                    <ul>
                        <li>
                            <div class="flex gap-2 items-center font-inter">
                                <Icon icon="material-symbols:star" />
                                <span>Dengan photographer</span>
                            </div>
                        </li>
                        <li>
                            <div class="flex gap-2 items-center font-inter">
                                <Icon icon="material-symbols:check" />
                                <span>Durasi 30 Menit</span>
                            </div>
                        </li>
                        <li>
                            <div class="flex gap-2 items-center font-inter">
                                <Icon icon="material-symbols:check" />
                                <span>Free Aksesoris</span>
                            </div>
                        </li>
                        <li>
                            <div class="flex gap-2 items-center font-inter">
                                <Icon icon="material-symbols:check" />
                                <span>Gratis cetak 1 foto 4R</span>
                            </div>
                        </li>
                        <li>
                            <div class="flex gap-2 items-center font-inter">
                                <Icon icon="material-symbols:check" />
                                <span>Bebas Pilih 1 Background</span>
                            </div>
                        </li>
                        <li>
                            <div class="flex gap-2 items-center font-inter">
                                <Icon icon="material-symbols:check" />
                                <span>Gratis penyimpanan foto di server selama 1 minggu</span>
                            </div>
                        </li>
                        <li>
                            <div class="flex gap-2 items-center font-inter">
                                <Icon icon="material-symbols:check" />
                                <span>Maksimal 3 orang</span>
                            </div>
                        </li>
                        <li>
                            <div class="flex gap-2 items-center font-inter">
                                <Icon icon="mdi:asterisk" />
                                <span>Sedia Sewa Jas Rp.5000</span>
                            </div>
                        </li>
                        <li>
                            <div class="flex gap-2 items-center font-inter">
                                <Icon icon="mdi:asterisk" />
                                <span>Tambah per orang Rp.15000</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class=" pointer-events-none rows-span-2 place-self-end btn bg-blacky/80 text-surface-500 rounded-md h-12 w-full font-inter ">
                    <a href="https://gagahgigihstudio.zohobookings.com/#/customer/gagahgigihstudio" class="">Coming Soon</a>
                </div>
            </div>
            <div class=" h-[550px] rounded-md shadow-xl shadow-blacky/50 border-2 bg-secondary-500 text-white border-secondary-500 p-3 grid grid-rows-3 gap-2">
                <div class="text-center rows-span-2">
                    <span class="h4 font-inter font-md lg:text-2xl font-bold text-center">Self Photo</span>
                    <h3 class="h3 font-inter font-md lg:text-2xl font-bold">Rp. 50.000</h3>
                </div>
                <div class="rows-span-2">
                    <ul>
                        <li>
                            <div class="flex gap-2 items-center font-inter">
                                <Icon icon="material-symbols:check" />
                                <span>Durasi 30 Menit</span>
                            </div>
                        </li>
                        <li>
                            <div class="flex gap-2 items-center font-inter">
                                <Icon icon="material-symbols:check" />
                                <span>Free Aksesoris</span>
                            </div>
                        </li>
                        <li>
                            <div class="flex gap-2 items-center font-inter">
                                <Icon icon="material-symbols:check" />
                                <span>Gratis cetak 1 foto 4R</span>
                            </div>
                        </li>
                        <li>
                            <div class="flex gap-2 items-center font-inter">
                                <Icon icon="material-symbols:check" />
                                <span>Bebas Pilih 1 Background</span>
                            </div>
                        </li>

                        <li>
                            <div class="flex gap-2 items-center font-inter">
                                <Icon icon="material-symbols:check" />
                                <span>Maksimal 3 orang</span>
                            </div>
                        </li>
                        <li>
                            <div class="flex gap-2 items-center font-inter">
                                <Icon icon="material-symbols:check" />
                                <span>Gratis penyimpanan foto di server selama 1 minggu</span>
                            </div>
                        </li>
                        <li>
                            <div class="flex gap-2 items-center font-inter">
                                <Icon icon="mdi:asterisk" />
                                <span>Sedia Sewa Jas Rp.5.000</span>
                            </div>
                        </li>
                        <li>
                            <div class="flex gap-2 items-center font-inter">
                                <Icon icon="mdi:asterisk" />
                                <span>Tambah per orang Rp.15.000</span>
                            </div>
                        </li>
                        <li>
                            <div class="flex gap-2 items-center font-inter">
                                <Icon icon="mdi:asterisk" />
                                <span>Tambah Cetak Rp.15.000</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class=" self-end  ">
                    <a href="https://gg-self-studio-photo.youcanbook.me/" class="btn bg-surface-500 text-secondary-500 rounded-md h-12 w-full font-inter">Booking</a>
                </div>
            </div>
            <div class="h-[550px] shadow-xl shadow-blacky/50 rounded-md border-2 border-secondary-500 p-3 grid grid-rows-3 gap-2">
                <div class="text-center rows-span-2">
                    <span class="h4 font-inter font-md lg:text-2xl font-bold text-center">Social Media</span>
                    <h3 class="h3 font-inter font-md lg:text-2xl font-bold">Rp. 25.000</h3>
                </div>
                <div class="rows-span-2">
                    <ul>
                        <li>
                            <div class="flex gap-2 items-center font-inter">
                                <Icon icon="material-symbols:check" />
                                <span>Durasi 30 Menit</span>
                            </div>
                        </li>
                        <li>
                            <div class="flex gap-2 items-center font-inter">
                                <Icon icon="material-symbols:check" />
                                <span>Free Aksesoris</span>
                            </div>
                        </li>
                        <li>
                            <div class="flex gap-2 items-center font-inter">
                                <Icon icon="material-symbols:check" />
                                <span>Bebas Pilih 1 Background</span>
                            </div>
                        </li>

                        <li>
                            <div class="flex gap-2 items-center font-inter">
                                <Icon icon="material-symbols:check" />
                                <span>Maksimal 1 Orang</span>
                            </div>
                        </li>
                        <li>
                            <div class="flex gap-2 items-center font-inter">
                                <Icon icon="material-symbols:check" />
                                <span>Gratis penyimpanan foto di server selama 1 minggu</span>
                            </div>
                        </li>
                        <li>
                            <div class="flex gap-2 items-center font-inter">
                                <Icon icon="mdi:asterisk" />
                                <span>Sedia Sewa Jas Rp.5000</span>
                            </div>
                        </li>

                    </ul>
                </div>
                <div class="self-end ">
                    <a href="https://gg-self-studio-photo.youcanbook.me/" class=" btn bg-secondary-500 text-surface-500 rounded-md h-12 w-full font-inter ">Booking</a>
                </div>
            </div>
        </section>

        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="flex flex-col justify-center gap-2 bg-blacky/80 p-4 rounded-xl">
                <div class="backdrop-invert ">
                    <img class="w-60 h-fit  img-studio rounded-md  {active_class}" src={img3} alt="" />
                </div>
                <button on:click="{() => bwfilter = !bwfilter}" class="bg-surface-500 rounded-full p-2 font-inter" >Coba Edit</button>
            </div>
            <div class="flex flex-col justify-center gap-2 bg-blacky/80 p-4 rounded-xl">
                <div class="backdrop-invert">
                    <img class="w-60 h-fit  img-studio rounded-md {activesec}" src={img2} alt="" />
                </div>
                <button on:click="{() => secfilter = !secfilter}" class="bg-surface-500 rounded-full p-2 font-inter" >Coba Edit</button>
            </div>
            <div class="flex flex-col justify-center gap-2 bg-blacky/80 p-4 rounded-xl">
                <div class="backdrop-invert">
                    <img class="w-60 h-fit  img-studio rounded-md {activethif}" src={img} alt="" />
                </div>
                <button on:click="{() => thifilter = !thifilter}" class="bg-surface-500 rounded-full p-2 font-inter" >エディット</button>
            </div>
        </div>
<!--       -->

    </div>
</div>

<style>

</style>


<!--<div class=" text-blacky/80 p-4 divide-y font-inter border rounded-md border-purple-500">-->
<!--    <h2 class="font-inter text-justify text-xl md:text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-surface-500">Self Photo Studio</h2>-->
<!--    <p class="text-sm md:text-md lg:text-lg">Berfoto dengan sahabat, keluarga pasangan-->
<!--        dengan studio di atur oleh professional-->
<!--        selama 30 menit hanya 50.000. Gunakan aksesoris yang tersedia secara gratis</p>-->
<!--</div>-->
<!--<div class="bg-blacky/80 text-white/80 rounded-xl p-4 divide-y font-inter">-->
<!--    <h2 class="font-inter text-justify   text-xl md:text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-surface-500 to-orange-500">Custom Rent</h2>-->
<!--    <p class="text-sm md:text-md lg:text-lg">Jika anda lupa membawa pakaian seperti Jas atau Almamater kami menyewakan hal tersebut. Anda hanya perlu membayar 5 ribu sebagai bentuk komitmen kami agar studio selalu bersih</p>-->
<!--</div>-->