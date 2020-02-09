/*global alert*/
/* eslint-env browser */
/* eslint-disable no-unused-vars */
function indofood() {'use strict'; var modal = document.getElementById("myModal1");
            if (modal.style.display === "none") { modal.style.display = "block"; } else { modal.style.display = "block"; }
            var xhr = new XMLHttpRequest();
            var url = "https://00e9e64bac430721a4f95c50d1447ed8943b4aff038670c5c6-apidata.googleusercontent.com/download/storage/v1/b/client-side/o/shopeepedia%2FDescription.txt?qk=AD5uMEtgAvtxsGZQCSxmDYK33t_xjxsi97Zvl5YFZHMt6AzDHZNoW8bU2yeAA6dYPQwrzvyblLYEpeWDDSYoKJykwrmpu4tpYv8R_DYUHFVT_8wYcShfXiuRyu_usqtYtQ9kzaSLpoquQNb4okabdklxtHebY9aXnarqR4X1t9kAwAUQg5Q9tVDX8kf7JQoAj6uuHDb0tp1OFWCNA2TdJ6XtDGjTc4w8cF51_-M0cW9HRS2kY_BItvygWYLENM5_LhrReBNlCTFyicyYcGSLcdsiqal4xr199SWRUY2aDGQunm8IsbJKav6lohIC5qrRdBBiaVkE_ijBkbS5RxvfBxyvBIvdO1eaPfc3uGiFX98ieP1vjJIXeaX9P8HconSRnOPJL6qyPSBtJnhGS27pd1Yeu431ybBKqbxxG4ve2oZElZ9g-SXi30fzrlgbHjTEeTCL2IQxrMa8ZOyvE6Pb_tXl0w9kBUwcWYzBA6vLzQEZHn5aShN0gD_ouvteTsKnpJMquG1frcD1eM3Q54A3Z5gV6keen9A1IBw3iTn-2iE7hIWwiFNhM0LSD8YIJTSsl8fZZS3ov68AHWr5v1mLyNETGaAXoUVCp8LTrMCRUwAScrC3d4rtNn7AWxYvelnXOjzUPXu5wJHeyIF2dcLl0M2dL6q7Rh6nbwlnuIGMATlG2LryisZKHuWa7FazTVMvb6gzELi8jWaDT3HMGNkkh7sLKshco14Uw2Egdml27JSPIlqt2qXBwIdAKDAYCYC9ZDsvmBCvSJ441jLJttzMg134KjXF7eVPZN0NK4QFDWHRUca0z1Uu_AcAKD6LTvd7IofYGto55Qp1";

            xhr.onerror = function () { alert("Failed to get data");
            };

            xhr.onloadend = function () { if (this.responseText !== "") {
                    var data = JSON.parse(this.responseText);
                    var img = document.createElement("img");
                    img.src = data.indofoodimg;
                    var desc = document.createElement("p");
                    desc.innerHTML = data.indofood;

                    document.getElementById("result1").append(img, desc);
                    document.getElementById("button").innerHTML = "Done";

                    setTimeout(function () {
                    }, 3000);
                }
            };

            xhr.open("GET", url, true);
            xhr.send();
        }
