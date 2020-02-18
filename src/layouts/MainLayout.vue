<template>
   <div>
    <div class="app-main-layout">
      
      <Navbar @clickSidebarToggle="isSidebarOpen = !isSidebarOpen" />
      <Sidebar v-model="isSidebarOpen" />

      <main class="app-content" :class="{full: !isSidebarOpen}">
        <div class="app-page">
            <router-view></router-view>
        </div>
      </main>

      <div class="fixed-action-btn">
        <a class="btn-floating btn-large blue" href="#">
          <i class="large material-icons">add</i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/app/Navbar'
import Sidebar from '@/components/app/Sidebar'
export default {
  components: {
    Navbar, Sidebar
  },
  data() {
    return {
      isSidebarOpen: true,
    }
  },

}
</script>