<template>
    <div class="portfolio">
        <div class="container">
            <h1 class="title">I miei Progetti</h1>
        </div>
        <div class="container">
            <div class="grid">
                <Card v-for="project in projects" :key="project.id" :project="project"/>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Card from '../../components/Card.vue';
    export default {
        components: {
            Card
        },
        data(){

            return {
                projects: [],
                BASE_URL: 'http://127.0.0.1:8000/api',

            }
        },
        methods: {
            fetchProjects() {

                axios.get(`${this.BASE_URL}/projects`)
                .then(res => {
                    this.projects = res.data.results.data;
                    console.log(this.projects);
                });
            }
        },
        created() {
            this.fetchProjects()
        }
    }
</script>

<style lang="scss" scoped>

.portfolio {
    padding-top: 3.5rem;
}
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}

.title {
    text-align: center;
    padding-block: 3rem;
    font-size: 3rem;
}

</style>