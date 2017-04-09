<template>
    <div>
      hello world<br>
      {{ $t('test_string') }}
    </div>
</template>
<style>

</style>
<script>
    export default {
        data: function() {
            return {
              test: this.$t('test_string')
            };
        },
    }
</script>
