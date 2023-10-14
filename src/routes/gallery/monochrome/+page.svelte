<svelte:head>
    <title>Gagah Gigih: Monochrome</title>
    <meta name="description" content="Gallery Monochrome Kami" />
    <meta name="keywords" content="Foto, Studio Foto, Pangkalan Bun, Pembuatan Website, Data Analyst">
    <meta name="Gagah Gigih" content="Gagah Gigih Studio">
    <meta charset="UTF-8">
</svelte:head>
<script>
    import img1 from '$lib/images/gallery/monochrome/M1.jpg';
    import img2 from '$lib/images/gallery/monochrome/M2.jpg';
    import img3 from '$lib/images/gallery/monochrome/M3.jpg';
    import img4 from '$lib/images/gallery/monochrome/M4.jpg';


</script>
<div class="w-screen flex flex-col justify-center items-center bg-surface-500 py-8  ">
    <div>
        <div class="w-screen flex justify-center items-center mb-4">
            <h1 class="font-inter font-extrabold text-2xl md:text-3xl lg:text-5xl 2xl:text-7xl text-center text-transparent  bg-clip-text bg-gradient-to-r from-neutral-900 to-gray-300">Monochrome</h1>
        </div>
        <div class="w-screen flex justify-center items-center m-2 p-2">
            <p class="font-inter text-center lg:text-2xl">Reserve Your Timeless Moment with Monochrome Magic </p>
        </div>
    </div>
    <div class="grid grid-cols-2 xl:grid-cols-4 gap-2 mx-3">

        <div class="">
            <img class=" rounded-md   img-studio"  alt="img 2" src={img1} >
        </div>
        <div class="">
            <img class=" rounded-md   img-studio"  alt="img 2" src={img2} >
        </div>
        <div class="">
            <img class=" rounded-md   img-studio"  alt="img 2" src={img3} >
        </div>
        <div class="">
            <img class=" rounded-md   img-studio"  alt="img 2" src={img4} >
        </div>
    </div>
    <div class="w-screen flex flex-col justify-center items-center mt-8 font-inter gap-2">
        <p class="p-2 lg:text-2xl text-center text-transparent  bg-clip-text bg-gradient-to-tl from-neutral-600 to-gray-200">Your Invitation to Reserve a Monochrome Masterpiece at Our Studio! </p>
        <div class="">
            <a class="h-10 btn text-md md:text-lg lg:text-2xl rounded-full bg-gradient-to-r from-zinc-700 to-neutral-50 p-4 text-md no-underline font-inter opacity-80 text-blacky/80 "  href="https://gg-self-studio-photo.youcanbook.me/">Booking Disini</a>
        </div>
    </div>
</div>
