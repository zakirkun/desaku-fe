<script setup>
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import ImageUploader from 'quill-image-uploader';
import BlotFormatter from 'quill-blot-formatter'
</script>

<script>
export default {
    props: ['data'],
    data() {
        return {
            content: this.data,
            module: {
                name: 'imageUploader',
                module: ImageUploader,
                options: {
                    upload: file => {
                        return new Promise(async (resolve, reject) => {
                            const formData = new FormData();
                            formData.append("image", file);

                            await $fetch(this.$config.public.API_BASE_URL + '/api/image', {
                                body: formData,
                                headers: {
                                    Authorization: "Bearer " + useToken().token
                                },
                                method: "POST"
                            })
                                .then(res => {
                                    resolve(res.data);
                                })
                                .catch(err => {
                                    reject("Upload failed");
                                    console.error("Error:", err)
                                })
                        })
                    }
                },
            },
            formatter: {
                name: 'blotFormatter',
                module: BlotFormatter,
                options: {},
            },
            toolbarOptions: [
                ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                ['link', 'image'],

                [{ 'header': 1 }, { 'header': 2 }],               // custom button values
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],

                [{ 'header': [1, 2, 3, 4, 5, false] }],

                [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
                [{ 'align': [] }],

                ['clean']                                         // remove formatting button
            ]
        }
    },
    methods: {
        contentChange() {
            this.$emit('contentChange', this.content)
        }
    }
}
</script>

<template>
    <QuillEditor  v-model:content="content" @update:content="contentChange" :modules="[module, formatter]" contentType="html"
        placeholder="Masukkan konten nya disini..." :toolbar="toolbarOptions" theme="snow" />
</template>
