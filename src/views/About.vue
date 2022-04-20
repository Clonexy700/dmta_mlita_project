<template>
    <div>
        <div class="text-light my-4">
            <p class="my-2 font-weight-bold h5">Контроль версий</p>
            <div class="container rounded border border-light p-3" style="height:50vh; overflow: auto">
                <div>
                    <p class=" font-weight-bold my-0 h5">1.5</p>
                    <ul>
                        <li>Добавлены автоматы с магазинной памятью</li>
                    </ul>
                </div>
                <div>
                    <p class=" font-weight-bold my-0 h5">1.4</p>
                    <ul>
                        <li>Добавлена функция просмотра автомата, который на данный момент введён</li>
                    </ul>
                </div>
                <div>
                    <p class=" font-weight-bold my-0 h5">1.3</p>
                    <ul>
                        <li>Добавлена функция просмотра автомата, который есть в истории</li>
                    </ul>
                </div>
                <div>
                    <p class=" font-weight-bold my-0 h5">1.2</p>
                    <ul>
                        <li>Добавлена   история, в которой отображаются автоматы, с помощью которых проверялось слово</li>
                    </ul>
                </div>
                <div>
                    <p class=" font-weight-bold my-0 h5">1.1</p>
                    <ul>
                        <li>Добавлена   возможность удалять состояния и переходы</li>
                        <li>Добавлена документация пользователя</li>
                    </ul>
                </div>
                <div>
                    <p class=" font-weight-bold my-0 h5">1.0</p>
                    <ul>
                        <li>Распознаватель слов в конечных автоматах, вводимый через таблицу переходов</li>
                    </ul>
                </div>
                <div>
                    <p class=" font-weight-bold my-0 h5">0.9</p>
                    <ul>
                        <li>Создание базовой версии</li>
                    </ul>
                </div>
            </div>
        </div>
        <Instalar v-if="showInstall" :deferredPrompt="deferredPrompt" />
    </div>
</template>
<script>
import { version } from '@/../package.json';
import Instalar from '@/components/Instalar.vue'
export default {
    components:{Instalar},
    data(){
        return{
            edad: this.getEdad(),
            version,
            mobile:window.innerWidth<991,
            tamFoto:null
        }
    },
    props:['deferredPrompt', 'showInstall'],
    mounted(){
        this.tamFoto = document.querySelector("#foto").width+30;
    },
    methods:{
        getEdad(){
            var today = new Date();
            var birthDate = new Date("2000/06/22");
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        }
    }
}
</script>
<style scoped>
ul{
    list-style-type: disc;
}
</style>