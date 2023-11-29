<script>

    import {Step, Stepper} from "@skeletonlabs/skeleton";



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
<div class="p-6 w-full md:w-1/2">
    <Stepper class="p-8 rounded-lg bg-black/80 text-white/80 font-inter" buttonCompleteLabel="Selesai" stepTerm="Langkah" buttonBackLabel="Kembali" buttonNextLabel="Selanjutnya">
        <Step>
            <svelte:fragment slot="header">Pertama</svelte:fragment>
            Klik Tombol "Booking" anda akan diarahkan lalu isi semua data dengan benar
        </Step>
        <Step>
            <svelte:fragment slot="header">Kedua</svelte:fragment>
            Pilih Tanggal dan slot anda, setiap sesi berdurasi 30 menit, waktu yang tersisa digunakan untuk melakukan pencetakan
        </Step>
        <Step>
            <svelte:fragment slot="header">Ketiga</svelte:fragment>
            Datang ke studio, pinjam aksesoris kami yang tersedia. Kami juga menyewakan pakaian jika anda lupa membawa
        </Step>
        <Step>
            <svelte:fragment slot="header">Keempat</svelte:fragment>
            Silahkan berfoto dan jangan merusak set yang sudah di atur.
        </Step>
        <Step>
            <svelte:fragment slot="header">Kelima</svelte:fragment>
            Pilih foto yang akan di cetak, setiap sesi anda mendapatkan foto 4R secara gratis. Kami juga memberikan layanan cetak tambahan.
        </Step>
        <Step>
            <svelte:fragment slot="header">Keenam</svelte:fragment>
            Lakukan Pembayaran
        </Step>
        <Step>
            <svelte:fragment slot="header">Ketujuh</svelte:fragment>
            Terima Kasih sudah datang 😃
        </Step>
        <!-- ... -->
    </Stepper>
</div>