function close2(){
 var modal = document.getElementById("myModal1");
if (modal.style.display === "block") { modal.style.display = "none"; } else { modal.style.display = "none"; }
document.getElementById("result1").innerHTML = "";
    document.getElementById("result2").innerHTML = "";
}
function nike() {
            var modal = document.getElementById("myModal1");
            if (modal.style.display === "none") { modal.style.display = "block"; } else { modal.style.display = "block"; }
            var xhr = new XMLHttpRequest();
            var url = "https://00e9e64bac430721a4f95c50d1447ed8943b4aff038670c5c6-apidata.googleusercontent.com/download/storage/v1/b/client-side/o/shopeepedia%2FDescription.txt?qk=AD5uMEtgAvtxsGZQCSxmDYK33t_xjxsi97Zvl5YFZHMt6AzDHZNoW8bU2yeAA6dYPQwrzvyblLYEpeWDDSYoKJykwrmpu4tpYv8R_DYUHFVT_8wYcShfXiuRyu_usqtYtQ9kzaSLpoquQNb4okabdklxtHebY9aXnarqR4X1t9kAwAUQg5Q9tVDX8kf7JQoAj6uuHDb0tp1OFWCNA2TdJ6XtDGjTc4w8cF51_-M0cW9HRS2kY_BItvygWYLENM5_LhrReBNlCTFyicyYcGSLcdsiqal4xr199SWRUY2aDGQunm8IsbJKav6lohIC5qrRdBBiaVkE_ijBkbS5RxvfBxyvBIvdO1eaPfc3uGiFX98ieP1vjJIXeaX9P8HconSRnOPJL6qyPSBtJnhGS27pd1Yeu431ybBKqbxxG4ve2oZElZ9g-SXi30fzrlgbHjTEeTCL2IQxrMa8ZOyvE6Pb_tXl0w9kBUwcWYzBA6vLzQEZHn5aShN0gD_ouvteTsKnpJMquG1frcD1eM3Q54A3Z5gV6keen9A1IBw3iTn-2iE7hIWwiFNhM0LSD8YIJTSsl8fZZS3ov68AHWr5v1mLyNETGaAXoUVCp8LTrMCRUwAScrC3d4rtNn7AWxYvelnXOjzUPXu5wJHeyIF2dcLl0M2dL6q7Rh6nbwlnuIGMATlG2LryisZKHuWa7FazTVMvb6gzELi8jWaDT3HMGNkkh7sLKshco14Uw2Egdml27JSPIlqt2qXBwIdAKDAYCYC9ZDsvmBCvSJ441jLJttzMg134KjXF7eVPZN0NK4QFDWHRUca0z1Uu_AcAKD6LTvd7IofYGto55Qp1";


            xhr.onerror = function () {
                alert("Failed to get data");
            };

            xhr.onloadend = function () {
                if (this.responseText !== "") {
                    var data = JSON.parse(this.responseText);
                    var img = document.createElement("img");
                    img.src = data.nikeimg;
                    var desc = document.createElement("p");
                    desc.innerHTML = data.nike;

                    document.getElementById("result1").append(img, desc);
                    document.getElementById("button").innerHTML = "Done";

                    setTimeout(function () {
                    }, 3000);
                }
            };

            xhr.open("GET", url, true);
            xhr.send();
        }
function adidas() {
            var modal = document.getElementById("myModal1");
            if (modal.style.display === "none") { modal.style.display = "block"; } else { modal.style.display = "block"; }
            var xhr = new XMLHttpRequest();
            var url = "https://00e9e64bac430721a4f95c50d1447ed8943b4aff038670c5c6-apidata.googleusercontent.com/download/storage/v1/b/client-side/o/shopeepedia%2FDescription.txt?qk=AD5uMEtgAvtxsGZQCSxmDYK33t_xjxsi97Zvl5YFZHMt6AzDHZNoW8bU2yeAA6dYPQwrzvyblLYEpeWDDSYoKJykwrmpu4tpYv8R_DYUHFVT_8wYcShfXiuRyu_usqtYtQ9kzaSLpoquQNb4okabdklxtHebY9aXnarqR4X1t9kAwAUQg5Q9tVDX8kf7JQoAj6uuHDb0tp1OFWCNA2TdJ6XtDGjTc4w8cF51_-M0cW9HRS2kY_BItvygWYLENM5_LhrReBNlCTFyicyYcGSLcdsiqal4xr199SWRUY2aDGQunm8IsbJKav6lohIC5qrRdBBiaVkE_ijBkbS5RxvfBxyvBIvdO1eaPfc3uGiFX98ieP1vjJIXeaX9P8HconSRnOPJL6qyPSBtJnhGS27pd1Yeu431ybBKqbxxG4ve2oZElZ9g-SXi30fzrlgbHjTEeTCL2IQxrMa8ZOyvE6Pb_tXl0w9kBUwcWYzBA6vLzQEZHn5aShN0gD_ouvteTsKnpJMquG1frcD1eM3Q54A3Z5gV6keen9A1IBw3iTn-2iE7hIWwiFNhM0LSD8YIJTSsl8fZZS3ov68AHWr5v1mLyNETGaAXoUVCp8LTrMCRUwAScrC3d4rtNn7AWxYvelnXOjzUPXu5wJHeyIF2dcLl0M2dL6q7Rh6nbwlnuIGMATlG2LryisZKHuWa7FazTVMvb6gzELi8jWaDT3HMGNkkh7sLKshco14Uw2Egdml27JSPIlqt2qXBwIdAKDAYCYC9ZDsvmBCvSJ441jLJttzMg134KjXF7eVPZN0NK4QFDWHRUca0z1Uu_AcAKD6LTvd7IofYGto55Qp1";


            xhr.onerror = function () {
                alert("Failed to get data");
            };

            xhr.onloadend = function () {
                if (this.responseText !== "") {
                    var data = JSON.parse(this.responseText);
                    var img = document.createElement("img");
                    img.src = data.adidasimg;
                    var desc = document.createElement("p");
                    desc.innerHTML = data.adidas;
                    
                    document.getElementById("result1").append( img, desc);

                    setTimeout(function () {
                    }, 3000);
                }
            };

            xhr.open("GET", url, true);
            xhr.send();
        }
