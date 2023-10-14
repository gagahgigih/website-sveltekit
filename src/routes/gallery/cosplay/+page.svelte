<svelte:head>
    <title>Gagah Gigih: Cosplay</title>
    <meta name="description" content="Gallery Cosplay Kami" />
    <meta name="keywords" content="Foto, Studio Foto, Pangkalan Bun, Pembuatan Website, Data Analyst">
    <meta name="Gagah Gigih" content="Gagah Gigih Studio">
    <meta charset="UTF-8">
</svelte:head>
<script>
    import img1 from '$lib/images/gallery/cosplay/C1.jpg';
    import img2 from '$lib/images/gallery/cosplay/C2.jpg';
    import img3 from '$lib/images/gallery/cosplay/C3.jpg';
    import img5 from '$lib/images/gallery/cosplay/C5.jpg';
    import img6 from '$lib/images/gallery/cosplay/C6.jpg';
    import img7 from '$lib/images/gallery/cosplay/C7.jpg';

</script>
<div class="w-screen flex flex-col justify-center items-center bg-surface-500 py-8  ">
    <div>
        <div class="w-screen flex justify-center items-center mb-4">
            <h1 class="font-inter font-extrabold text-2xl md:text-3xl lg:text-5xl 2xl:text-7xl text-center text-transparent  bg-clip-text bg-gradient-to-r from-teal-500 to-yellow-300">Cosplay</h1>
        </div>
        <div class="w-screen flex justify-center items-center m-2 p-2">
            <p class="font-inter text-center lg:text-2xl"> Costumes, Characters, and Captivating Shots.</p>
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
            <img class=" rounded-md   img-studio"  alt="img 2" src={img5} >
        </div>
        <div class="">
            <img class=" rounded-md   img-studio"  alt="img 2" src={img6} >
        </div>
        <div class="">
            <img class=" rounded-md   img-studio"  alt="img 2" src={img7} >
        </div>

    </div>
    <div class="w-screen flex flex-col justify-center items-center mt-8 font-inter gap-2">
        <p class="p-2 lg:text-2xl "> Embrace the Fantasy – Book Your Session Today!</p>
        <div class="">
            <a class="h-10 btn text-md md:text-lg lg:text-2xl rounded-full bg-gradient-to-r from-teal-200 to-orange-700 p-4 text-md text-white/50"  href="https://gg-self-studio-photo.youcanbook.me/">Booking Disini</a>
        </div>
    </div>
</div>
