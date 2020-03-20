<template>
  <div id="app" >
    
     <nav class="nav-bar">
      <div class="nav-wrapper">
          <ul class="brand-logo center"> 
            <li> <a href="index.html" id="nav-a"> Home </a></li>
            <li>
              <router-link to="/relatorio"> <a id="nav-a"> Relatório </a>
              </router-link>
            </li>
          </ul>
      </div>
    </nav>

    <router-view />

  </div>
</template>

<script>
export default {
      

}


</script>

<style>

* {
  font-family: 'Roboto', sans-serif;
}

.nav-bar {
  background: #FB8518;
}

#nav-a:hover {
  color: #8518fb;
  transition: all .35s ease-in-out;
}

nav ul li a {
  color: white;
  font-size: 17px;
  text-transform: uppercase;
}


</style>