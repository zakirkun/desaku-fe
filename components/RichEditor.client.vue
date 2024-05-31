<script>
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import ImageUploader from 'quill-image-uploader';
export default {
    components: {
        QuillEditor
    },
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

                            await $fetch(this.$config.public.API_PUBLIC_URL + '/api/image', {
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
            toolbarOptions: [
                ['bold', 'italic', 'underline'],        // toggled buttons
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
    <ClientOnly>
        <QuillEditor v-model:content="content" @update:content="contentChange" :modules="[module]" contentType="html"
            placeholder="Masukkan konten nya disini..." :toolbar="toolbarOptions" theme="snow" />
    </ClientOnly>
</template>
