function addResume(){
    document.querySelector('.resume').innerHTML  +=`<div class="inputs">
    <input type="text" class="w-50" placeholder="نام شرکت">
    <input type="number" class="w-50" placeholder="حقوق دریافتی">
    <input type="text" class="w-50" placeholder="زمینه فعالیت">
    <input type="text" class="w-50" placeholder="دلیل قطع همکاری">
    <input type="text" class="w-50" placeholder="سمت">
    <input type="date" class="w-25" title="تاریخ شروع همکاری">
    <input type="date" class="w-25" title="تاریخ پایان همکاری">
    <input type="text" class="w-75" placeholder="آدرس شرکت">
    <input type="button" onclick="removeResume()" id="removeResumee" class="w-25" value="حذف مورد">
</div>`;
}
function removeResume() {document.querySelector('#removeResumee').parentElement.remove();}

function addEducationalBackground(){
    document.querySelector('.educational-background').innerHTML  +=`<div class="inputs">
    <input type="text" class="w-50" placeholder="مقطع تحصیلی">
    <input type="number" class="w-25" placeholder="معدل">
    <input type="text" class="w-25" placeholder="گرایش">
    <input type="text" class="w-50" placeholder="نام دانشگاه">
    <input type="date" class="w-25" title="تاریخ شروع">
    <input type="date" class="w-25" title="تاریخ پایان">
    <input type="text" class="w-50" placeholder="رشته تحصیلی">
    <input type="button" onclick="removeEducationalBackground()" id="removeEducationalBackgroundd" class="w-25" value="حذف مورد">
    </div>`;
}
function removeEducationalBackground() {document.querySelector('#removeEducationalBackgroundd').parentElement.remove();}

function addEducationalBackground(){
    document.querySelector('.educational-background').innerHTML  +=`<div class="inputs">
    <input type="text" class="w-50" placeholder="مقطع تحصیلی">
    <input type="number" class="w-25" placeholder="معدل">
    <input type="text" class="w-25" placeholder="گرایش">
    <input type="text" class="w-50" placeholder="نام دانشگاه">
    <input type="date" class="w-25" title="تاریخ شروع">
    <input type="date" class="w-25" title="تاریخ پایان">
    <input type="text" class="w-50" placeholder="رشته تحصیلی">
    <input type="button" onclick="removeEducationalBackground()" id="removeEducationalBackgroundd" class="w-25" value="حذف مورد">
    </div>`;
}
function removeEducationalBackground() {document.querySelector('#removeEducationalBackgroundd').parentElement.remove();}

function addlanguage(){
    document.querySelector('.languages').innerHTML  +=`<div class="inputs">
    <input type="text" class="w-100" placeholder="نام زبان">
    <select name="" class="w-25" id="speaking">
        <option value="">مکالمه</option>
        <option value="">عالی</option>
        <option value="">خوب</option>
        <option value="">متوسط</option>
        <option value="">ضعیف</option>
    </select>
    <select name="" class="w-25" id="reading">
        <option value="">خواندن</option>
        <option value="">عالی</option>
        <option value="">خوب</option>
        <option value="">متوسط</option>
        <option value="">ضعیف</option>
    </select>
    <select name="" class="w-25" id="writing">
        <option value="">نوشتن</option>
        <option value="">عالی</option>
        <option value="">خوب</option>
        <option value="">متوسط</option>
        <option value="">ضعیف</option>
    </select>
    <input type="button" onclick="removelanguage()" id="removelanguagee" class="w-25" value="حذف مورد">
    </div>`;
}
function removelanguage() {document.querySelector('#removelanguagee').parentElement.remove();}

function addFamiliarityWithSpecializedSoftware(){
    document.querySelector('.familiarity-with-specialized-software').innerHTML  +=`<div class="inputs">
    <input type="text" class="w-50" placeholder="نام نرم افزار">
    <select name="" class="w-25" id="knowledge">
         <option value="">میزان آشنایی</option>
         <option value="">عالی</option>
         <option value="">خوب</option>
         <option value="">متوسط</option>
         <option value="">ضعیف</option>
    </select>
    <input type="button" onclick="removeFamiliarityWithSpecializedSoftware()" id="removeFamiliarityWithSpecializedSoftwaree" class="w-25" value="حذف مورد">
    </div>`;
}
function removeFamiliarityWithSpecializedSoftware() {document.querySelector('#removeFamiliarityWithSpecializedSoftwaree').parentElement.remove();}

function addSpecializedCoursesProvided(){
    document.querySelector('.specialized-courses-provided').innerHTML  +=`<div class="inputs">
    <input type="text" class="w-50" placeholder="نام دوره">
    <input type="text" class="w-50" placeholder="محل برگزاری">
    <input type="time" class="w-25" title="مدت دوره">
    <input type="date" class="w-25" title="تاریخ دوره">
    <input type="button" onclick="removeSpecializedCoursesProvided()" id="removeSpecializedCoursesProvidedd" class="w-25" value="حذف مورد">
    </div>`;
}
function removeSpecializedCoursesProvided() {document.querySelector('#removeSpecializedCoursesProvidedd').parentElement.remove();}