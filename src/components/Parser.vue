<template>
    <n-button  @click="onClick">PARSE</n-button>
</template>

<script setup>

    import axios from "axios";

    const htmlSource = 'https://kinozal.tv/browse.php'
    var htmlData = ''

    async function fetchHTML(){
        const config = {
            method: 'get',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
            url: htmlSource,
            withCredentials: false
        }

        const catFactsResponse = await axios(config)
        htmlData = catFactsResponse.data
    }

    function onClick() {
        console.log('clicked');
        let parser = new DOMParser();
        fetchHTML();
        console.log(htmlData)
        // htmlContent =
        // let parsedHtml = parser.parseFromString(htmlContent, 'text/html');
    }

</script>
