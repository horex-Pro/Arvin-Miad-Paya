
let addResumeIndicator = 0;
function addResume(){
    addResumeIndicator ++;   
    document.querySelector('.resume').innerHTML  +=`<div class="inputs">
    <input type="text" class="w-50" placeholder="نام شرکت" name="jobs[${addResumeIndicator}][factory_name]">
    <input type="number" class="w-50" placeholder="حقوق دریافتی" name="jobs[${addResumeIndicator}][rights]">
    <input type="text" class="w-50" placeholder="زمینه فعالیت" name="jobs[${addResumeIndicator}][field]">
    <input type="text" class="w-50" placeholder="دلیل قطع همکاری" name="jobs[${addResumeIndicator}][stop_reason]">
    <input type="text" class="w-50" placeholder="سمت" name="jobs[${addResumeIndicator}][position]">
    <input type="text" class="w-50" placeholder="آدرس شرکت" name="jobs[${addResumeIndicator}][address]">
    <input type="text" class="w-100" placeholder="تاریخ شروع همکاری" name="jobs[${addResumeIndicator}][start_date]" id="startCooperation${addResumeIndicator}">
    <input type="text" class="w-100" placeholder="تاریخ پایان همکاری" name="jobs[${addResumeIndicator}][end_date]" id="endCooperation${addResumeIndicator}">
    <input type="button" onclick="removeResume()" id="removeResumee" class="w-25" value="حذف مورد">
</div>`;    
    addResumeIndicator++;
}
function removeResume() {document.querySelector('#removeResumee').parentElement.remove();}

let addEducationIndicator = 0;
function addEducationalBackground(){
    addEducationIndicator++;
    document.querySelector('.educational-background').innerHTML  +=`<div class="inputs">
    <input type="text" class="w-50" placeholder="مقطع تحصیلی" name="edu[${addEducationIndicator}][degree]">
    <input type="number" class="w-25" placeholder="معدل" name="edu[${addEducationIndicator}][GPA]" >
    <input type="text" class="w-25" placeholder="گرایش" name="edu[${addEducationIndicator}][trend]" >
    <input type="text" class="w-50" placeholder="نام دانشگاه" name="edu[${addEducationIndicator}][uni]">
    <input type="text" class="w-50" placeholder="رشته تحصیلی" name="edu[${addEducationIndicator}][fields]">
    <input type="text" class="w-75" title="تاریخ شروع" name="edu[${addEducationIndicator}][start_date]" id="startLearn${addEducationIndicator}">
    <input type="text" class="w-75" title="تاریخ پایان" name="edu[${addEducationIndicator}][end_date]" id="endLearn${addEducationIndicator}">
    <input type="button" onclick="removeEducationalBackground()" id="removeEducationalBackgroundd" class="w-25" value="حذف مورد">
    </div>`;
    addEducationIndicator++;

}

function removeEducationalBackground() {document.querySelector('#removeEducationalBackgroundd').parentElement.remove();}

let addlanguageIndicator = 0;
function addlanguage(){
    addlanguageIndicator++;
    document.querySelector('.languages').innerHTML  +=`<div class="inputs">
    <input type="text" class="w-100" placeholder="نام زبان" name="lang[${addlanguageIndicator}][name]">
    <select name="" class="w-25" id="speaking" name="lang[${addlanguageIndicator}][conversation]">
        <option value="">مکالمه</option>
        <option value="3">عالی</option>
        <option value="2">خوب</option>
        <option value="1">متوسط</option>
        <option value="0">ضعیف</option>
    </select>
    <select class="w-25" id="reading" name="lang[${addlanguageIndicator}][read]">
        <option value="" disabled>خواندن</option>
        <option value="3">عالی</option>
        <option value="2">خوب</option>
        <option value="1">متوسط</option>
        <option value="0">ضعیف</option>
    </select>
    <select class="w-25" id="writing" name="lang[${addlanguageIndicator}][write]">
        <option value="" disabled>نوشتن</option>
        <option value="3">عالی</option>
        <option value="2">خوب</option>
        <option value="1">متوسط</option>
        <option value="0">ضعیف</option>
    </select>
    <input type="button" onclick="removelanguage()" id="removelanguagee" class="w-25" value="حذف مورد">
    </div>`;
    addlanguageIndicator++;
    
}
function removelanguage() {document.querySelector('#removelanguagee').parentElement.remove();}

let addSoftIndicator = 0;
function addFamiliarityWithSpecializedSoftware(){
    addSoftIndicator++;
    document.querySelector('.familiarity-with-specialized-software').innerHTML  +=`<div class="inputs">
    <input type="text" class="w-50" placeholder="نام نرم افزار" name="soft[${addSoftIndicator}][name]">
    <select name="" class="w-25" id="knowledge" name="soft[${addSoftIndicator}][degree]">
         <option value="">میزان آشنایی</option>
         <option value="3">عالی</option>
         <option value="2">خوب</option>
         <option value="1">متوسط</option>
         <option value="0">ضعیف</option>
    </select>
    <input type="button" onclick="removeFamiliarityWithSpecializedSoftware()" id="removeFamiliarityWithSpecializedSoftwaree" class="w-25" value="حذف مورد">
    </div>`;
    addSoftIndicator++;
}
function removeFamiliarityWithSpecializedSoftware() {document.querySelector('#removeFamiliarityWithSpecializedSoftwaree').parentElement.remove();}

let addCourseIndicator = 0;
function addSpecializedCoursesProvided(){
    addCourseIndicator++;
    document.querySelector('.specialized-courses-provided').innerHTML  +=`<div class="inputs">
    <input type="text" class="w-50" placeholder="نام دوره" name="courses[${addCourseIndicator}][name]">
    <input type="text" class="w-50" placeholder="محل برگزاری" name="courses[${addCourseIndicator}][address]">
    <input type="time" class="w-25" title="مدت دوره" name="courses[${addCourseIndicator}][time]">
    <input type="text" class="w-25" title="تاریخ دوره" id="coursesDate" name="courses[${addCourseIndicator}][date]">
    <input type="button" onclick="removeSpecializedCoursesProvided()" id="removeSpecializedCoursesProvidedd" class="w-25" value="حذف مورد">
    </div>`;
    addCourseIndicator++;
}
function removeSpecializedCoursesProvided() {document.querySelector('#removeSpecializedCoursesProvidedd').parentElement.remove();}
