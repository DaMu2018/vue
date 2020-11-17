<template>
    <div id="global-uploader">
        <!-- 上传 -->
        <uploader
            ref="uploader"
            :options="options"
            :autoStart="false"
            @file-added="onFileAdded"
            @file-success="onFileSuccess"
            @file-progress="onFileProgress"
            @file-error="onFileError"
            class="uploader-app"
        >
            <uploader-unsupport></uploader-unsupport>

            <uploader-btn id="global-uploader-btn" :attrs="attrs" ref="uploadBtn">选择文件</uploader-btn>

            <uploader-list v-show="panelShow">
                <div class="file-panel" slot-scope="props" :class="{ collapse: collapse }">
                    <div class="file-title">
                        <h2>文件列表</h2>
                        <div class="operate">
                            <button @click="fileListShow" type="text" :title="collapse ? '展开' : '折叠'">
                                {{ collapse ? '展开' : '折叠' }}
                            </button>
                            <button @click="close" type="text" title="c">关闭</button>
                        </div>
                    </div>

                    <ul class="file-list">
                        <li v-for="file in props.fileList" :key="file.id">
                            <uploader-file :class="'file_' + file.id" ref="files" :file="file" :list="true"></uploader-file>
                        </li>
                        <div class="no-file" v-if="!props.fileList.length"><i class="nucfont inuc-empty-file"></i> 暂无待上传文件</div>
                    </ul>
                </div>
            </uploader-list>
        </uploader>
    </div>
</template>
<script>
import SparkMD5 from 'spark-md5';
import { ACCEPT_CONFIG } from '../js/config';
import $ from 'jquery';
export default {
    name: 'MyUploader',
    data() {
        return {
            options: {
                target: '//localhost:3000/upload', // 目标上传 URL
                chunkSize: 1 * 1024 * 1024, //分块大小
                fileParameterName: 'file', //上传文件时文件的参数名，默认file
                maxChunkRetries: 3, //最大自动失败重试上传次数
                testChunks: true, //是否开启服务器分片校验
                // 服务器分片校验函数，秒传及断点续传基础
                // checkChunkUploadedByResponse: function (chunk, message) {
                //     console.log('message', message)
                //     let objMessage = JSON.parse(message);
                //     if (objMessage.skipUpload) {
                //         return true;
                //     }

                //     return (objMessage.uploaded || []).indexOf(chunk.offset + 1) >= 0;
                // },
                headers: {
                    // 在header中添加的验证，请根据实际业务来
                    // Authorization: 'Bearer ' + Ticket.get().access_token,
                },
            },
            attrs: {
                // accept: ACCEPT_CONFIG.getAll(),
                accept: '*',
            },
            panelShow: false, //选择文件后，展示上传panel
            collapse: false,
        };
    },
    methods: {
        onFileAdded(file, fileList) {
            console.log('onFileAdded file', file);
            console.log('onFileAdded fileList', fileList);
            this.panelShow = true;
            // 计算MD5，下文会提到
            this.computeMD5(file);
        },
        onFileSuccess(rootFile, file, response, chunk) {
            console.log('rootFile', rootFile);
            console.log('file', file);
            console.log('response', response);
            console.log('chunk', chunk);
        },
        onFileProgress(rootFile, file, chunk) {
            console.log(`上传中 ${file.name}，chunk：${chunk.startByte / 1024 / 1024} ~ ${chunk.endByte / 1024 / 1024}`);
        },
        onFileError(rootFile, file, response, chunk) {
            console.log(error);
        },
        /**
         * 计算md5，实现断点续传及秒传
         * @param file
         */
        computeMD5(file) {
            let fileReader = new FileReader();
            let time = new Date().getTime();
            let blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;
            let currentChunk = 0;
            const chunkSize = 10 * 1024 * 1000;
            let chunks = Math.ceil(file.size / chunkSize);
            let spark = new SparkMD5.ArrayBuffer();
            console.log('chunks', chunks)
            // 文件状态设为"计算MD5"
            this.statusSet(file.id, 'md5');

            file.pause();

            loadNext();

            //对于读取的文件计算hash码。
            fileReader.onload = e => {
                spark.append(e.target.result);
                if (currentChunk < chunks) {
                    currentChunk++;
                    loadNext();
                    // 实时展示MD5的计算进度
                    this.$nextTick(() => {
                        $(`.myStatus_${file.id}`).text('校验MD5 ' + ((currentChunk / chunks) * 100).toFixed(0) + '%');
                    });
                } else {
                    let md5 = spark.end();
                    this.computeMD5Success(md5, file);
                    console.log(`MD5计算完毕：${file.name} \nMD5：${md5} \n分片：${chunks} 大小:${file.size} 用时：${new Date().getTime() - time} ms`);
                }
            };
            fileReader.onerror = function () {
                this.error(`文件${file.name}读取出错，请检查该文件`);
                file.cancel();
            };
            function loadNext() {
                let start = currentChunk * chunkSize;
                let end = start + chunkSize >= file.size ? file.size : start + chunkSize;
                fileReader.readAsArrayBuffer(blobSlice.call(file.file, start, end));
            }
        },

        computeMD5Success(md5, file) {
            console.log('md5', md5)
            // 将自定义参数直接加载uploader实例的opts上
            // Object.assign(this.uploader.opts, {
            console.log('this.$refs.uploader', this.$refs.uploader);
            Object.assign(this.$refs.uploader.uploader.opts, {
                query: {
                    ...this.params,
                },
            });
            file.uniqueIdentifier = md5;
            file.resume();
            this.statusRemove(file.id);
        },
        fileListShow() {
            let $list = $('#global-uploader .file-list');

            if ($list.is(':visible')) {
                $list.slideUp();
                this.collapse = true;
            } else {
                $list.slideDown();
                this.collapse = false;
            }
        },
        close() {
            // this.uploader.cancel();
            this.$refs.uploader.uploader.cancel();

            this.panelShow = false;
        },
        /**
         * 新增的自定义的状态: 'md5'、'transcoding'、'failed'
         * @param id
         * @param status
         */
        statusSet(id, status) {
            let statusMap = {
                md5: {
                    text: '校验MD5',
                    bgc: '#fff',
                },
                merging: {
                    text: '合并中',
                    bgc: '#e2eeff',
                },
                transcoding: {
                    text: '转码中',
                    bgc: '#e2eeff',
                },
                failed: {
                    text: '上传失败',
                    bgc: '#e2eeff',
                },
            };

            this.$nextTick(() => {
                $(`<p class="myStatus_${id}"></p>`)
                    .appendTo(`.file_${id} .uploader-file-status`)
                    .css({
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        right: '0',
                        bottom: '0',
                        zIndex: '1',
                        backgroundColor: statusMap[status].bgc,
                    })
                    .text(statusMap[status].text);
            });
        },
        statusRemove(id) {
            this.$nextTick(() => {
                $(`.myStatus_${id}`).remove();
            });
        },

        error(msg) {
            this.$notify({
                title: '错误',
                message: msg,
                type: 'error',
                duration: 2000,
            });
        },
    },
};
</script>