<script>
    import img from '$lib/images/IMG_9199.jpg';
    import img2 from '$lib/images/IMG_9203 2.jpg';
    import img3 from '$lib/images/IMG_9193.jpg';
</script>
<div class="bg-bg-gradient md:w-screen md:h-screen bg-cover py-2">
    <div class="">
        <div class="w-full flex flex-col justify-center items-center mt-3">
            <h1 class="font-extrabold text-3xl md:text-5xl lg:text-7xl 2xl:text-9xl font-inter  text-transparent  bg-clip-text bg-gradient-to-r from-neutral-800 to-red-500">Self Photo Studio</h1>
            <p class="font-inter text-surface-300 text-lg md:text-2xl lg:text-4xl 2xl:text-5xl">Get Yourself a Photo</p>
        </div>
        <div class="w-full flex flex-col justify-center items-center mt-3 ">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 justify-around">
                <div class="bg-blacky p-6 rounded-xl flex justify-center flex-col gap-4 shadow-2xl shadow-white/20 backdrop-blur-xl bg-blacky/50">
                    <img class="h-40 w-40 md:w-44 md:h-44 lg:w-56 lg:h-56 2xl:w-62 2xl:h-62 img-studio "  src={img} alt="" />
                    <a href="https://drive.google.com/file/d/1rSndIDMq9e-u_5rmA11fAw6R6kzlB3KV/view" class="btn button-price-blue">Lihat Harga</a>
                </div>
                <div class="bg-blacky p-6 rounded-xl flex justify-center flex-col gap-4 shadow-2xl shadow-white/20 backdrop-blur-xl bg-blacky/50">
                    <img class="h-40 w-40 md:w-44 md:h-44 lg:w-56 lg:h-56 2xl:w-62 2xl:h-62 img-studio"  src={img2} alt="" />
                    <div class="h-12 bg-gradient-to-r from-red-500 to-teal-500 rounded-full p-1 transition duration-300 ease-in-out hover:-translate-y-2">
                        <div class="flex h-full w-full items-center justify-center bg-blacky rounded-full ">
                            <a href="https://gagahgigihstudio.zohobookings.com/#/customer/gagahgigihstudio" class="text-white font-inter font-bold h-fit">Booking</a>
                        </div>
                    </div>
                </div>
                <div class="bg-blacky p-6 rounded-xl flex justify-center flex-col gap-4 shadow-2xl shadow-white/20 backdrop-blur-xl bg-blacky/50">
                    <img class="h-40 w-40 md:w-44 md:h-44 lg:w-56 lg:h-56 2xl:w-62 2xl:h-62 img-studio"  src={img3} alt="" />
                    <a href="/gallery" class="btn button-price-teal">Gallery</a>
                </div>
            </div>
        </div>
        <div class="w-full flex flex-col justify-center items-center mt-3 gap-4">
            <p class="text-white/80 font-caveat text-xl md:text-3xl 2xl:text-5xl text-center">Show Your creativity and identity, be honest to yourself</p>
            <a class="rounded-full bg-surface-500 text-blacky/60 px-4 py-2 font-inter font-semibold" href="#self-photo">Lebih Lanjut</a>
        </div>
    </div>
</div>