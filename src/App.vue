<template>
    <n-config-provider :theme="darkTheme">
        <n-page-header >
            <template #avatar>
                <n-avatar
                    src="https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg"
                />
            </template>

            <template #title>
                <a href="https://anyway.fm/" style="text-decoration: none; color: inherit">Anyway.FM</a>

            </template>
            <template #subtitle @back="handleBack">
                <n-space>
                    <n-button tag="a" href="#/" type="primary">Home</n-button>
                    <n-button tag="a" href="#/parser" type="primary">Parser</n-button>
                    <n-button tag="a" href="#/about" type="primary">About</n-button>
                </n-space>

            </template>

            <template #extra>
                <n-space>
                    <n-button>Refresh</n-button>

                    <n-form
                        ref="formRef"
                        inline
                        :label-width="80"
                        :model="formValue"
                        :rules="rules"
                        :size="size"
                    >
                        <n-form-item path="user.name">
                            <n-input placeholder="User"/>
                        </n-form-item>

                        <n-form-item path="user.age">
                            <n-input type="password" placeholder="Password"/>
                        </n-form-item>

                        <n-form-item>
                            <n-button @click="handleValidateClick"> Login</n-button>
                        </n-form-item>
                    </n-form>
                </n-space>
            </template>
        </n-page-header>

        <component :is="currentView"/>
    </n-config-provider>
</template>


<script>
import Home from "@/components/Home.vue";
import Parser from "@/components/Parser.vue";
import About from "@/components/About.vue";
import NotFound from "@/components/NotFound.vue";
import { defineComponent } from 'vue'
import { darkTheme } from 'naive-ui'


const routes = {
    '/': Home,
    '/parser': Parser,
    '/about': About

}


export default {
    data() {
        return {
            currentPath: window.location.hash
        }
    },
    computed: {
        currentView() {
            return routes[this.currentPath.slice(1) || '/'] || NotFound
        }
    },
    mounted() {
        window.addEventListener('hashchange', () => {
            this.currentPath = window.location.hash
        })
    },

}

</script>

<style scoped>

</style>