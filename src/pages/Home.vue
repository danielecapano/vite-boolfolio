<template>
    <section class="hero">
        <div class="container">
            <h1 class="title">Benvenuto</h1>

          <h2 class="subtitle">Sono <span class="name">{{ title }}</span> <br>
          e sono un <span class="job">{{ job }}</span></h2>

            <p class="content"> Sul mio sito potrai vedere alcuni dei miei lavori e se ti piacciono puoi contattarmi per realizzarne uno fatto su misura per te</p>

            <router-link :to="{ name: 'projects.index' }">Progetti</router-link>


        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Daniele',
                job: 'Web Developer'
            }
        }
        
    }
</script>

<style lang="scss" scoped>

@use '../../styles/partials/variables' as *;

.hero {
    background-color: $black;
    height: 100vh;
   padding-top: 88px;
}

</style>