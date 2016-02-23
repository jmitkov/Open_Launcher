webpackJsonp([2,3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(489);
	__webpack_require__(486);
	module.exports = __webpack_require__(485);


/***/ },

/***/ 485:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(246);
	var HomeComponent = (function () {
	    function HomeComponent() {
	    }
	    HomeComponent = __decorate([
	        core_1.Component({
	            selector: 'home',
	            templateUrl: "./app/views/home.html"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], HomeComponent);
	    return HomeComponent;
	})();
	exports.HomeComponent = HomeComponent;


/***/ },

/***/ 486:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(246);
	var http_1 = __webpack_require__(364);
	var multipart_item_1 = __webpack_require__(487);
	var multipart_uploader_1 = __webpack_require__(488);
	var URL = 'http://localhost:3000/api/upload';
	var UploadPictureComponent = (function () {
	    function UploadPictureComponent(http) {
	        var _this = this;
	        this.http = http;
	        this.spanText = "Loading...";
	        this.uploader = new multipart_uploader_1.MultipartUploader({ url: URL });
	        this.multipartItem = new multipart_item_1.MultipartItem(this.uploader);
	        this.upload = function () {
	            console.debug("home.ts & upload() ==>");
	            if (_this.multipartItem == null) {
	                _this.multipartItem = new multipart_item_1.MultipartItem(_this.uploader);
	            }
	            if (_this.multipartItem.formData == null)
	                _this.multipartItem.formData = new FormData();
	            _this.multipartItem.formData.append("userPhoto", _this.selectedFiles[0]);
	            _this.multipartItem.withCredentials = false;
	            _this.multipartItem.callback = _this.uploadCallback;
	            _this.multipartItem.upload();
	        };
	        this.uploadCallback = function (data) {
	            console.debug("home.ts & uploadCallback() ==>");
	            if (data) {
	                console.debug("home.ts & uploadCallback() upload file success.");
	            }
	            else {
	                console.error("home.ts & uploadCallback() upload file false.");
	            }
	        };
	    }
	    UploadPictureComponent.prototype.onChange = function (event) {
	        this.selectedFiles = event.srcElement.files;
	        console.log(this.selectedFiles);
	    };
	    UploadPictureComponent = __decorate([
	        core_1.Component({
	            selector: 'uploadPicture',
	            templateUrl: "./app/views/uploadPicture.html"
	        }), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], UploadPictureComponent);
	    return UploadPictureComponent;
	})();
	exports.UploadPictureComponent = UploadPictureComponent;


/***/ },

/***/ 487:
/***/ function(module, exports) {

	var MultipartItem = (function () {
	    function MultipartItem(uploader) {
	        this.uploader = uploader;
	        this.alias = 'file';
	        this.url = '/';
	        this.method = 'POST';
	        this.headers = [];
	        this.withCredentials = true;
	        this.formData = null;
	        this.isReady = false;
	        this.isUploading = false;
	        this.isUploaded = false;
	        this.isSuccess = false;
	        this.isCancel = false;
	        this.isError = false;
	        this.progress = 0;
	        this.index = null;
	        this.callback = null;
	    }
	    MultipartItem.prototype.upload = function () {
	        try {
	            console.debug("multipart-item.ts & upload() ==>.");
	            this.uploader.uploadItem(this);
	        }
	        catch (e) {
	        }
	    };
	    MultipartItem.prototype.init = function () {
	        this.isReady = false;
	        this.isUploading = false;
	        this.isUploaded = false;
	        this.isSuccess = false;
	        this.isCancel = false;
	        this.isError = false;
	        this.progress = 0;
	        this.formData = null;
	        this.callback = null;
	    };
	    MultipartItem.prototype.onBeforeUpload = function () {
	    };
	    MultipartItem.prototype.onProgress = function (progress) {
	    };
	    MultipartItem.prototype.onSuccess = function (response, status, headers) {
	    };
	    MultipartItem.prototype.onError = function (response, status, headers) {
	    };
	    MultipartItem.prototype.onCancel = function (response, status, headers) {
	    };
	    MultipartItem.prototype.onComplete = function (response, status, headers) {
	        this.callback(response);
	        this.init();
	    };
	    MultipartItem.prototype._onBeforeUpload = function () {
	        this.isReady = true;
	        this.isUploading = true;
	        this.isUploaded = false;
	        this.isSuccess = false;
	        this.isCancel = false;
	        this.isError = false;
	        this.progress = 0;
	        this.onBeforeUpload();
	    };
	    MultipartItem.prototype._onProgress = function (progress) {
	        this.progress = progress;
	        this.onProgress(progress);
	    };
	    MultipartItem.prototype._onSuccess = function (response, status, headers) {
	        this.isReady = false;
	        this.isUploading = false;
	        this.isUploaded = true;
	        this.isSuccess = true;
	        this.isCancel = false;
	        this.isError = false;
	        this.progress = 100;
	        this.index = null;
	        this.onSuccess(response, status, headers);
	    };
	    MultipartItem.prototype._onError = function (response, status, headers) {
	        this.isReady = false;
	        this.isUploading = false;
	        this.isUploaded = true;
	        this.isSuccess = false;
	        this.isCancel = false;
	        this.isError = true;
	        this.progress = 0;
	        this.index = null;
	        this.onError(response, status, headers);
	        this.callback(response);
	    };
	    MultipartItem.prototype._onCancel = function (response, status, headers) {
	        this.isReady = false;
	        this.isUploading = false;
	        this.isUploaded = false;
	        this.isSuccess = false;
	        this.isCancel = true;
	        this.isError = false;
	        this.progress = 0;
	        this.index = null;
	        this.onCancel(response, status, headers);
	    };
	    MultipartItem.prototype._onComplete = function (response, status, headers) {
	        this.onComplete(response, status, headers);
	    };
	    MultipartItem.prototype._prepareToUploading = function () {
	        this.isReady = true;
	    };
	    return MultipartItem;
	})();
	exports.MultipartItem = MultipartItem;


/***/ },

/***/ 488:
/***/ function(module, exports) {

	var MultipartUploader = (function () {
	    function MultipartUploader(options) {
	        this.options = options;
	        this.isUploading = false;
	        this.progress = 0;
	        this.isHTML5 = true;
	        this.url = options.url;
	        this.authToken = options.authToken;
	    }
	    MultipartUploader.prototype.uploadItem = function (item) {
	        console.debug("multipart-uploader.ts & uploadItem() ==>.");
	        if (this.isUploading) {
	            console.debug("multipart-uploader.ts & uploadItem() uploader is uploading now.");
	            return;
	        }
	        this.isUploading = true;
	        this._xhrTransport(item);
	    };
	    MultipartUploader.prototype._onBeforeUploadItem = function (item) {
	        item._onBeforeUpload();
	    };
	    MultipartUploader.prototype._parseHeaders = function (headers) {
	        var parsed = {}, key, val, i;
	        if (!headers) {
	            return parsed;
	        }
	        headers.split('\n').map(function (line) {
	            i = line.indexOf(':');
	            key = line.slice(0, i).trim().toLowerCase();
	            val = line.slice(i + 1).trim();
	            if (key) {
	                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	            }
	        });
	        return parsed;
	    };
	    MultipartUploader.prototype._transformResponse = function (response, headers) {
	        return response;
	    };
	    MultipartUploader.prototype._isSuccessCode = function (status) {
	        return (status >= 200 && status < 300) || status === 304;
	    };
	    MultipartUploader.prototype._render = function () {
	    };
	    MultipartUploader.prototype._xhrTransport = function (item) {
	        var _this = this;
	        console.debug("multipart-uploader.ts & _xhrTransport() ==>.");
	        var xhr = item._xhr = new XMLHttpRequest();
	        this._onBeforeUploadItem(item);
	        xhr.upload.onprogress = function (event) {
	        };
	        xhr.onload = function () {
	            console.debug("multipart-uploader.ts & _xhrTransport.onload() ==>");
	            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
	            var response = _this._transformResponse(xhr.response, headers);
	            var gist = _this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
	            var method = '_on' + gist + 'Item';
	            _this[method](item, response, xhr.status, headers);
	            _this._onCompleteItem(item, response, xhr.status, headers);
	        };
	        xhr.onerror = function () {
	            console.debug("multipart-uploader.ts & _xhrTransport.onerror() ==>");
	            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
	            var response = _this._transformResponse(xhr.response, headers);
	            _this._onErrorItem(item, response, xhr.status, headers);
	        };
	        xhr.onabort = function () {
	            console.debug("multipart-uploader.ts & _xhrTransport.onabort() ==>");
	            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
	            var response = _this._transformResponse(xhr.response, headers);
	            _this._onCompleteItem(item, response, xhr.status, headers);
	        };
	        xhr.open(item.method, this.url, true);
	        xhr.withCredentials = item.withCredentials;
	        if (this.authToken) {
	            xhr.setRequestHeader('Authorization', this.authToken);
	        }
	        console.debug("multipart-uploader.ts & _xhrTransport() send...");
	        xhr.send(item.formData);
	        this._render();
	    };
	    MultipartUploader.prototype.onSuccessItem = function (item, response, status, headers) {
	    };
	    MultipartUploader.prototype.onErrorItem = function (item, response, status, headers) {
	        this.isUploading = false;
	    };
	    MultipartUploader.prototype.onCancelItem = function (item, response, status, headers) {
	    };
	    MultipartUploader.prototype.onCompleteItem = function (item, response, status, headers) {
	    };
	    MultipartUploader.prototype._onSuccessItem = function (item, response, status, headers) {
	        item._onSuccess(response, status, headers);
	        this.onSuccessItem(item, response, status, headers);
	    };
	    MultipartUploader.prototype._onErrorItem = function (item, response, status, headers) {
	        console.debug("multipart-uploader.ts & _onErrorItem() ==>" + " Error status:" + status);
	        item._onError(response, status, headers);
	        this.onErrorItem(item, response, status, headers);
	    };
	    MultipartUploader.prototype._onCancelItem = function (item, response, status, headers) {
	        item._onCancel(response, status, headers);
	        this.onCancelItem(item, response, status, headers);
	    };
	    MultipartUploader.prototype._onCompleteItem = function (item, response, status, headers) {
	        item._onComplete(response, status, headers);
	        this.onCompleteItem(item, response, status, headers);
	        this.isUploading = false;
	        this._render();
	    };
	    return MultipartUploader;
	})();
	exports.MultipartUploader = MultipartUploader;


/***/ },

/***/ 489:
/***/ function(module, exports, __webpack_require__) {

	var core_1 = __webpack_require__(246);
	core_1.Component({
	    selector: 'login',
	    templateUrl: "./app/views/login.html"
	});
	var LoginComponent = (function () {
	    function LoginComponent() {
	    }
	    return LoginComponent;
	})();
	exports.LoginComponent = LoginComponent;


/***/ }

});
//# sourceMappingURL=components.js.map