function billion() {
            var modal = document.getElementById("myModal1");
            if (modal.style.display === "none") { modal.style.display = "block"; } else { modal.style.display = "block"; }
            var xhr = new XMLHttpRequest();
            var url = "https://00e9e64bac430721a4f95c50d1447ed8943b4aff038670c5c6-apidata.googleusercontent.com/download/storage/v1/b/client-side/o/shopeepedia%2FDescription.txt?qk=AD5uMEtgAvtxsGZQCSxmDYK33t_xjxsi97Zvl5YFZHMt6AzDHZNoW8bU2yeAA6dYPQwrzvyblLYEpeWDDSYoKJykwrmpu4tpYv8R_DYUHFVT_8wYcShfXiuRyu_usqtYtQ9kzaSLpoquQNb4okabdklxtHebY9aXnarqR4X1t9kAwAUQg5Q9tVDX8kf7JQoAj6uuHDb0tp1OFWCNA2TdJ6XtDGjTc4w8cF51_-M0cW9HRS2kY_BItvygWYLENM5_LhrReBNlCTFyicyYcGSLcdsiqal4xr199SWRUY2aDGQunm8IsbJKav6lohIC5qrRdBBiaVkE_ijBkbS5RxvfBxyvBIvdO1eaPfc3uGiFX98ieP1vjJIXeaX9P8HconSRnOPJL6qyPSBtJnhGS27pd1Yeu431ybBKqbxxG4ve2oZElZ9g-SXi30fzrlgbHjTEeTCL2IQxrMa8ZOyvE6Pb_tXl0w9kBUwcWYzBA6vLzQEZHn5aShN0gD_ouvteTsKnpJMquG1frcD1eM3Q54A3Z5gV6keen9A1IBw3iTn-2iE7hIWwiFNhM0LSD8YIJTSsl8fZZS3ov68AHWr5v1mLyNETGaAXoUVCp8LTrMCRUwAScrC3d4rtNn7AWxYvelnXOjzUPXu5wJHeyIF2dcLl0M2dL6q7Rh6nbwlnuIGMATlG2LryisZKHuWa7FazTVMvb6gzELi8jWaDT3HMGNkkh7sLKshco14Uw2Egdml27JSPIlqt2qXBwIdAKDAYCYC9ZDsvmBCvSJ441jLJttzMg134KjXF7eVPZN0NK4QFDWHRUca0z1Uu_AcAKD6LTvd7IofYGto55Qp1";


            xhr.onerror = function () {
                alert("Failed to get data");
            };

            xhr.onloadend = function () {
                if (this.responseText !== "") {
                    var data = JSON.parse(this.responseText);
                    var img = document.createElement("img");
                    img.src = data.billionaireimg;
                    var desc = document.createElement("p");
                    desc.innerHTML = data.billionaire;

                    document.getElementById("result1").append(img, desc);
                    document.getElementById("button").innerHTML = "Done";

                    setTimeout(function () {
                    }, 3000);
                }
            };

            xhr.open("GET", url, true);
            xhr.send();
        }
