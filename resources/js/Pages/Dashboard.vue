<script setup lang="ts">
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import {ref} from "vue";
import LoadInteraction, {type LoaderType} from "../loaders/LoadInteraction";

const name = ref('');

function load(type: LoaderType) {
    const loader = LoadInteraction.make(type);
    const specificLoader = loader.getForType(type);
    // specificLoader?.handle();
}

document.addEventListener('DOMContentLoaded', () => {
    const element: HTMLDivElement | null | undefined = document.querySelector<HTMLDivElement>("[data-type='menu']")?.closest('div');
    console.log({element});
    element?.addEventListener('click', () => {
        console.log(element.dataset.color);
        if (element.dataset.color === 'red') {
            element.dataset.color = 'amber';
            return;
        }
        element.dataset.color = 'red';
    });
});

</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout id="main">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>
        </template>

        <template #main class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div
                        class="p-6
                        data-[color=amber]:hover:bg-amber-600
                        data-[color=amber]:hover:text-yellow-50
                        data-[color=red]:hover:bg-red-500
                        data-[color=red]:hover:text-white"
                        @click="load('menu')"
                        data-type="menu"
                        data-color="red"
                    >
                        Load menu
                    </div>
                    <div
                        class="p-6 text-gray-900"
                        @click="load('link')"
                        data-type="link"
                    >
                        Load link
                    </div>
                </div>
            </div>
        </template>

    </AuthenticatedLayout>
</template>
