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
                <li class="menu-item">
                    <router-link :to="{ name: 'projects.index' }" class="menu-link purple">Contacts</router-link>
                </li>
            </ul>
           
        </nav>
    </div>
   </header>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@use '../../styles/partials/variables'as *;

header {
    position: absolute;
    top: 0;
    width: 100%;
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
        .menu-item {
            // line-height: 88px;
            .menu-link {
                display: inline-block;
                text-decoration: none;
                font-size: 1rem;
                color: $light-grey;
                padding: 2rem 1.5rem;
                line-height: 1.5;
                transition: 0.25s ease-in-out;
                &:hover {
                    color: $white;
                }
                &.purple {
                    background-color: $purple;
                    color: $white;
                    font-weight: 700;
                }


            }
        }
    }

    
}

</style>