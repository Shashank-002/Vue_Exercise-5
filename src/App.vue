<template>
  <div>
    <nav v-if="!$route.meta.hideNav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link> 
      <router-link to="/jobs">Jobs</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
nav {
  padding: 10px;
  background-color: #f4f4f4;
  text-align: center;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  font-size: 1.2rem;
  position: relative;
  padding-right: 15px;
}

nav a:not(:last-child)::after {
  content: "";
  position: absolute;
  right: -10px;
  top: 50%;
  transform: translateY(-50%);
  height: 60%;
  width: 1px;
  background-color: black; 
}

nav a.router-link-exact-active,
nav a.router-link-active {
  font-weight: bold;
  color: white;
  background-color: red;
  padding: 8px 12px;
  border-radius: 5px;
}


</style>
