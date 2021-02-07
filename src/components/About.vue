<template>
    <div class="about">
        <h1>Hakkımızda</h1>
        <p class="info">
            {{hakkimizda}}
        </p>
    </div>
</template>

<script>
export default {
    name: "About",
    data() {
        return {
            hakkimizda: "Yiğit Medikal & Ortopedi olarak 2010 yılından beri ortopedik malzemeler, varis çorapları, fizik tedavi ürünleri ve sporcu sağlığı ürünleri alanlarında faaliyet göstermekteyiz. Türk insanına kaliteli sağlık ürünleri sunmak amacıyla dünyaca ünlü ve sektöründe öncü firmaların bayiliklerini yürütmekteyiz. Bugün Yiğit Medikal & Ortopedi kaliteli ürünleri, müşteri memnuniyeti odaklı hizmet anlayışı ile sektöründe tercih edilen bir kuruluştur."
        }
    }
}
</script>

<style >
    .about {
        padding-top: 30px;
        padding-bottom: 30px;
        width: 100%;
        padding-right: 8%;
        padding-left: 8%;
        box-shadow: 0 8px 6px -6px #9BB0B3;
    }

    .about h1 {
        text-align: center;
        margin-bottom: 30px;
    }

    .about .info {
        margin-left: 10%;
        margin-right: 10%;
        font-size: 18px;
        letter-spacing: 0.8px;
        line-height: 1.4;
        text-align: center;
        text-align: justify;
    }
</style>