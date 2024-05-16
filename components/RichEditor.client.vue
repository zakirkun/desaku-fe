<script setup>
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import ImageUploader from 'quill-image-uploader';
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
                        console.log(file)
                        return new Promise(async (resolve, reject) => {
                            const formData = new FormData();
                            formData.append("image", file);

                            await $fetch('http://127.0.0.1:8000/api/image', {
                                body: formData,
                                method: "POST"
                            })
                                .then(res => {
                                    console.log(res.data)
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
            toolbarOptions: [
                ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                ['blockquote'],
                ['link', 'image', 'video'],

                [{ 'header': 1 }, { 'header': 2 }],               // custom button values
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'direction': 'rtl' }],                         // text direction

                [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

                [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
                [{ 'font': [] }],
                [{ 'align': [] }],

                ['clean']                                         // remove formatting button
            ]
        }
    },
    methods: {
        contentChange(){
            this.$emit('contentChange', this.content)
        }
    }
}
</script>

<template>
    <QuillEditor @update:content="contentChange" v-model:content="content" :modules="module" contentType="html" placeholder="Masukkan konten nya disini..."
        :toolbar="toolbarOptions" theme="snow" />
</template>
