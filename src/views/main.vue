<template>
  <div>
    <Zheader></Zheader>
    <main>
      <router-view />
    </main>
    <Zfooter></Zfooter>
  </div>
</template>
<script>
export default {
  components: {
    Zheader: resolve => { require(['@/views/headers/normal'], resolve) },
    Zfooter: resolve => { require(['@/views/footers/normal'], resolve) }
  }
}
</script>