function ahha() {
            var modal = document.getElementById("myModal1");
            if (modal.style.display === "none") { modal.style.display = "block"; } else { modal.style.display = "block"; }
            var xhr = new XMLHttpRequest();
            var url = "https://00e9e64bac430721a4f95c50d1447ed8943b4aff038670c5c6-apidata.googleusercontent.com/download/storage/v1/b/client-side/o/shopeepedia%2FDescription.txt?qk=AD5uMEtgAvtxsGZQCSxmDYK33t_xjxsi97Zvl5YFZHMt6AzDHZNoW8bU2yeAA6dYPQwrzvyblLYEpeWDDSYoKJykwrmpu4tpYv8R_DYUHFVT_8wYcShfXiuRyu_usqtYtQ9kzaSLpoquQNb4okabdklxtHebY9aXnarqR4X1t9kAwAUQg5Q9tVDX8kf7JQoAj6uuHDb0tp1OFWCNA2TdJ6XtDGjTc4w8cF51_-M0cW9HRS2kY_BItvygWYLENM5_LhrReBNlCTFyicyYcGSLcdsiqal4xr199SWRUY2aDGQunm8IsbJKav6lohIC5qrRdBBiaVkE_ijBkbS5RxvfBxyvBIvdO1eaPfc3uGiFX98ieP1vjJIXeaX9P8HconSRnOPJL6qyPSBtJnhGS27pd1Yeu431ybBKqbxxG4ve2oZElZ9g-SXi30fzrlgbHjTEeTCL2IQxrMa8ZOyvE6Pb_tXl0w9kBUwcWYzBA6vLzQEZHn5aShN0gD_ouvteTsKnpJMquG1frcD1eM3Q54A3Z5gV6keen9A1IBw3iTn-2iE7hIWwiFNhM0LSD8YIJTSsl8fZZS3ov68AHWr5v1mLyNETGaAXoUVCp8LTrMCRUwAScrC3d4rtNn7AWxYvelnXOjzUPXu5wJHeyIF2dcLl0M2dL6q7Rh6nbwlnuIGMATlG2LryisZKHuWa7FazTVMvb6gzELi8jWaDT3HMGNkkh7sLKshco14Uw2Egdml27JSPIlqt2qXBwIdAKDAYCYC9ZDsvmBCvSJ441jLJttzMg134KjXF7eVPZN0NK4QFDWHRUca0z1Uu_AcAKD6LTvd7IofYGto55Qp1";


            xhr.onerror = function () {
                alert("Failed to get data");
            };

            xhr.onloadend = function () {
                if (this.responseText !== "") {
                    var data = JSON.parse(this.responseText);
                    var img = document.createElement("img");
                    img.src = data.ahhaimg;
                    var desc = document.createElement("p");
                    desc.innerHTML = data.ahha;

                    document.getElementById("result1").append(img, desc);
                    document.getElementById("button").innerHTML = "Done";

                    setTimeout(function () {
                    }, 3000);
                }
            };

            xhr.open("GET", url, true);
            xhr.send();
        }
