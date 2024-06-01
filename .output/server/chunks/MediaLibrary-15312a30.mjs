import { ref, watch, reactive, onMounted, onUnmounted, computed, toRefs, useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, createTextVNode, unref, createCommentVNode, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderAttrs } from 'vue/server-renderer';
import { d as useRuntimeConfig, a as useToken, _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_1 } from './Loader-d2c5798c.mjs';
import { fromEvent } from 'file-selector';
import accepts from 'attr-accept';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function isIe(userAgent) {
    return userAgent.includes('MSIE') || userAgent.includes('Trident/');
}
function isEdge(userAgent) {
    return userAgent.includes('Edge/');
}
function isIeOrEdge(userAgent) {
    if (userAgent === void 0) { userAgent = window.navigator.userAgent; }
    return isIe(userAgent) || isEdge(userAgent);
}
function onDocumentDragOver(event) {
    event.preventDefault();
}
function isEvtWithFiles(event) {
    if (!event.dataTransfer) {
        return !!event.target && !!event.target.files;
    }
    return Array.prototype.some.call(event.dataTransfer.types, function (type) { return type === 'Files' || type === 'application/x-moz-file'; });
}
function isPropagationStopped(event) {
    if (typeof event.isPropagationStopped === 'function') {
        return event.isPropagationStopped();
    }
    if (typeof event.cancelBubble !== 'undefined') {
        return event.cancelBubble;
    }
    return false;
}
var FILE_INVALID_TYPE = 'file-invalid-type';
var FILE_TOO_LARGE = 'file-too-large';
var FILE_TOO_SMALL = 'file-too-small';
var TOO_MANY_FILES = 'too-many-files';
var TOO_MANY_FILES_REJECTION = {
    code: TOO_MANY_FILES,
    message: 'Too many files',
};
var getInvalidTypeRejectionErr = function (accept) {
    accept = Array.isArray(accept) && accept.length === 1 ? accept[0] : accept;
    var messageSuffix = Array.isArray(accept) ? "one of ".concat(accept.join(', ')) : accept;
    return {
        code: FILE_INVALID_TYPE,
        message: "File type must be ".concat(messageSuffix),
    };
};
function isDefined(value) {
    return value !== undefined && value !== null;
}
var acceptsDefault = accepts.default;
var acceptsFn = acceptsDefault || accepts;
function fileAccepted(file, accept) {
    var isAcceptable = file.type === 'application/x-moz-file' || acceptsFn(file, accept);
    return [isAcceptable, isAcceptable ? null : getInvalidTypeRejectionErr(accept)];
}
var getTooLargeRejectionErr = function (maxSize) { return ({
    code: FILE_TOO_LARGE,
    message: "File is larger than ".concat(maxSize, " bytes"),
}); };
var getTooSmallRejectionErr = function (minSize) { return ({
    code: FILE_TOO_SMALL,
    message: "File is smaller than ".concat(minSize, " bytes"),
}); };
function fileMatchSize(file, minSize, maxSize) {
    if (isDefined(file.size) && file.size) {
        if (isDefined(minSize) && isDefined(maxSize)) {
            if (file.size > maxSize)
                return [false, getTooLargeRejectionErr(maxSize)];
            if (file.size < minSize)
                return [false, getTooSmallRejectionErr(minSize)];
        }
        else if (isDefined(minSize) && file.size < minSize) {
            return [false, getTooSmallRejectionErr(minSize)];
        }
        else if (isDefined(maxSize) && file.size > maxSize) {
            return [false, getTooLargeRejectionErr(maxSize)];
        }
    }
    return [true, null];
}
function composeEventHandlers() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return fns.some(function (fn) {
            if (!isPropagationStopped(event) && fn) {
                fn.apply(void 0, __spreadArray([event], args, false));
            }
            return isPropagationStopped(event);
        });
    };
}
function allFilesAccepted(_a) {
    var files = _a.files, accept = _a.accept, minSize = _a.minSize, maxSize = _a.maxSize, multiple = _a.multiple, maxFiles = _a.maxFiles;
    if ((!multiple && files.length > 1) || (multiple && maxFiles >= 1 && files.length > maxFiles)) {
        return false;
    }
    return files.every(function (file) {
        var accepted = fileAccepted(file, accept)[0];
        var sizeMatch = fileMatchSize(file, minSize, maxSize)[0];
        return accepted && sizeMatch;
    });
}
var defaultProps = {
    disabled: false,
    getFilesFromEvent: fromEvent,
    maxSize: Infinity,
    minSize: 0,
    multiple: true,
    maxFiles: 0,
    preventDropOnDocument: true,
    noClick: false,
    noKeyboard: false,
    noDrag: false,
    noDragEventsBubbling: false,
};
function useDropzone(options) {
    if (options === void 0) { options = {}; }
    var optionsRef = ref(__assign(__assign({}, defaultProps), options));
    watch(function () { return (__assign({}, options)); }, function (value) {
        optionsRef.value = __assign(__assign({}, optionsRef.value), value);
    });
    var rootRef = ref();
    var inputRef = ref();
    var state = reactive({
        isFocused: false,
        isFileDialogActive: false,
        isDragActive: false,
        isDragAccept: false,
        isDragReject: false,
        draggedFiles: [],
        acceptedFiles: [],
        fileRejections: [],
    });
    var openFileDialog = function () {
        if (inputRef.value) {
            state.isFileDialogActive = true;
            inputRef.value.value = '';
            inputRef.value.click();
        }
    };
    var onWindowFocus = function () {
        var onFileDialogCancel = optionsRef.value.onFileDialogCancel;
        if (state.isFileDialogActive) {
            setTimeout(function () {
                if (inputRef.value) {
                    var files = inputRef.value.files;
                    if (files && !files.length) {
                        state.isFileDialogActive = false;
                        if (typeof onFileDialogCancel === 'function') {
                            onFileDialogCancel();
                        }
                    }
                }
            }, 300);
        }
    };
    function onFocusCb() {
        state.isFocused = true;
    }
    function onBlurCb() {
        state.isFocused = false;
    }
    function onClickCb() {
        var noClick = optionsRef.value.noClick;
        if (noClick) {
            return;
        }
        if (isIeOrEdge()) {
            setTimeout(openFileDialog, 0);
        }
        else {
            openFileDialog();
        }
    }
    var dragTargetsRef = ref([]);
    var onDocumentDrop = function (event) {
        if (!rootRef.value) {
            return;
        }
        var rootElm = rootRef.value.$el || rootRef.value;
        if (rootElm.contains(event.target)) {
            return;
        }
        event.preventDefault();
        dragTargetsRef.value = [];
    };
    onMounted(function () {
        window.addEventListener('focus', onWindowFocus, false);
        var preventDropOnDocument = optionsRef.value.preventDropOnDocument;
        if (preventDropOnDocument) {
            document.addEventListener('dragover', onDocumentDragOver, false);
            document.addEventListener('drop', onDocumentDrop, false);
        }
    });
    onUnmounted(function () {
        window.removeEventListener('focus', onWindowFocus, false);
        var preventDropOnDocument = optionsRef.value.preventDropOnDocument;
        if (preventDropOnDocument) {
            document.removeEventListener('dragover', onDocumentDragOver);
            document.removeEventListener('drop', onDocumentDrop);
        }
    });
    function stopPropagation(event) {
        var noDragEventsBubbling = optionsRef.value.noDragEventsBubbling;
        if (noDragEventsBubbling) {
            event.stopPropagation();
        }
    }
    function onDragEnterCb(event) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, getFilesFromEvent, noDragEventsBubbling, onDragEnter, draggedFilesRes;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = optionsRef.value, getFilesFromEvent = _a.getFilesFromEvent, noDragEventsBubbling = _a.noDragEventsBubbling, onDragEnter = _a.onDragEnter;
                        event.preventDefault();
                        stopPropagation(event);
                        dragTargetsRef.value = __spreadArray(__spreadArray([], dragTargetsRef.value, true), [event.target], false);
                        if (!isEvtWithFiles(event)) return [3, 2];
                        if (!getFilesFromEvent) {
                            return [2];
                        }
                        return [4, getFilesFromEvent(event)];
                    case 1:
                        draggedFilesRes = _b.sent();
                        if (!draggedFilesRes) {
                            draggedFilesRes = [];
                        }
                        if (isPropagationStopped(event) && !noDragEventsBubbling) {
                            return [2];
                        }
                        state.draggedFiles = draggedFilesRes;
                        state.isDragActive = true;
                        if (onDragEnter) {
                            onDragEnter(event);
                        }
                        _b.label = 2;
                    case 2: return [2];
                }
            });
        });
    }
    function onDragOverCb(event) {
        var onDragOver = optionsRef.value.onDragOver;
        event.preventDefault();
        stopPropagation(event);
        if (event.dataTransfer) {
            try {
                event.dataTransfer.dropEffect = 'copy';
            }
            catch (_a) {
            }
        }
        if (isEvtWithFiles(event) && onDragOver) {
            onDragOver(event);
        }
        return false;
    }
    function onDragLeaveCb(event) {
        event.preventDefault();
        stopPropagation(event);
        var targets = dragTargetsRef.value.filter(function (target) {
            if (!rootRef.value) {
                return false;
            }
            var rootElm = rootRef.value.$el || rootRef.value;
            return rootElm.contains(target);
        });
        var targetIdx = targets.indexOf(event.target);
        if (targetIdx !== -1) {
            targets.splice(targetIdx, 1);
        }
        dragTargetsRef.value = targets;
        if (targets.length > 0) {
            return;
        }
        state.draggedFiles = [];
        state.isDragActive = false;
        var onDragLeave = optionsRef.value.onDragLeave;
        if (isEvtWithFiles(event) && onDragLeave) {
            onDragLeave(event);
        }
    }
    function onDropCb(event) {
        event.preventDefault();
        stopPropagation(event);
        dragTargetsRef.value = [];
        var _a = optionsRef.value, getFilesFromEvent = _a.getFilesFromEvent, noDragEventsBubbling = _a.noDragEventsBubbling, accept = _a.accept, minSize = _a.minSize, maxSize = _a.maxSize, multiple = _a.multiple, maxFiles = _a.maxFiles, onDrop = _a.onDrop, onDropRejected = _a.onDropRejected, onDropAccepted = _a.onDropAccepted;
        if (isEvtWithFiles(event)) {
            if (!getFilesFromEvent) {
                return;
            }
            Promise.resolve(getFilesFromEvent(event)).then(function (files) {
                if (isPropagationStopped(event) && !noDragEventsBubbling) {
                    return;
                }
                var acceptedFiles = [];
                var fileRejections = [];
                files.forEach(function (file) {
                    var _a = fileAccepted(file, accept), accepted = _a[0], acceptError = _a[1];
                    var _b = fileMatchSize(file, minSize, maxSize), sizeMatch = _b[0], sizeError = _b[1];
                    if (accepted && sizeMatch) {
                        acceptedFiles.push(file);
                    }
                    else {
                        var errors = [acceptError, sizeError].filter(function (e) { return e; });
                        fileRejections.push({ file: file, errors: errors });
                    }
                });
                if ((!multiple && acceptedFiles.length > 1) || (multiple && maxFiles >= 1 && acceptedFiles.length > maxFiles)) {
                    acceptedFiles.forEach(function (file) {
                        fileRejections.push({ file: file, errors: [TOO_MANY_FILES_REJECTION] });
                    });
                    acceptedFiles.splice(0);
                }
                state.acceptedFiles = acceptedFiles;
                state.fileRejections = fileRejections;
                if (onDrop) {
                    onDrop(acceptedFiles, fileRejections, event);
                }
                if (fileRejections.length > 0 && onDropRejected) {
                    onDropRejected(fileRejections, event);
                }
                if (acceptedFiles.length > 0 && onDropAccepted) {
                    onDropAccepted(acceptedFiles, event);
                }
            });
        }
        state.isFileDialogActive = false;
        state.isDragActive = false;
        state.draggedFiles = [];
        state.acceptedFiles = [];
        state.fileRejections = [];
    }
    var composeHandler = function (fn) { return (optionsRef.value.disabled ? undefined : fn); };
    var composeKeyboardHandler = function (fn) { return (optionsRef.value.noKeyboard ? undefined : composeHandler(fn)); };
    var composeDragHandler = function (fn) { return (optionsRef.value.noDrag ? undefined : composeHandler(fn)); };
    var getRootProps = function (_a) {
        if (_a === void 0) { _a = {}; }
        var onFocus = _a.onFocus, onBlur = _a.onBlur, onClick = _a.onClick, onDragEnter = _a.onDragEnter, onDragenter = _a.onDragenter, onDragOver = _a.onDragOver, onDragover = _a.onDragover, onDragLeave = _a.onDragLeave, onDragleave = _a.onDragleave, onDrop = _a.onDrop, rest = __rest(_a, ["onFocus", "onBlur", "onClick", "onDragEnter", "onDragenter", "onDragOver", "onDragover", "onDragLeave", "onDragleave", "onDrop"]);
        return (__assign(__assign({ onFocus: composeKeyboardHandler(composeEventHandlers(onFocus, onFocusCb)), onBlur: composeKeyboardHandler(composeEventHandlers(onBlur, onBlurCb)), onClick: composeHandler(composeEventHandlers(onClick, onClickCb)), onDragenter: composeDragHandler(composeEventHandlers(onDragEnter, onDragenter, onDragEnterCb)), onDragover: composeDragHandler(composeEventHandlers(onDragOver, onDragover, onDragOverCb)), onDragleave: composeDragHandler(composeEventHandlers(onDragLeave, onDragleave, onDragLeaveCb)), onDrop: composeDragHandler(composeEventHandlers(onDrop, onDropCb)), ref: rootRef }, (!optionsRef.value.disabled && !optionsRef.value.noKeyboard ? { tabIndex: 0 } : {})), rest));
    };
    var onInputElementClick = function (event) {
        event.stopPropagation();
    };
    function getInputProps(_a) {
        if (_a === void 0) { _a = {}; }
        var onChange = _a.onChange, onClick = _a.onClick, rest = __rest(_a, ["onChange", "onClick"]);
        var inputProps = {
            accept: optionsRef.value.accept,
            multiple: optionsRef.value.multiple,
            style: 'display: none',
            type: 'file',
            onChange: composeHandler(composeEventHandlers(onChange, onDropCb)),
            onClick: composeHandler(composeEventHandlers(onClick, onInputElementClick)),
            autoComplete: 'off',
            tabIndex: -1,
            ref: inputRef,
        };
        return __assign(__assign({}, inputProps), rest);
    }
    var fileCount = computed(function () { return (state.draggedFiles ? state.draggedFiles.length : 0); });
    var isDragAccept = computed(function () { return fileCount.value > 0 && allFilesAccepted({
        files: state.draggedFiles,
        accept: optionsRef.value.accept,
        minSize: optionsRef.value.minSize,
        maxSize: optionsRef.value.maxSize,
        multiple: optionsRef.value.multiple,
        maxFiles: optionsRef.value.maxFiles,
    }); });
    var isDragReject = computed(function () { return fileCount.value > 0 && !isDragAccept.value; });
    return __assign(__assign({}, toRefs(state)), { isDragAccept: isDragAccept, isDragReject: isDragReject, isFocused: computed(function () { return state.isFocused && !optionsRef.value.disabled; }), getRootProps: getRootProps, getInputProps: getInputProps, rootRef: rootRef, inputRef: inputRef, open: composeHandler(openFileDialog) });
}

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1.3em",
    height: "1.3em",
    viewBox: "0 0 36 36"
  }, _attrs))}><path fill="white" d="M6 9v22a2.93 2.93 0 0 0 2.86 3h18.23A2.93 2.93 0 0 0 30 31V9Zm9 20h-2V14h2Zm8 0h-2V14h2Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="white" d="M30.73 5H23V4a2 2 0 0 0-2-2h-6.2A2 2 0 0 0 13 4v1H5a1 1 0 1 0 0 2h25.73a1 1 0 0 0 0-2" class="clr-i-solid clr-i-solid-path-2"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Trash.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const __default__ = {
  data: () => ({
    openModal: false
  }),
  props: ["open"],
  watch: {
    open() {
      this.openModal = this.open;
    }
  },
  methods: {
    closeModal() {
      this.openModal = false;
      this.$emit("onCloseModal");
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "MediaLibrary",
  __ssrInlineRender: true,
  emits: ["onImageSelected", "onCloseModal"],
  setup(__props, { emit: __emit }) {
    const loading = ref(false);
    const currentTab = ref("listImage");
    const images = ref([]);
    const imageSelected = ref(null);
    const emit = __emit;
    async function loadImages() {
      images.value = await $fetch(useRuntimeConfig().public.API_PUBLIC_URL + "/api/image", {
        headers: {
          Authorization: "Bearer " + useToken().token
        }
      });
      imageSelected.value = images.value["0"];
    }
    async function onDrop(files) {
      const formData = new FormData();
      formData.append("image", files[0]);
      loading.value = true;
      await $fetch(useRuntimeConfig().public.API_PUBLIC_URL + "/api/image", {
        body: formData,
        headers: {
          Authorization: "Bearer " + useToken().token
        },
        method: "POST"
      });
      setTimeout(async () => {
        loading.value = false;
        await loadImages();
        currentTab.value = "listImage";
      }, 1e3);
    }
    async function removeImage() {
      imageSelected.value = imageSelected.value.replace(useRuntimeConfig().public.API_PUBLIC_URL + "/storage/", "");
      await $fetch(useRuntimeConfig().public.API_PUBLIC_URL + "/api/image/" + imageSelected.value, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + useToken().token
        }
      });
      await loadImages();
    }
    function useImage() {
      emit("onImageSelected", imageSelected.value);
      emit("onCloseModal");
    }
    const { getRootProps, getInputProps, ...rest } = useDropzone({ onDrop });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_tabs = resolveComponent("v-tabs");
      const _component_v_tab = resolveComponent("v-tab");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_IconsTrash = __nuxt_component_0$1;
      const _component_Loader = __nuxt_component_1;
      _push(ssrRenderComponent(_component_v_dialog, mergeProps({
        modelValue: _ctx.openModal,
        "onUpdate:modelValue": ($event) => _ctx.openModal = $event,
        width: "75%"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, {
              height: "auto",
              style: { "scrollbar-width": "none" }
            }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center border-b border-slate-200 pb-3 justify-between"${_scopeId2}><div class="text-xl font-semibold"${_scopeId2}><span${_scopeId2}>Pustaka Gambar</span></div><div class="cursor-pointer"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24"${_scopeId2}><g fill="none" stroke="black" stroke-width="1.5"${_scopeId2}><circle cx="12" cy="12" r="10"${_scopeId2}></circle><path stroke-linecap="round" d="m14.5 9.5l-5 5m0-5l5 5"${_scopeId2}></path></g></svg></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center border-b border-slate-200 pb-3 justify-between" }, [
                      createVNode("div", { class: "text-xl font-semibold" }, [
                        createVNode("span", null, "Pustaka Gambar")
                      ]),
                      createVNode("div", {
                        onClick: _ctx.closeModal,
                        class: "cursor-pointer"
                      }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "1.6em",
                          height: "1.6em",
                          viewBox: "0 0 24 24"
                        }, [
                          createVNode("g", {
                            fill: "none",
                            stroke: "black",
                            "stroke-width": "1.5"
                          }, [
                            createVNode("circle", {
                              cx: "12",
                              cy: "12",
                              r: "10"
                            }),
                            createVNode("path", {
                              "stroke-linecap": "round",
                              d: "m14.5 9.5l-5 5m0-5l5 5"
                            })
                          ])
                        ]))
                      ], 8, ["onClick"])
                    ])
                  ];
                }
              }),
              text: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_tabs, {
                    "align-tabs": "start",
                    modelValue: currentTab.value,
                    "onUpdate:modelValue": ($event) => currentTab.value = $event,
                    "fixed-tabs": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_tab, { value: "uploadImage" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Upload Gambar `);
                            } else {
                              return [
                                createTextVNode(" Upload Gambar ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_tab, { value: "listImage" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Semua Gambar `);
                            } else {
                              return [
                                createTextVNode(" Semua Gambar ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_tab, { value: "uploadImage" }, {
                            default: withCtx(() => [
                              createTextVNode(" Upload Gambar ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_tab, { value: "listImage" }, {
                            default: withCtx(() => [
                              createTextVNode(" Semua Gambar ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (currentTab.value == "listImage") {
                    _push3(`<div class="block md:flex pt-6"${_scopeId2}><div class="bg-[#F6F7F7] flex-1 px-6 pt-4"${_scopeId2}><div class="text-xl font-semibold mb-4"${_scopeId2}>Gambar Dipilih</div>`);
                    if (imageSelected.value) {
                      _push3(ssrRenderComponent(_component_v_img, {
                        width: "100%",
                        class: "rounded-md",
                        "aspect-ration": "1",
                        "lazy-src": imageSelected.value,
                        src: imageSelected.value
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<div class="flex pb-4"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_v_btn, {
                      onClick: useImage,
                      color: "#10B981",
                      class: "w-fit mt-6 text-white px-3 mx-1 mb-2 py-2 text-md"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span class="capitalize"${_scopeId3}>Pilih Gambar</span>`);
                        } else {
                          return [
                            createVNode("span", { class: "capitalize" }, "Pilih Gambar")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_v_btn, {
                      onClick: removeImage,
                      color: "#FC4100",
                      class: "w-fit mt-6 text-white px-1 mx-1 mb-2 py-2 text-md"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_IconsTrash, null, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_IconsTrash)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div></div><div class="${ssrRenderClass([_ctx.$vuetify.display.mobile ? "mt-10" : "mt-0", "w-full md:w-3/4 md:mt-1 px-3 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8"])}"${_scopeId2}><!--[-->`);
                    ssrRenderList(images.value, (image) => {
                      _push3(`<div class="${ssrRenderClass([{ "border-4 border-[#10B981]": imageSelected.value == image }, "relative rounded-lg cursor-pointer items-center flex"])}"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_v_img, {
                        width: "100%",
                        class: "rounded-md",
                        "aspect-ratio": "1",
                        cover: "",
                        "lazy-src": image,
                        src: image
                      }, null, _parent3, _scopeId2));
                      if (imageSelected.value == image) {
                        _push3(`<svg class="rounded-md absolute right-[2px] top-0" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16"${_scopeId2}><path fill="#10B981" d="M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2zm6.354 4.854l-3.5 3.5a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 9.293l3.146-3.147a.5.5 0 0 1 .708.708"${_scopeId2}></path></svg>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div>`);
                    });
                    _push3(`<!--]--></div></div>`);
                  } else {
                    _push3(`<div${_scopeId2}><div${ssrRenderAttrs(mergeProps({ class: "flex justify-center items-center h-[300px]" }, unref(getRootProps)()))}${_scopeId2}><input${ssrRenderAttrs(unref(getInputProps)())}${_scopeId2}><div${_scopeId2}><p class="text-xl font-semibold"${_scopeId2}>Drop files to upload</p><p class="w-fit mx-auto my-3"${_scopeId2}>atau</p><div class="flex justify-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_v_btn, { color: "#10B981" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (!loading.value) {
                            _push4(`<span${_scopeId3}>Upload Gambar</span>`);
                          } else {
                            _push4(ssrRenderComponent(_component_Loader, null, null, _parent4, _scopeId3));
                          }
                        } else {
                          return [
                            !loading.value ? (openBlock(), createBlock("span", { key: 0 }, "Upload Gambar")) : (openBlock(), createBlock(_component_Loader, { key: 1 }))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div></div></div></div>`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "w-full" }, [
                      createVNode(_component_v_tabs, {
                        "align-tabs": "start",
                        modelValue: currentTab.value,
                        "onUpdate:modelValue": ($event) => currentTab.value = $event,
                        "fixed-tabs": ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_tab, { value: "uploadImage" }, {
                            default: withCtx(() => [
                              createTextVNode(" Upload Gambar ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_tab, { value: "listImage" }, {
                            default: withCtx(() => [
                              createTextVNode(" Semua Gambar ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                      currentTab.value == "listImage" ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "block md:flex pt-6"
                      }, [
                        createVNode("div", { class: "bg-[#F6F7F7] flex-1 px-6 pt-4" }, [
                          createVNode("div", { class: "text-xl font-semibold mb-4" }, "Gambar Dipilih"),
                          imageSelected.value ? (openBlock(), createBlock(_component_v_img, {
                            key: 0,
                            width: "100%",
                            class: "rounded-md",
                            "aspect-ration": "1",
                            "lazy-src": imageSelected.value,
                            src: imageSelected.value
                          }, null, 8, ["lazy-src", "src"])) : createCommentVNode("", true),
                          createVNode("div", { class: "flex pb-4" }, [
                            createVNode(_component_v_btn, {
                              onClick: useImage,
                              color: "#10B981",
                              class: "w-fit mt-6 text-white px-3 mx-1 mb-2 py-2 text-md"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "capitalize" }, "Pilih Gambar")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_btn, {
                              onClick: removeImage,
                              color: "#FC4100",
                              class: "w-fit mt-6 text-white px-1 mx-1 mb-2 py-2 text-md"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_IconsTrash)
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        createVNode("div", {
                          class: [_ctx.$vuetify.display.mobile ? "mt-10" : "mt-0", "w-full md:w-3/4 md:mt-1 px-3 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8"]
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(images.value, (image) => {
                            return openBlock(), createBlock("div", {
                              onClick: ($event) => imageSelected.value = image,
                              class: [{ "border-4 border-[#10B981]": imageSelected.value == image }, "relative rounded-lg cursor-pointer items-center flex"]
                            }, [
                              createVNode(_component_v_img, {
                                width: "100%",
                                class: "rounded-md",
                                "aspect-ratio": "1",
                                cover: "",
                                "lazy-src": image,
                                src: image
                              }, null, 8, ["lazy-src", "src"]),
                              imageSelected.value == image ? (openBlock(), createBlock("svg", {
                                key: 0,
                                class: "rounded-md absolute right-[2px] top-0",
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "1.5em",
                                height: "1.5em",
                                viewBox: "0 0 16 16"
                              }, [
                                createVNode("path", {
                                  fill: "#10B981",
                                  d: "M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2zm6.354 4.854l-3.5 3.5a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 9.293l3.146-3.147a.5.5 0 0 1 .708.708"
                                })
                              ])) : createCommentVNode("", true)
                            ], 10, ["onClick"]);
                          }), 256))
                        ], 2)
                      ])) : (openBlock(), createBlock("div", { key: 1 }, [
                        createVNode("div", mergeProps({ class: "flex justify-center items-center h-[300px]" }, unref(getRootProps)()), [
                          createVNode("input", unref(getInputProps)(), null, 16),
                          createVNode("div", null, [
                            createVNode("p", { class: "text-xl font-semibold" }, "Drop files to upload"),
                            createVNode("p", { class: "w-fit mx-auto my-3" }, "atau"),
                            createVNode("div", { class: "flex justify-center" }, [
                              createVNode(_component_v_btn, { color: "#10B981" }, {
                                default: withCtx(() => [
                                  !loading.value ? (openBlock(), createBlock("span", { key: 0 }, "Upload Gambar")) : (openBlock(), createBlock(_component_Loader, { key: 1 }))
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ], 16)
                      ]))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card, {
                height: "auto",
                style: { "scrollbar-width": "none" }
              }, {
                title: withCtx(() => [
                  createVNode("div", { class: "flex items-center border-b border-slate-200 pb-3 justify-between" }, [
                    createVNode("div", { class: "text-xl font-semibold" }, [
                      createVNode("span", null, "Pustaka Gambar")
                    ]),
                    createVNode("div", {
                      onClick: _ctx.closeModal,
                      class: "cursor-pointer"
                    }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "1.6em",
                        height: "1.6em",
                        viewBox: "0 0 24 24"
                      }, [
                        createVNode("g", {
                          fill: "none",
                          stroke: "black",
                          "stroke-width": "1.5"
                        }, [
                          createVNode("circle", {
                            cx: "12",
                            cy: "12",
                            r: "10"
                          }),
                          createVNode("path", {
                            "stroke-linecap": "round",
                            d: "m14.5 9.5l-5 5m0-5l5 5"
                          })
                        ])
                      ]))
                    ], 8, ["onClick"])
                  ])
                ]),
                text: withCtx(() => [
                  createVNode("div", { class: "w-full" }, [
                    createVNode(_component_v_tabs, {
                      "align-tabs": "start",
                      modelValue: currentTab.value,
                      "onUpdate:modelValue": ($event) => currentTab.value = $event,
                      "fixed-tabs": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_tab, { value: "uploadImage" }, {
                          default: withCtx(() => [
                            createTextVNode(" Upload Gambar ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_tab, { value: "listImage" }, {
                          default: withCtx(() => [
                            createTextVNode(" Semua Gambar ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                    currentTab.value == "listImage" ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "block md:flex pt-6"
                    }, [
                      createVNode("div", { class: "bg-[#F6F7F7] flex-1 px-6 pt-4" }, [
                        createVNode("div", { class: "text-xl font-semibold mb-4" }, "Gambar Dipilih"),
                        imageSelected.value ? (openBlock(), createBlock(_component_v_img, {
                          key: 0,
                          width: "100%",
                          class: "rounded-md",
                          "aspect-ration": "1",
                          "lazy-src": imageSelected.value,
                          src: imageSelected.value
                        }, null, 8, ["lazy-src", "src"])) : createCommentVNode("", true),
                        createVNode("div", { class: "flex pb-4" }, [
                          createVNode(_component_v_btn, {
                            onClick: useImage,
                            color: "#10B981",
                            class: "w-fit mt-6 text-white px-3 mx-1 mb-2 py-2 text-md"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "capitalize" }, "Pilih Gambar")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_btn, {
                            onClick: removeImage,
                            color: "#FC4100",
                            class: "w-fit mt-6 text-white px-1 mx-1 mb-2 py-2 text-md"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_IconsTrash)
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      createVNode("div", {
                        class: [_ctx.$vuetify.display.mobile ? "mt-10" : "mt-0", "w-full md:w-3/4 md:mt-1 px-3 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8"]
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(images.value, (image) => {
                          return openBlock(), createBlock("div", {
                            onClick: ($event) => imageSelected.value = image,
                            class: [{ "border-4 border-[#10B981]": imageSelected.value == image }, "relative rounded-lg cursor-pointer items-center flex"]
                          }, [
                            createVNode(_component_v_img, {
                              width: "100%",
                              class: "rounded-md",
                              "aspect-ratio": "1",
                              cover: "",
                              "lazy-src": image,
                              src: image
                            }, null, 8, ["lazy-src", "src"]),
                            imageSelected.value == image ? (openBlock(), createBlock("svg", {
                              key: 0,
                              class: "rounded-md absolute right-[2px] top-0",
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "1.5em",
                              height: "1.5em",
                              viewBox: "0 0 16 16"
                            }, [
                              createVNode("path", {
                                fill: "#10B981",
                                d: "M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2zm6.354 4.854l-3.5 3.5a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 9.293l3.146-3.147a.5.5 0 0 1 .708.708"
                              })
                            ])) : createCommentVNode("", true)
                          ], 10, ["onClick"]);
                        }), 256))
                      ], 2)
                    ])) : (openBlock(), createBlock("div", { key: 1 }, [
                      createVNode("div", mergeProps({ class: "flex justify-center items-center h-[300px]" }, unref(getRootProps)()), [
                        createVNode("input", unref(getInputProps)(), null, 16),
                        createVNode("div", null, [
                          createVNode("p", { class: "text-xl font-semibold" }, "Drop files to upload"),
                          createVNode("p", { class: "w-fit mx-auto my-3" }, "atau"),
                          createVNode("div", { class: "flex justify-center" }, [
                            createVNode(_component_v_btn, { color: "#10B981" }, {
                              default: withCtx(() => [
                                !loading.value ? (openBlock(), createBlock("span", { key: 0 }, "Upload Gambar")) : (openBlock(), createBlock(_component_Loader, { key: 1 }))
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ], 16)
                    ]))
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MediaLibrary.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;

export { __nuxt_component_0 as _ };
//# sourceMappingURL=MediaLibrary-15312a30.mjs.map
