<template>
  <div id="app" >
    
 <div id="inicio">
    <header class="nav-menu">
          <ul class="nav justify-content-center">

             <li class="nav-item mt-2 mb-2">
               <a class="nav-link" id="link-menu1" href="index.html">Home</a>
              </li>

              <li class="nav-item mt-2 mb-2">
                <router-link to="/relatorio">
                <a class="nav-link separador" id="link-menu2" href="relatorio.html">Relatório</a>
                </router-link>
              </li>
            </ul>
    </header>
</div>

    <router-view />


        <footer class="page-footer footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5>iBlue Consulting</h5>
                <p>Desafio de Estágio 2020</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5>Links</h5>
                <ul>
                  <li class="links"><a target="_blank" :href="'https://www.iblueconsulting.com.br/'"><i class="far fa-window-maximize"></i> iBlue Consulting</a></li>
                  <li class="links"><a target="_blank" :href="'https://github.com/lukano-marte'"><i class="fab fa-github"></i> GitHub</a></li>
                </ul>
              </div>
            </div>
          </div>
        <div class="copyright">
            <div class="container">
            <p>© 2020 quase todos os direitos reservados</p>
            </div>
          </div>
          
        </footer>    

  </div>
</template>

<script>

</script>

<style>
body {
    font-family: 'Montserrat', sans-serif;
}

.nav-menu{
    background: #FB8518;
     box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
     transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
 
#link-menu1, #link-menu2 {
    font-size: 1.4em;
    color: white;
    display: block;
}
 
.separador::before {
  content: '|';
	padding-right: 30px;
}

.footer {
  background-color: #FB8518;
  margin-top: 30px;
}

.links a {
  color: white;
}

.links a:hover{
  text-decoration: none;
  color: #343136 !important;
  transition: all .35s ease-in-out;
}

.copyright {
  background-color: #343136;
}

.copyright p {
  color: #fff;
  text-transform: capitalize;
}

</style>