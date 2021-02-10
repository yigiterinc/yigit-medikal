<template>
    <div class="contact">
        <h1>İletişim</h1>
        <div class="info">
          <b-container class="container-fluid">
            <b-row>
              <b-col>
                <b-row>
                  <MapMarker :size="35"/>
                  <p class="ml-2 address-details">{{addressDetails}} <br> {{address}}</p>
                </b-row>
                <b-row>
                  <Phone :size="35"/> <p class="ml-2">{{ phone }}</p>
                </b-row>
                <b-row>
                  <Cellphone :size="35"/> <p class="ml-2">{{ cellphone }}</p>
                </b-row>
              </b-col>
              <b-col>
                <div id="map" ref="map"></div>
              </b-col>
            </b-row>

          </b-container>
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
      methods: {
        loadAndMarkMap() {
          this.map = new window.google.maps.Map(this.$refs["map"],{
            center: this.coordinates,
            zoom: 18
          })
          new window.google.maps.Marker({
            position: this.coordinates,
            map: this.map
          })
        }
      },
      mounted() {
          const googleScript = document.getElementById('google-map-script');

          const googleMapsScriptLoaded = window.google;
          if (googleMapsScriptLoaded) {
            this.loadAndMarkMap();
          } else {
            // If the map is not loaded, wait for it to load
            googleScript.addEventListener('load', () => this.loadAndMarkMap());
          }
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
        font-size: 40px;
    }

    .contact .info {
        text-align: justify;
        font-size: 21px;
        line-height: 1.8;
    }

    #map {
        height: 40vh;
        width: 27vw;
        background: gray;
    }

    .address-details {
      width: 300px;
    }
</style>