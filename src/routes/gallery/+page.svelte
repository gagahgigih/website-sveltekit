<svelte:head>
    <title>Gagah Gigih: Gallery</title>
    <meta name="description" content="Gallery dan Aksesoris Self Studio Photo Terbaik di Pangkalan Bun" />
    <meta name="keywords" content="Foto, Studio Foto, Pangkalan Bun, Pembuatan Website, Data Analyst">
    <meta name="Gagah Gigih" content="Gagah Gigih Studio">
    <meta charset="UTF-8">
</svelte:head>
<script>
    import img1 from "$lib/images/IMG1.jpg"
    import img2 from '$lib/images/IMG2.jpg';
    import img3 from '$lib/images/IMG3.jpg';
    import img4 from '$lib/images/IMG6.jpg';
    import img5 from '$lib/images/IMG5.jpg'
    import img6 from '$lib/images/IMG4.jpg';
</script>
<div class="w-screen flex justify-center items-center bg-surface-500 py-8  ">
    <div>
        <div class="w-screen flex justify-center items-center mb-4">
            <h1 class="font-inter h2">Gallery Kami</h1>
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
            <div class="">
                <img class=" rounded-md   img-studio"  alt="img 2" src={img5} >
            </div>
            <div class="">
                <img class=" rounded-md   img-studio"  alt="img 2" src={img6} >
            </div>
        </div>
    </div>
    <div class="w-full flex justify-center items-center">

    </div>
</div>