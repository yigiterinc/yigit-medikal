<template>
    <md-toolbar class="md-transparent">
        <h3 class="md-title">Yiğit Medikal</h3>
        <div class="md-toolbar-section-end">
            <dropdown-menu
                v-model="show"
                :hover="true"
                :interactive="false"
                :hover-timeout="100"
                :styles=dropdownStyles
            >
                <p>
                    Ürünler
                </p>
                <div slot="dropdown">
                    <p class="dropdown-item">Varis Çorapları</p>
                    <p class="dropdown-item">Tansiyon Aletleri</p>
                    <p class="dropdown-item">Tabanlıklar</p>
                </div>
            </dropdown-menu>

            <p>Hakkımızda</p>
            <p>İletişim</p>
        </div>
    </md-toolbar>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import UtilsMixin from '../mixins/UtilsMixin.js'
import DropdownMenu from '@innologica/vue-dropdown-menu'

export default {
    name: 'Toolbar',
    mixins: [UtilsMixin],
    components: {
        DropdownMenu
    },
    data() {
        return {
            show: false,
            showProducts: false,
            dropdownStyles: {
                marginTop: "10px"
            }
        }
    }
}


</script>

<style>

    .md-toolbar-section-end p {
        margin-right: 3rem;
        margin-bottom: 0px;
    }

    .dropdown-toggle {
        margin-bottom: 0px;
    }

    .dropdown-toggle::after {
        visibility: none;
    }
</style>