<template>
  <div class="navbar-comp container">
      <div class="row">
          <div class="col-md-12 upper-container">
              <div class="row">
                  <h4 class="display-4 text-success mx-auto mt-5">
                      <router-link :to="{name: 'Home' }">Vue To-do</router-link>
                  </h4>
              </div>
              <div class="row">
                  <form class="form-inline mx-auto my-4">
                      <input type="text" name="search" class="form-control mb-2 mr-sm-2" id="search" placeholder="Type something to search ...">
                  </form>
              </div>
          </div>
      </div>
  </div>
</template>


<script>
export default {
  name: "Navbar",
  data() {
    return {};
  }
};
</script>

<style>
.navbar-comp .upper-container {
    box-shadow: 0 2px 4px rgba(0,0,0,0.15);
}

a {
    color: inherit;
    text-decoration: none;
}

a:hover {
    color: inherit;
    text-decoration: none;
}

.navbar-comp #search:focus {
    outline: none!important;
}
</style>