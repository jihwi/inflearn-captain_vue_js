// single file component
// var vueHeader = {
//     template: '<div>header</div>', 
//     methods: {
//         addNum : function() {

//         }
//     }
// } 이부분이 아래와 같이 컨포넌트가 쪼깨진다고 보면됨. vue-cli의 기능인건가 
<template>
  <!-- html -->
  <div>header</div>
</template>

<script>
export default {
    // javascript - 인스턴스 옵션 
    methods: {
        addNum : function() {

        }
    }
}
</script>

<style>
/* css */
</style>