function supreme() {
            var modal = document.getElementById("myModal1");
            if (modal.style.display === "none") { modal.style.display = "block"; } else { modal.style.display = "block"; }
            var xhr = new XMLHttpRequest();
            var url = "https://00e9e64bac430721a4f95c50d1447ed8943b4aff038670c5c6-apidata.googleusercontent.com/download/storage/v1/b/client-side/o/shopeepedia%2FDescription.txt?qk=AD5uMEtgAvtxsGZQCSxmDYK33t_xjxsi97Zvl5YFZHMt6AzDHZNoW8bU2yeAA6dYPQwrzvyblLYEpeWDDSYoKJykwrmpu4tpYv8R_DYUHFVT_8wYcShfXiuRyu_usqtYtQ9kzaSLpoquQNb4okabdklxtHebY9aXnarqR4X1t9kAwAUQg5Q9tVDX8kf7JQoAj6uuHDb0tp1OFWCNA2TdJ6XtDGjTc4w8cF51_-M0cW9HRS2kY_BItvygWYLENM5_LhrReBNlCTFyicyYcGSLcdsiqal4xr199SWRUY2aDGQunm8IsbJKav6lohIC5qrRdBBiaVkE_ijBkbS5RxvfBxyvBIvdO1eaPfc3uGiFX98ieP1vjJIXeaX9P8HconSRnOPJL6qyPSBtJnhGS27pd1Yeu431ybBKqbxxG4ve2oZElZ9g-SXi30fzrlgbHjTEeTCL2IQxrMa8ZOyvE6Pb_tXl0w9kBUwcWYzBA6vLzQEZHn5aShN0gD_ouvteTsKnpJMquG1frcD1eM3Q54A3Z5gV6keen9A1IBw3iTn-2iE7hIWwiFNhM0LSD8YIJTSsl8fZZS3ov68AHWr5v1mLyNETGaAXoUVCp8LTrMCRUwAScrC3d4rtNn7AWxYvelnXOjzUPXu5wJHeyIF2dcLl0M2dL6q7Rh6nbwlnuIGMATlG2LryisZKHuWa7FazTVMvb6gzELi8jWaDT3HMGNkkh7sLKshco14Uw2Egdml27JSPIlqt2qXBwIdAKDAYCYC9ZDsvmBCvSJ441jLJttzMg134KjXF7eVPZN0NK4QFDWHRUca0z1Uu_AcAKD6LTvd7IofYGto55Qp1";


            xhr.onerror = function () {
                alert("Failed to get data");
            };

            xhr.onloadend = function () {
                if (this.responseText !== "") {
                    var data = JSON.parse(this.responseText);
                    var img = document.createElement("img");
                    img.src = data.supremeimg;
                    var desc = document.createElement("p");
                    desc.innerHTML = data.supreme;

                    document.getElementById("result1").append(img, desc);
                    document.getElementById("button").innerHTML = "Done";

                    setTimeout(function () {
                    }, 3000);
                }
            };

            xhr.open("GET", url, true);
            xhr.send();
        }
