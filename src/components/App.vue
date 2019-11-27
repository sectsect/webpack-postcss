<template>
  <div id="app">
    <header>
      <ul>
        <li>
          <router-link :to="{ path: '/' }">
            Home
          </router-link>
        </li>
        <li>
          <router-link :to="{ path: '/about' }">
            About
          </router-link>
        </li>
      </ul>
    </header>
    <router-view />
  </div>
</template>

<style scoped>
#app {
  & header {
    background: #ddd;
    & ul {
      display: flex;
      & li {
        padding: 10px;
      }
    }
  }
}
</style>
