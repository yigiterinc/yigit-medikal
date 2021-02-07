<template>
    <div class="contact">
        <h1>İletişim</h1>
        <div class="info">
            <b-row>
                <b-col>
                    <b-row>
                        <MapMarker :size="35"/> <p style="margin-top: 5px; margin-left: 10px;">{{addressDetails}} <br> {{address}}</p> 
                    </b-row>
                    <b-row>
                        <Phone :size="35"></Phone> <p style="margin-left: 10px;">{{ phone }}</p>
                    </b-row>
                    <b-row>
                        <Cellphone :size="35"></Cellphone> <p style="margin-left: 10px;">{{ cellphone }}</p>
                    </b-row>
                </b-col>
                <b-col>
                    <div id="map" ref="map"></div>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
import MapMarker from 'vue-material-design-icons/MapMarker'
import Phone from 'vue-material-design-icons/Phone'
import Cellphone from 'vue-material-design-icons/Cellphone'

export default {
    name: "Contact",
    components: {
        MapMarker,
        Phone,
        Cellphone
    },
    data() {
        return {
            addressDetails: "19 Mayıs Mah. Bayar Cad. Okur Sk. Yeşilyurt Apt. No.22 D.1",
            address: "Kozyatağı, Kadıköy/İstanbul",
            phone: "+90 216 373 5060",
            cellphone: "+90 533 622 3939",
            map: null,
            coordinates: {lat: 40.976192, lng: 29.092534}
        }
    },
    mounted() {
        this.map = new window.google.maps.Map(this.$refs["map"],{
            center: this.coordinates,
            zoom: 18
        })
        new window.google.maps.Marker({
            position: this.coordinates,
            map: this.map
        })
    }
}
</script>

<style>

    .contact {
        padding-top: 30px;
        padding-bottom: 30px;
        width: 100%;
        background: rgba(240, 235, 235, 0);
        padding-right: 8%;
        padding-left: 8%;
        box-shadow: 0 8px 6px -6px #9BB0B3;
    }

    .contact h1 {
        text-align: center;
        margin-bottom: 30px;
    }

    .contact .info {
        margin-left: 10%;
        margin-right: 10%;
        font-size: 18px;
        letter-spacing: 0.8px;
        line-height: 1.4;
        text-align: center;
        text-align: justify;
    }

    #map {
        height: 400px;
        width: 500px;
        background: gray;
    }
</style>