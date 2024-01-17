<template>
    <div class="project-card">
        <h3>{{ project.title }}</h3>
        <p class="type" v-if="project.type">{{ project.type.name }}</p>
        <p class="description">{{ project.description }}</p>
        <router-link :to="{name: 'projects.show', params: {slug: project.slug}}">More info</router-link>
    </div>
</template>

<script>
    export default {
        props: {
            project: {
                type: Object,
                required: true
            }
        }
        
    }
</script>

<style lang="scss" scoped>

@use '../../styles/partials/variables'as *;

.project-card {
    padding: 1rem;
    background-color: $dark-grey;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    transition: 0.25s ease-in-out;
    &:hover {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    }
}

</style>