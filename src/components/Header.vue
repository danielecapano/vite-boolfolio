<template>
   <header>
    <div class="container">
        <nav>
            <div class="logo">
                DC
            </div>
            <ul class="menu-list">
                <li class="menu-item">
                    <router-link :to="{ name: 'home' }" class="menu-link">Home</router-link>
                </li>
                <li class="menu-item">
                    <router-link :to="{ name: 'projects.index' }" class="menu-link">Portfolio</router-link>
                </li>
            </ul>
            <a href="#" class="contacts">Contatti</a>
        </nav>
    </div>
   </header>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

header {
    box-shadow: 2px 0 8px rgba($color: #000000, $alpha: 0.3);
}

nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
        font-size: 3rem;
        font-weight: 600;
    }
    .menu-list {
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;
        gap: 2rem;
        .menu-item {
            text-transform: uppercase;
            .menu-link {
                text-decoration: none;
            }
        }
    }
}

</style>