<template>
  <div class="home container-fluid">
    <div class="col-md-6 col-sm-12 col-12 task-container">
      <div class="row justify-content-center">
        <div class="card">
          <div class="card-body">
            This is some text within a card body.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {

    }
  }
}
</script>


<style>

.home .task-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

</style>
