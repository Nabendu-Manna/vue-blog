<template>
    <div>
        <h1> My component </h1>
        <h3> Name: {{ name }}</h3>
    </div>
</template>

<script>
export default {
    name: 'Home',
    props: {
        name: String,
    },
    setup() {
        
    },
}
</script>

<style>

</style>