function flashsale() {
            var modal = document.getElementById("myModal1");
            if (modal.style.display === "none") { modal.style.display = "block"; } else { modal.style.display = "block"; }
            var xhr = new XMLHttpRequest();
            var url = "https://00e9e64bac430721a4f95c50d1447ed8943b4aff038670c5c6-apidata.googleusercontent.com/download/storage/v1/b/client-side/o/shopeepedia%2FDescription.txt?qk=AD5uMEtgAvtxsGZQCSxmDYK33t_xjxsi97Zvl5YFZHMt6AzDHZNoW8bU2yeAA6dYPQwrzvyblLYEpeWDDSYoKJykwrmpu4tpYv8R_DYUHFVT_8wYcShfXiuRyu_usqtYtQ9kzaSLpoquQNb4okabdklxtHebY9aXnarqR4X1t9kAwAUQg5Q9tVDX8kf7JQoAj6uuHDb0tp1OFWCNA2TdJ6XtDGjTc4w8cF51_-M0cW9HRS2kY_BItvygWYLENM5_LhrReBNlCTFyicyYcGSLcdsiqal4xr199SWRUY2aDGQunm8IsbJKav6lohIC5qrRdBBiaVkE_ijBkbS5RxvfBxyvBIvdO1eaPfc3uGiFX98ieP1vjJIXeaX9P8HconSRnOPJL6qyPSBtJnhGS27pd1Yeu431ybBKqbxxG4ve2oZElZ9g-SXi30fzrlgbHjTEeTCL2IQxrMa8ZOyvE6Pb_tXl0w9kBUwcWYzBA6vLzQEZHn5aShN0gD_ouvteTsKnpJMquG1frcD1eM3Q54A3Z5gV6keen9A1IBw3iTn-2iE7hIWwiFNhM0LSD8YIJTSsl8fZZS3ov68AHWr5v1mLyNETGaAXoUVCp8LTrMCRUwAScrC3d4rtNn7AWxYvelnXOjzUPXu5wJHeyIF2dcLl0M2dL6q7Rh6nbwlnuIGMATlG2LryisZKHuWa7FazTVMvb6gzELi8jWaDT3HMGNkkh7sLKshco14Uw2Egdml27JSPIlqt2qXBwIdAKDAYCYC9ZDsvmBCvSJ441jLJttzMg134KjXF7eVPZN0NK4QFDWHRUca0z1Uu_AcAKD6LTvd7IofYGto55Qp1";


            xhr.onerror = function () {
                alert("Failed to get data");
            };

            xhr.onloadend = function () {
                if (this.responseText !== "") {
                    var data = JSON.parse(this.responseText);
                    var img = document.createElement("img");
                    img.src = data.flashsaleimg;
                    var desc = document.createElement("p");
                    desc.innerHTML = data.flashsale;

                    document.getElementById("result2").append(img, desc);
                    document.getElementById("button").innerHTML = "Done";

                    setTimeout(function () {
                    }, 3000);
                }
            };

            xhr.open("GET", url, true);
            xhr.send();
        }
function indomie() {
            var modal = document.getElementById("myModal1");
            if (modal.style.display === "none") { modal.style.display = "block"; } else { modal.style.display = "block"; }
            var xhr = new XMLHttpRequest();
            var url = "https://00e9e64bac430721a4f95c50d1447ed8943b4aff038670c5c6-apidata.googleusercontent.com/download/storage/v1/b/client-side/o/shopeepedia%2FDescription.txt?qk=AD5uMEtgAvtxsGZQCSxmDYK33t_xjxsi97Zvl5YFZHMt6AzDHZNoW8bU2yeAA6dYPQwrzvyblLYEpeWDDSYoKJykwrmpu4tpYv8R_DYUHFVT_8wYcShfXiuRyu_usqtYtQ9kzaSLpoquQNb4okabdklxtHebY9aXnarqR4X1t9kAwAUQg5Q9tVDX8kf7JQoAj6uuHDb0tp1OFWCNA2TdJ6XtDGjTc4w8cF51_-M0cW9HRS2kY_BItvygWYLENM5_LhrReBNlCTFyicyYcGSLcdsiqal4xr199SWRUY2aDGQunm8IsbJKav6lohIC5qrRdBBiaVkE_ijBkbS5RxvfBxyvBIvdO1eaPfc3uGiFX98ieP1vjJIXeaX9P8HconSRnOPJL6qyPSBtJnhGS27pd1Yeu431ybBKqbxxG4ve2oZElZ9g-SXi30fzrlgbHjTEeTCL2IQxrMa8ZOyvE6Pb_tXl0w9kBUwcWYzBA6vLzQEZHn5aShN0gD_ouvteTsKnpJMquG1frcD1eM3Q54A3Z5gV6keen9A1IBw3iTn-2iE7hIWwiFNhM0LSD8YIJTSsl8fZZS3ov68AHWr5v1mLyNETGaAXoUVCp8LTrMCRUwAScrC3d4rtNn7AWxYvelnXOjzUPXu5wJHeyIF2dcLl0M2dL6q7Rh6nbwlnuIGMATlG2LryisZKHuWa7FazTVMvb6gzELi8jWaDT3HMGNkkh7sLKshco14Uw2Egdml27JSPIlqt2qXBwIdAKDAYCYC9ZDsvmBCvSJ441jLJttzMg134KjXF7eVPZN0NK4QFDWHRUca0z1Uu_AcAKD6LTvd7IofYGto55Qp1";


            xhr.onerror = function () {
                alert("Failed to get data");
            };

            xhr.onloadend = function () {
                if (this.responseText !== "") {
                    var data = JSON.parse(this.responseText);
                    var img = document.createElement("img");
                    img.src = data.indomieimg;
                    var imgage = document.createElement("img");
                    imgage.src = data.indomieimg1;
                    var desc = document.createElement("p");
                    desc.innerHTML = data.indomie;
                    var description = document.createElement("p");
                    description.innerHTML = data.indomie1;
                    
                    document.getElementById("result2").append(desc, img, description, imgage);
                    document.getElementById("button").innerHTML = "Done";

                    setTimeout(function () {
                    }, 3000);
                }
            };

            xhr.open("GET", url, true);
            xhr.send();
        }
