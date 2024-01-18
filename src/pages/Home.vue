<template>
    <section class="hero">
        <div class="container">
            <div class="grid">
                <figure class="profile">
                    <img src="../assets/Profile-image-new.jpeg" alt="Profile">
                </figure>
                <div class="content">
                    <h1 class="title">I'm {{ title }} <br>
                    A {{ job }} <br>
                <span>based in Italy</span></h1>
        
                  
        
                    <p class="text">On my website you can see some of my works and if you like them you can contact me to create one tailor-made for you</p>
        
                    
                        <router-link :to="{ name: 'projects.index' }" class="btn ghost">Portfolio</router-link>
                        
                    
                </div>
                <div class="bg"></div>
            </div>


        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Daniele Capano',
                job: 'Web Developer'
            }
        }
        
    }
</script>

<style lang="scss" scoped>

@use '../../styles/partials/variables' as *;

.hero {
    
    height: 100vh;
//    padding-top: 88px;
   

}

.grid {
    display: grid;
   grid-template-columns: 4fr 2fr 6fr;
   grid-template-rows: 7rem 80vh 1fr;
   .profile {
    position: relative;
    width: 100%;
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    overflow: hidden;
    z-index: 5;
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
   }
   .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    padding-inline: 8rem 2rem;
    grid-column: 2 / 4;
    grid-row: 2 / 3;
    z-index: 10;

    .title {
        font-size: 4.5rem;
        margin-bottom: 2rem;
        span {
            color: $light-grey;
        }
    }
    .text {
        font-size: 1.125rem;
        line-height: 1.5;
        margin-bottom: 2rem;
    }
    .buttons {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
    }
   }
   .bg {
    background-color: $bg;
    grid-column: 2 / 4;
    grid-row: 1 / 4;
   }

   .ghost {
    align-self: end;
    background-color: transparent;
    color: $white;
    border-color: currentColor;
    &:hover {
        background-color: $purple;
        color: $white;
        border-color: $purple;
    }
   }


   
}

</style>