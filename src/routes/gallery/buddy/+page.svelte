<svelte:head>
    <title>Gagah Gigih: Buddy</title>
    <meta name="description" content="Gallery Buddy Kami" />
    <meta name="keywords" content="Foto, Studio Foto, Pangkalan Bun, Pembuatan Website, Data Analyst">
    <meta name="Gagah Gigih" content="Gagah Gigih Studio">
    <meta charset="UTF-8">
</svelte:head>
<script>

    import img2 from '$lib/images/gallery/buddy/B2.jpg';
    import img3 from '$lib/images/gallery/buddy/B3.jpg';
    import img4 from '$lib/images/gallery/buddy/B4.jpg';
    import img5 from '$lib/images/gallery/buddy/B5.jpg';
    import img6 from '$lib/images/gallery/buddy/B6.jpg';
</script>
<div class="w-screen flex flex-col justify-center items-center bg-surface-500 py-8  ">
    <div>
        <div class="w-screen flex justify-center items-center mb-4">
            <h1 class="font-inter font-extrabold text-2xl md:text-3xl lg:text-5xl 2xl:text-7xl text-center text-transparent  bg-clip-text bg-gradient-to-r from-pink-500  to-red-200">Buddy</h1>
        </div>
        <div class="w-screen flex justify-center items-center m-2 p-2">
            <p class="font-inter text-center lg:text-2xl">Where Memories are Made, and Friendships Flourish </p>
        </div>
    </div>
    <div class="grid grid-cols-2 xl:grid-cols-4 gap-2 mx-3">

        <div class="">
            <img class=" rounded-md   img-studio"  alt="img 2" src={img2} >
        </div>
        <div class="">
            <img class=" rounded-md   img-studio"  alt="img 2" src={img3} >
        </div>
        <div class="">
            <img class=" rounded-md   img-studio"  alt="img 2" src={img4} >
        </div>
        <div class="">
            <img class=" rounded-md   img-studio"  alt="img 2" src={img5} >
        </div>
        <div class="">
            <img class=" rounded-md   img-studio"  alt="img 2" src={img6} >
        </div>
    </div>
    <div class="w-screen flex flex-col justify-center items-center mt-8 font-inter gap-2">
        <p class="p-2 lg:text-2xl ">You and Your Friends are Invited to Create Lasting Memories at Our Studio </p>
        <div class="">
            <a class="h-10 btn text-md md:text-lg lg:text-2xl rounded-full bg-gradient-to-r from-pink-500 to-red-300 p-4 text-md no-underline font-inter opacity-80 text-white/80"  href="https://gg-self-studio-photo.youcanbook.me/">Booking Disini</a>
        </div>
    </div>
</div>