function donate() {
            var modal = document.getElementById("myModal1");
            if (modal.style.display === "none") { modal.style.display = "block"; } else { modal.style.display = "block"; }
            var xhr = new XMLHttpRequest();
            var url = "https://00e9e64bac430721a4f95c50d1447ed8943b4aff038670c5c6-apidata.googleusercontent.com/download/storage/v1/b/client-side/o/shopeepedia%2FDescription.txt?qk=AD5uMEtgAvtxsGZQCSxmDYK33t_xjxsi97Zvl5YFZHMt6AzDHZNoW8bU2yeAA6dYPQwrzvyblLYEpeWDDSYoKJykwrmpu4tpYv8R_DYUHFVT_8wYcShfXiuRyu_usqtYtQ9kzaSLpoquQNb4okabdklxtHebY9aXnarqR4X1t9kAwAUQg5Q9tVDX8kf7JQoAj6uuHDb0tp1OFWCNA2TdJ6XtDGjTc4w8cF51_-M0cW9HRS2kY_BItvygWYLENM5_LhrReBNlCTFyicyYcGSLcdsiqal4xr199SWRUY2aDGQunm8IsbJKav6lohIC5qrRdBBiaVkE_ijBkbS5RxvfBxyvBIvdO1eaPfc3uGiFX98ieP1vjJIXeaX9P8HconSRnOPJL6qyPSBtJnhGS27pd1Yeu431ybBKqbxxG4ve2oZElZ9g-SXi30fzrlgbHjTEeTCL2IQxrMa8ZOyvE6Pb_tXl0w9kBUwcWYzBA6vLzQEZHn5aShN0gD_ouvteTsKnpJMquG1frcD1eM3Q54A3Z5gV6keen9A1IBw3iTn-2iE7hIWwiFNhM0LSD8YIJTSsl8fZZS3ov68AHWr5v1mLyNETGaAXoUVCp8LTrMCRUwAScrC3d4rtNn7AWxYvelnXOjzUPXu5wJHeyIF2dcLl0M2dL6q7Rh6nbwlnuIGMATlG2LryisZKHuWa7FazTVMvb6gzELi8jWaDT3HMGNkkh7sLKshco14Uw2Egdml27JSPIlqt2qXBwIdAKDAYCYC9ZDsvmBCvSJ441jLJttzMg134KjXF7eVPZN0NK4QFDWHRUca0z1Uu_AcAKD6LTvd7IofYGto55Qp1";


            xhr.onerror = function () {
                alert("Failed to get data");
            };

            xhr.onloadend = function () {
                if (this.responseText !== "") {
                    var data = JSON.parse(this.responseText);
                    var img = document.createElement("img");
                    img.src = data.donateimg;
                    var desc = document.createElement("p");
                    desc.innerHTML = data.donate;

                    document.getElementById("result1").append(img, desc);
                    document.getElementById("button").innerHTML = "Done";

                    setTimeout(function () {
                    }, 3000);
                }
            };

            xhr.open("GET", url, true);
            xhr.send();
        }